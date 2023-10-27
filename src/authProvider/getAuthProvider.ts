import {AuthProvider as RaAuthProvider} from 'react-admin';
import Keycloak, {KeycloakTokenParsed} from 'keycloak-js';
import {keycloakAuthProvider} from 'ra-keycloak';
import {ApolloClient, NormalizedCacheObject, gql, ApolloQueryResult, ApolloError} from '@apollo/client';
import getApollo from '../apollo/getApollo';
import log from '../utils/log';

export type PermissionsFunction = (decoded: KeycloakTokenParsed) => any;

export interface AuthProvider extends RaAuthProvider {
  getRoles: () => Promise<string[]>;
}

const PERMISSINS_STORAGE_KEY = 'permissions';
const ROLES_STORAGE_KEY = 'roles';

const PERMISSIONS_QUERY = gql`
  query {
    getPermissions
    getRoles
  }
`;

let permissionsCall: Promise<ApolloQueryResult<any>> | null = null;
const getPermissionsCall = (client: ApolloClient<NormalizedCacheObject>) => {
  if (!permissionsCall) {
    permissionsCall = client.query({
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
  localStorage.removeItem(PERMISSINS_STORAGE_KEY);
  localStorage.removeItem(ROLES_STORAGE_KEY);
};

const getAuthProvider = (
  endpoint: string,
  keycloak: Keycloak,
  options: {
      onPermissions?: PermissionsFunction;
      loginRedirectUri?: string;
      logoutRedirectUri?: string;
  } = {},
): AuthProvider => {
  log.info(`endpoint: ${endpoint}`);

  const original = keycloakAuthProvider(keycloak, options);

  return {
    ...original,

    login: async (params: any) => {
      clearLocalStorage();

      return original.login(params);
    },
    logout: async (params: any) => {
      clearLocalStorage();

      return original.logout(params);
    },
    checkError: async (error) => {
      const {status} = error;

      log.info('checkError status: error');
      log.info(error);
      log.info(JSON.stringify(error, null, 1));
      log.info(`error keys: ${Object.keys(error)}`);
      log.info(`checkError status: ${status}`);

      // networkError.statusCode networkError.result.codenetwork Error.result.message networkError.result.details

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

        throw new Error('auth.unauthorised');
      }

      return original.checkError(error);
    },
    getPermissions: async () => {
      if (!localStorage.getItem(PERMISSINS_STORAGE_KEY)) {
        const client = getApollo(endpoint, keycloak);

        const {data, error} = await getPermissionsCall(client);

        log.info('error');
        log.info(error);

        if (data.getPermissions) {
          // permissionsCache.set(cacheKey, data.getPermissions);
          localStorage.setItem(PERMISSINS_STORAGE_KEY, JSON.stringify(data.getPermissions));
        }

        if (data.getRoles) {
          localStorage.setItem(ROLES_STORAGE_KEY, JSON.stringify(data.getRoles));
        }
      }

      return JSON.parse(localStorage.getItem(PERMISSINS_STORAGE_KEY) as string);
    },
    getRoles: async () => {
      if (!localStorage.getItem(ROLES_STORAGE_KEY)) {
        const client = getApollo(endpoint, keycloak);

        const {data, error} = await getPermissionsCall(client);

        log.info('error');
        log.info(error);

        if (data.getPermissions) {
          // permissionsCache.set(cacheKey, data.getPermissions);
          localStorage.setItem(ROLES_STORAGE_KEY, JSON.stringify(data.getPermissions));
        }

        if (data.getRoles) {
          localStorage.setItem(ROLES_STORAGE_KEY, JSON.stringify(data.getRoles));
        }
      }

      return JSON.parse(localStorage.getItem(ROLES_STORAGE_KEY) as string);
    },
  };
};

export default getAuthProvider;
