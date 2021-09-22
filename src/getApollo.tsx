import {
  ApolloClient,
  InMemoryCache,
  ApolloLink,
  from,
} from '@apollo/client';
import {getJwtToken} from './authProvider/getAuthProvider';
import {RetryLink} from '@apollo/client/link/retry';
import {createUploadLink} from 'apollo-upload-client';
import './utils/polyfills/BigInt';

const getApollo = (endpoint: string) => {
  const link = from([
    new RetryLink(),
    createUploadLink({
      headers: {
        authorization: `Bearer ${getJwtToken()}`,
      },
      uri: `${endpoint}/graph`,
    }) as unknown as ApolloLink,
  ]);

  return new ApolloClient({
    cache: new InMemoryCache(),
    defaultOptions: {
      query: {fetchPolicy: 'network-only'},
    },
    link,
  });
};
export default getApollo;
