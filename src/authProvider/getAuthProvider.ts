import {AuthProvider} from "react-admin";

const JWT_STORAGE_KEY = 'jwt';
const IDENTITY_STORAGE_KEY = 'identity';

export const getJwtToken = () => localStorage.getItem(JWT_STORAGE_KEY);

const getAuthProvider: (endpoint: string) => AuthProvider = (endpoint) => ({
  login: async ({email, password}) => {
    // const endpoint = '213';
    // const {post, response, loading, error, data} = useFetch(
    //   `${endpoint}/rest/login`,
    //   {
    //     cachePolicy: CachePolicies.NO_CACHE,
    //   },
    // );

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
      .then(({id, message, token}) => {
        localStorage.setItem(JWT_STORAGE_KEY, token);
        localStorage.setItem(IDENTITY_STORAGE_KEY, JSON.stringify({
          id,
          fullName: 'user',
          avatar: 'some avatar',
        }));
      });
  },
  checkError: async (error) => {
    const status = error.status;
    if (status === 401 || status === 403) {
        localStorage.removeItem(JWT_STORAGE_KEY);

        return Promise.reject();
    }

    return Promise.resolve();
  },
  checkAuth: async (_params) => {

    return localStorage.getItem(JWT_STORAGE_KEY)
      ? Promise.resolve()
      : Promise.reject();
  },
  logout: async () => {
    localStorage.removeItem(JWT_STORAGE_KEY);

    return Promise.resolve();
  },
  getIdentity: async () => {
    const stringified = localStorage.getItem(IDENTITY_STORAGE_KEY);
    if (!stringified) {
      return Promise.reject();
    }
    try {
        const identity = JSON.parse(stringified);
        return Promise.resolve(identity);
    } catch (error) {
        return Promise.reject(error);
    }
  },
  getPermissions: async (params) => {
    return Promise.resolve();
  },
});

export default getAuthProvider;