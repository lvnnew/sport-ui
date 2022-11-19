import {
  ApolloClient,
  InMemoryCache,
  ApolloLink,
  from,
  NormalizedCacheObject,
} from '@apollo/client';
import {getJwtToken} from '../authProvider/getAuthProvider';
import {RetryLink} from '@apollo/client/link/retry';
import {createUploadLink} from 'apollo-upload-client';
import cacheTypePolicies from './cacheTypePolicies';

let apollo: ApolloClient<NormalizedCacheObject> | undefined;

export const updateApolloLinks = (endpoint: string) => {
  // this method kills all previous requests, use it carefully
  if (apollo) {
    apollo.setLink(from([
      new RetryLink(),
      createUploadLink({
        headers: {
          authorization: `Bearer ${getJwtToken()}`,
        },
        uri: `${endpoint}/graph`,
      }) as unknown as ApolloLink,
    ]));
  }
};

const getApollo = (endpoint: string) => {
  if (!apollo) {
    apollo = new ApolloClient({
      cache: new InMemoryCache({
        typePolicies: cacheTypePolicies,
      }),
      defaultOptions: {
        query: {fetchPolicy: 'network-only'},
      },
    });
    updateApolloLinks(endpoint);
  }

  return apollo;
};

export default getApollo;
