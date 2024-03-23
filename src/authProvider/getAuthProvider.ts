import {AuthProvider as RaAuthProvider} from 'react-admin';
import {
  ApolloClient,
  NormalizedCacheObject,
  gql,
  ApolloQueryResult,
  ApolloError,
} from '@apollo/client';
import getApollo, {updateApolloLinks} from '../apollo/getApollo';
import getIdentityFromUser from './getIdentityFromUser';
import getUserManager from './getUserManager';
import {AuthProviderOptions} from './types';
import {User} from 'oidc-client-ts';
import log from '../utils/log';

export interface AuthProvider extends RaAuthProvider {
  getUser: () => Promise<User | null>;
  getRoles: () => Promise<string[]>;
}

// const TOKEN_STORAGE_KEY = 'token';
const PERMISSINS_STORAGE_KEY = 'permissions';
const ROLES_STORAGE_KEY = 'roles';

const MANAGER_QUERY = gql`
  query {
    getCurrentManager {
      id
      title
      fullName
      lastName
      firstName
      email
      unitId
      headOfUnit
      position
      active
      deleted
    }
  }
`;

const PERMISSIONS_QUERY = gql`
  query {
    getPermissions
    getRoles
  }
`;

let permissionsCall: Promise<ApolloQueryResult<any>> | null = null;
const getPermissionsCall = (apollo: ApolloClient<NormalizedCacheObject>) => {
  if (!permissionsCall) {
    permissionsCall = apollo.query({
      query: PERMISSIONS_QUERY,
      fetchPolicy: 'cache-first',
    }).then(data => {
      permissionsCall = null;

      return data;
    });
  }

  return permissionsCall;
};

const clearLocalStorage = () => {
  // localStorage.removeItem(TOKEN_STORAGE_KEY);
  localStorage.removeItem(PERMISSINS_STORAGE_KEY);
  localStorage.removeItem(ROLES_STORAGE_KEY);
};

const getAuthProvider = (options: AuthProviderOptions): AuthProvider => {
  log.info(`
    issuer: ${options.issuer}
    clientId: ${options.clientId}
    loginRedirectUri: ${options.loginRedirectUri}
  `);

  const userManager = getUserManager(options);

  const apollo = getApollo(options.backEndpoint, '');

  return {
    getUser: () => userManager.getUser(),
    login: async () => {
      log.info('!!!!!!!!!!!!!!!!!!! login');
      clearLocalStorage();

      await userManager.signinRedirect();
    },
    logout: async () => {
      log.info('!!!!!!!!!!!!!!!!!!! logout');
      switch (options.logout) {
        case 'silentRedirect':
          await userManager.signoutSilent();
          break;
        case 'redirect':
          await userManager.signoutRedirect({post_logout_redirect_uri: options.logoutRedirectUri});
          break;
        default:
          await userManager.removeUser();
      }
    },
    checkError: async (error) => {
      log.info('!!!!!!!!!!!!!!!!!!! checkError');

      clearLocalStorage();

      const {status} = error;

      log.info('checkError status: error');
      log.info(error);
      log.info(JSON.stringify(error, null, 1));
      log.info(`error keys: ${Object.keys(error)}`);
      log.info(`checkError status: ${status}`);

      if (error instanceof ApolloError) {
        if (error.networkError && 'statusCode' in error.networkError) {
          log.info(`networkError.statusCode: ${error.networkError.statusCode}`);
        }

        if (error.networkError && 'result' in error.networkError) {
          log.info(`message: ${error.networkError.result.code}`);
          log.info(`message: ${error.networkError.result.message}`);
          log.info(error.networkError.result.details);
        }

        if (
          error.networkError &&
          'result' in error.networkError &&
          (
            error.networkError.statusCode === 401 ||
            error.networkError.statusCode === 403
          )
        ) {
          log.error('status === 401 || status === 403, auth.unauthorised');
          throw new Error('auth.unauthorised');
        }
      }

      if (status === 401 || status === 403) {
        // localStorage.removeItem(JWT_STORAGE_KEY);

        log.error('status === 401 || status === 403, auth.unauthorised');
        throw new Error('auth.unauthorised');
      }
    },
    checkAuth: async () => {
      log.info('!!!!!!!!!!!!!!!!!!! checkAuth');
      const user = await userManager.getUser();

      if (!user || user.expired) {
        throw new Error('auth.unauthorised');
      }
    },
    getIdentity: async () => {
      log.info('!!!!!!!!!!!!!!!!!!! getIdentity');

      const user = await userManager.getUser();

      if (!user || user.expired) {
        throw new Error('auth.unauthorised');
      }

      return getIdentityFromUser(user);
    },
    handleCallback: async () => {
      log.info('!!!!!!!!!!!!!!!!!!! handleCallback');
      const user = await userManager.signinCallback();

      log.info('user');
      log.info(user);

      if (!user) {
        throw new Error('auth.unauthorised');
      }

      updateApolloLinks(options.backEndpoint, user.access_token);
    },

    getPermissions: async () => {
      log.info('!!!!!!!!!!!!!!!!!!! getPermissions');
      if (!localStorage.getItem(PERMISSINS_STORAGE_KEY)) {
        const user = await userManager.getUser();

        if (!user) {
          throw new Error('auth.unauthorised');
        }

        const {data, error} = await getPermissionsCall(apollo);

        log.info('error');
        log.info(error);

        if (data.getPermissions) {
          localStorage.setItem(PERMISSINS_STORAGE_KEY, JSON.stringify(data.getPermissions));
        }

        if (data.getRoles) {
          localStorage.setItem(ROLES_STORAGE_KEY, JSON.stringify(data.getRoles));
        }
      }

      return JSON.parse(localStorage.getItem(PERMISSINS_STORAGE_KEY) as string);
    },
    getRoles: async () => {
      log.info('!!!!!!!!!!!!!!!!!!! getRoles');
      if (!localStorage.getItem(ROLES_STORAGE_KEY)) {
        const user = await userManager.getUser();

        if (!user) {
          throw new Error('auth.unauthorised');
        }

        const {data, error} = await getPermissionsCall(apollo);

        log.info('error');
        log.info(error);

        if (data.getPermissions) {
          localStorage.setItem(PERMISSINS_STORAGE_KEY, JSON.stringify(data.getPermissions));
        }

        if (data.getRoles) {
          localStorage.setItem(ROLES_STORAGE_KEY, JSON.stringify(data.getRoles));
        }
      }

      return JSON.parse(localStorage.getItem(ROLES_STORAGE_KEY) as string);
    },
    getCurrentManager: async () => {
      log.info('!!!!!!!!!!!!!!!!!!! getCurrentManager');

      const data = await apollo.query({
        query: MANAGER_QUERY,
        fetchPolicy: 'cache-first',
      });

      return data.data.getCurrentManager;
    },
  };
};

export default getAuthProvider;
