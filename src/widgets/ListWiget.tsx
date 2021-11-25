/* eslint-_disable_ @typescript-eslint/camelcase */
import * as React from 'react';
import {
  FC, useEffect, useMemo, ReactElement,
} from 'react';
import Card from '@mui/base/Card';
import CardHeader from '@mui/base/CardHeader';
import List from '@mui/base/List';
import {
  useVersion,
} from 'react-admin';
import {
  makeStyles,
  createStyles,
} from '@mui/base/styles';
import {
  DocumentNode, QueryHookOptions, useQuery,
} from '@apollo/client';

export interface ListWigetProps<T> {
  title?: string;
  children: FC<T>;
  request: DocumentNode;
  options?: QueryHookOptions;
  resultToValue: (result: any) => T[];
  action?: React.ReactNode;
}

const useStyles = makeStyles(theme => createStyles({
  cost: {
    color: theme.palette.text.primary,
    marginRight: '1em',
  },
  root: {
    flex: '1 1 160px',
    margin: theme.spacing(1),
    minHeight: 52,
    minWidth: '300px',
  },
}));

const ListWiget: <T>(props: ListWigetProps<T>) => ReactElement = <T, >(
  {title, children, request, options, resultToValue, action}: ListWigetProps<T>,
) => {
  const {data: result, refetch} = useQuery(request, options);
  const version = useVersion();
  const classes = useStyles();

  useEffect(() => {
    refetch();
  }, [refetch, version]);

  const records = useMemo(() => resultToValue(result), [resultToValue, result]);

  return (
    <Card className={classes.root}>
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
