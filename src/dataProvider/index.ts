import buildApolloClient, {
  buildQuery as buildQueryFactory,
} from 'ra-data-graphql-simple';
import {
  DELETE, LegacyDataProvider,
} from 'ra-core';
import gql from 'graphql-tag';
import {
  IntrospectionField,
  IntrospectionSchema,
  IntrospectionType,
} from 'graphql';
import {
  InMemoryCache,
  ApolloQueryResult,
} from '@apollo/client';
import {
  agrMapping,
} from '../agr/entityMapping';
import {
  demoMapping,
} from '../demo/entityMapping';
import {toPairs} from 'lodash';
import {__schema as schema} from '../generated/graphql.schema.json';

// DO NOT EDIT! THIS IS GENERATED FILE

const mapping = {
  ...demoMapping,
  ...agrMapping,
};

const getGqlResource = async (resource: string) => {
  if (resource in mapping) {
    return mapping[resource as keyof typeof mapping];
  } else {
    return Promise.reject(new Error(`Unknown resource ${resource}`));
  }
};

type IntrospectionResource = IntrospectionType & {
    [key: string]: IntrospectionField;
};

interface IntrospectionResults {
    types: IntrospectionType[];
    queries: IntrospectionField[];
    resources: IntrospectionResource[];
    schema: IntrospectionSchema;
}

const numberIdResources: string[] = [
  'files',
  'users',
  'admins',
  'appLogins',
  'managers',
  'managerLogins',
  'tags'
];

const customBuildQuery = (
  introspectionResults: IntrospectionResults,
): LegacyDataProvider => {
  const buildQuery = buildQueryFactory(introspectionResults);

  return (type, resource, params) => {
    if (type === DELETE) {
      const mappedResourcePair = toPairs(mapping)
        .find(([, value]: [string, string]) => value === resource);
      const mappedResource = mappedResourcePair ? mappedResourcePair[0] : '';
      return {
        parseResponse: ({data}: ApolloQueryResult<any>) => {
          if (data[`remove${resource}`]) {
            return {data: {id: params.id}};
          }

          throw new Error(`Could not delete ${resource}`);
        },
        query: gql`mutation remove${resource}($id: ${
          numberIdResources.includes(mappedResource)
          ? 'Int!'
          : 'ID!'
          }) {
                    remove${resource}(id: $id)
              }`,
        variables: {id: params.id},
      };
    }

    return buildQuery(type, resource, params);
  };
};

const cache = new InMemoryCache();

export default (client: any) => {
  return buildApolloClient({
    buildQuery: customBuildQuery,
    cache,
    client,
    introspection: {
      schema,
      operationNames: {
        [DELETE]: (resource: IntrospectionType) =>
          `remove${resource.name}`,
      },
    },
  }).then(
    (dataProvider: LegacyDataProvider) => (
      ...rest: Parameters<LegacyDataProvider>
    ) => {
      const [type, resource, params] = rest;

      if (numberIdResources.some(rs => rs === resource) && type === 'GET_ONE' && 'id' in params) {
        params.id = Number.parseInt(params.id, 10);
      }

      return getGqlResource(resource).then(gqlResource => dataProvider(type, gqlResource, params));
    },
  );
};
