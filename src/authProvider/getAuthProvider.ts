import {AuthProvider} from 'react-admin';
import getApollo from '../apollo/getApollo';
// import LRUCache from 'lru-cache';
import {ApolloClient, NormalizedCacheObject, gql, ApolloQueryResult} from '@apollo/client';

const JWT_STORAGE_KEY = 'jwt';
const IDENTITY_STORAGE_KEY = 'identity';
const PERMISSINS_STORAGE_KEY = 'permissions';

// const permissionsCache = new LRUCache({
//   ttl: 1000 * 60 * 10,
//   max: 3000,
// });

// const cacheKey = 'permissions';

export const getJwtToken = () => localStorage.getItem(JWT_STORAGE_KEY);

const PERMISSIONS_QUERY = gql`
  query {
    getPermissions
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

const getAuthProvider: (
  endpoint: string,
  onLogin: () => void,
) => AuthProvider = (endpoint, onLogin) => ({
  login: async ({email, password}) => {
    localStorage.removeItem(PERMISSINS_STORAGE_KEY);
    // permissionsCache.reset();
    const request = new Request(`${endpoint}/rest/login`, {
      method: 'POST',
      body: JSON.stringify({email, password}),
      headers: new Headers({'Content-Type': 'application/json'}),
    });

    return fetch(request)
      .then(response => {
        if (response.status < 200 || response.status >= 300) {
          throw new Error(response.statusText);
        }

        return response.json();
      })
      .then(({id, token, fullName, permissions}) => {
        localStorage.setItem(JWT_STORAGE_KEY, token);
        localStorage.setItem(IDENTITY_STORAGE_KEY, JSON.stringify({
          id,
          fullName,
          avatar: 'some avatar',
        }));
        localStorage.setItem(PERMISSINS_STORAGE_KEY, JSON.stringify(permissions));
        onLogin();
      });
  },
  checkError: async (error) => {
    const {status} = error;
    if (status === 401 || status === 403) {
      localStorage.removeItem(JWT_STORAGE_KEY);

      throw new Error('Unauthorised');
    }
  },
  checkAuth: async () => {
    return localStorage.getItem(JWT_STORAGE_KEY) ?
      Promise.resolve() :
      Promise.reject(new Error('Unauthorised'));
  },
  logout: async () => {
    localStorage.removeItem(JWT_STORAGE_KEY);
    localStorage.removeItem(PERMISSINS_STORAGE_KEY);
    // permissionsCache.reset();
  },
  getIdentity: async () => {
    const stringified = localStorage.getItem(IDENTITY_STORAGE_KEY);
    if (!stringified) {
      throw new Error('No identty');
    }

    const identity = JSON.parse(stringified);

    return identity;
  },
  getPermissions: async () => {
    if (!localStorage.getItem(PERMISSINS_STORAGE_KEY)) {
      const client = getApollo(endpoint);

      const {data} = await getPermissionsCall(client);

      if (data.getPermissions) {
        // permissionsCache.set(cacheKey, data.getPermissions);
        localStorage.setItem(PERMISSINS_STORAGE_KEY, JSON.stringify(data.getPermissions));
      }
    }

    return JSON.parse(localStorage.getItem(PERMISSINS_STORAGE_KEY) as string);
  },
});

export default getAuthProvider;
