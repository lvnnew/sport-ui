import {ApolloClient, gql} from '@apollo/client';
import {DataProvider} from 'react-admin';

const getCustomMethods = (
  client: ApolloClient<unknown>,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _baseDataProvider: DataProvider<string>,
) => ({
  downloadEntityRecords: async ({
    entityName,
    filter,
  }: {
    entityName: string,
    filter?: Record<string, any>,
  }) => {
    return client.mutate({
      mutation: gql`
        mutation downloadEntityRecords($entityName: EntityType!, $filter: JSON) {
          downloadEntityRecords(entityName: $entityName, filter: $filter)
        }
      `,
      variables: {
        entityName,
        filter,
      },
    });
  },
});

export default getCustomMethods;
