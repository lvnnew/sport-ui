import {ApolloClient} from '@apollo/client';
import {DataProvider} from 'react-admin';

const getCustomMethods = (
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _client: ApolloClient<unknown>,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _baseDataProvider: DataProvider<string>,
) => ({});

export default getCustomMethods;
