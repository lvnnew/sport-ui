import {
  ApolloClient,
  InMemoryCache,
  ApolloLink,
  from,
  NormalizedCacheObject,
} from '@apollo/client';
import {RetryLink} from '@apollo/client/link/retry';
import {createUploadLink} from 'apollo-upload-client';
import cacheTypePolicies from './cacheTypePolicies';

let apollo: ApolloClient<NormalizedCacheObject> | undefined;

const operationNamesForbiddenForRetry = [
  'logout',
];

export const updateApolloLinks = (endpoint: string, accessToken: string) => {
  // this method kills all previous requests, use it carefully
  if (apollo) {
    apollo.setLink(from([
      new RetryLink({
        attempts: {
          retryIf: (error, operation) => {
            const forbiddenForRetryOpName = operationNamesForbiddenForRetry.includes(operation.operationName);
            const forbiddenForRetryStatus: boolean = error.statusCode && error.statusCode === 401;

            return !forbiddenForRetryOpName && !forbiddenForRetryStatus;
          },
        },
      }),
      createUploadLink({
        headers: {
          authorization: `Bearer ${accessToken}`,
        },
        uri: `${endpoint}/graph`,
      }) as any as ApolloLink, // FIXME У apollo-upload-client какие-то кривые types
    ]));
  }
};

const getApollo = (endpoint: string, accessToken: string) => {
  if (!apollo) {
    apollo = new ApolloClient({
      cache: new InMemoryCache({
        typePolicies: cacheTypePolicies,
      }),
      defaultOptions: {
        query: {fetchPolicy: 'network-only'},
      },
    });
    updateApolloLinks(endpoint, accessToken);
  }

  return apollo;
};

export default getApollo;
