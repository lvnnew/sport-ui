/* eslint-_disable_ @typescript-eslint/camelcase */
import * as React from 'react';
import {
  FC, useMemo, ReactElement,
} from 'react';
import {Card, CardHeader, List} from '@mui/material';
import {makeStyles, createStyles} from '@mui/styles';
import {
  DocumentNode,
  QueryOptions,
  useApolloClient,
} from '@apollo/client';
import {useQuery} from 'react-query';

export interface ListWigetProps<T> {
  title?: string;
  children: FC<T>;
  request: DocumentNode;
  source: string;
  options?: Omit<QueryOptions, 'query'>;
  resultToValue: (result: any) => T[];
  action?: React.ReactNode;
}

const useStyles = makeStyles(() => createStyles({
  root: {
    flex: '1 1 160px',
    minHeight: 52,
    minWidth: '300px',
  },
}));

const ListWiget: <T>(props: ListWigetProps<T>) => ReactElement = <T, >(
  {title, children, request, options, resultToValue, action, source}: ListWigetProps<T>,
) => {
  const client = useApolloClient();

  const {data} = useQuery(
    [source, options?.variables],
    () => client.query({
      ...options,
      query: request,
    }),
  );

  const classes = useStyles();

  const records = useMemo(() => resultToValue(data?.data), [resultToValue, data]);

  return (
    <Card className={classes.root} style={{margin: 8}}>
      <CardHeader
        title={title}
        action={action}
      />
      {
        records && <List dense={true}>
          {records.map((record) => (children(record)))}
        </List>
      }
    </Card>
  );
};

export default ListWiget;
