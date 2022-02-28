import {gql} from '@apollo/client/core';
import {AuthProvider} from 'react-admin';
import getApollo from '../apollo/getApollo';
import LRUCache from 'lru-cache';

const JWT_STORAGE_KEY = 'jwt';
const IDENTITY_STORAGE_KEY = 'identity';

const permissionsCache = new LRUCache({
  ttl: 1000 * 60 * 10,
  max: 3000,
})
const cacheKey = 'permissions';

export const getJwtToken = () => localStorage.getItem(JWT_STORAGE_KEY);

export const PERMISSIONS_QUERY = gql`
  query {
    getManagerPermissions
  }
`;

const getAuthProvider: (
  endpoint: string,
  onLogin: () => void,
) => AuthProvider = (endpoint, onLogin) => ({
  login: async ({email, password}) => {
    permissionsCache.reset();
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
      .then(({id, token, fullName}) => {
        localStorage.setItem(JWT_STORAGE_KEY, token);
        localStorage.setItem(IDENTITY_STORAGE_KEY, JSON.stringify({
          id,
          fullName,
          avatar: 'some avatar',
        }));
        onLogin();
      });
  },
  checkError: async (error) => {
    const {status} = error;
    if (status === 401 || status === 403) {
      localStorage.removeItem(JWT_STORAGE_KEY);

      return Promise.reject(new Error('Unauthorised'));
    }

    return Promise.resolve();
  },
  checkAuth: async () => {
    return localStorage.getItem(JWT_STORAGE_KEY) ?
      Promise.resolve() :
      Promise.reject(new Error('Unauthorised'));
  },
  logout: async () => {
    localStorage.removeItem(JWT_STORAGE_KEY);
    permissionsCache.reset();

    return Promise.resolve();
  },
  getIdentity: async () => {
    const stringified = localStorage.getItem(IDENTITY_STORAGE_KEY);
    if (!stringified) {
      return Promise.reject(new Error('No identty'));
    }

    try {
      const identity = JSON.parse(stringified);

      return Promise.resolve(identity);
    } catch (error: any) {
      return Promise.reject(error);
    }
  },
  getPermissions: async () => {
    if (!permissionsCache.has(cacheKey)) {
      const client = getApollo(endpoint);
      const {data} = await client.query({
        query: PERMISSIONS_QUERY,
        fetchPolicy: 'cache-first',
      });

      if (data.getManagerPermissions) {
        permissionsCache.set(cacheKey, data.getManagerPermissions);
      }
    }

    return permissionsCache.get(cacheKey);
  },
});

export default getAuthProvider;
