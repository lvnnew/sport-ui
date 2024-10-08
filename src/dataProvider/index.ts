import buildGraphQLProvider, {buildQuery as buildQueryFactory} from 'ra-data-graphql-simple';
import {IntrospectionResult} from 'ra-data-graphql';
import {DELETE} from 'ra-core';
import gql from 'graphql-tag';
import {IntrospectionType, IntrospectionSchema} from 'graphql';
import {mapping} from '../adm/entityMapping';
import sch from '../generated/graphql.schema.json';
import {ApolloClient} from '@apollo/client';
import getCustomMethods from './getCustomMethods';
import getAdditionalMethods from './getAdditionalMethods';
import {DataProvider} from './types';

// DO NOT EDIT! THIS IS GENERATED FILE

const schema = sch.__schema;

const getGqlResource = (resource: string) => {
  if (resource in mapping) {
    return mapping[resource as keyof typeof mapping];
  } else {
    throw new Error(`Unknown resource ${resource}`);
  }
};

const numberIdResources: string[] = [
  'appRefreshTokens',
  'tags',
  'admRefreshTokens',
  'wscContacts',
  'wscMessages',
  'wscUsers',
  'auditLogs',
  'matchVideos',
  'glossaries',
  'delegations',
  'playerForMatchRequests',
  'matchRequests',
  'players',
  'playerForTeamMatchLists',
  'teamForPlayers',
  'autogenerationHistoryEntries',
  'historyOfPlayerRoles',
  'clubs',
  'teamMatchReports',
  'teams',
  'teamForCompetitions',
  'managerLogins',
  'appLogins',
  'matches',
  'managers',
  'organizators',
  'aggregateTrackings',
  'entitiesTrackings',
  'reportForClubs',
  'reportForTeams',
  'reportForOrganizations',
  'reportForParents',
  'units',
  'users',
  'matchPeriodMarkups',
  'managersToPermissions',
  'rolesToPermissions',
  'mailingCampaigns',
  'playerCompetitionRatings',
  'playerMatchRatings',
  'parents',
  'managersToRoles',
  'events',
  'mailingMessages',
  'teamMatchLists',
  'playerForCompetitionTeams',
  'templateStyles',
  'tenants',
  'competitions',
  'files',
  'messageTemplateLangVariants',
];

const customBuildQuery = (introspection: IntrospectionResult) =>
  (fetchType: string, originalResource: string, params: any) => {
    const resource = getGqlResource(originalResource);

    const builtQuery = buildQueryFactory(introspection)(fetchType, resource, params);

    if (numberIdResources.includes(resource) && fetchType === 'GET_ONE' && 'id' in params) {
      params.id = Number.parseInt(params.id, 10);
    }

    if (resource === 'Command' && fetchType === 'GET_ONE') {
      return {
      // Use the default query variables and parseResponse
        ...builtQuery,

        // Override the query
        query: gql`
          query Command($id: ID!) {
              data: Command(id: $id) {
                  id
                  reference
                  customer {
                      id
                      firstName
                      lastName
                  }
              }
          }
        `,
      };
    }

    return builtQuery;
  };

export default async (client: ApolloClient<unknown>): Promise<DataProvider> => {
  const baseDataProvider = await buildGraphQLProvider({
    buildQuery: customBuildQuery,
    client: client as any,
    introspection: {
      schema: schema as unknown as IntrospectionSchema,
      operationNames: {
        [DELETE]: (resource: IntrospectionType) =>
          `remove${resource.name}`,
      },
    },
  });

  return {
    ...baseDataProvider,
    ...getCustomMethods(client, baseDataProvider),
    ...getAdditionalMethods(client),
  };
};
