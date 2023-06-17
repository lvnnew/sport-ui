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

  deactivateManagers: async (managerIds: number[]) => {
    return client.mutate({
      mutation: gql`
        mutation deactivateManagers($managerIds: [Int!]!) {
          deactivateManagers(managerIds: $managerIds)
        }
      `,
      variables: {
        managerIds,
      },
    });
  },

  newManager: async ({
    firstName,
    lastName,
    email,
    password,
    roles,
  }: {
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    roles: string[],
  }) => {
    return client.mutate({
      mutation: gql`
        mutation newManager(
          $firstName: String!,
          $lastName: String!,
          $email: String!,
          $password: String!,
          $roles: [String!],
        ) {
          newManager(
            firstName: $firstName,
            lastName: $lastName,
            email: $email,
            password: $password,
            roles: $roles,
          )
        }
      `,
      variables: {
        firstName,
        lastName,
        email,
        password,
        roles,
      },
    });
  },

});

export default getCustomMethods;
