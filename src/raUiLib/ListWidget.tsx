/* eslint-disable max-len */
import React, {FC, ReactElement} from 'react';
import {
  Datagrid,
  List,
  ListProps,
  useRecordContext,
} from 'react-admin';
import {makeStyles, createStyles} from '@material-ui/core/styles';
import {Card, CardContent, CardHeader} from '@material-ui/core';

const useStyles = makeStyles((theme) => createStyles({
  card: {
    margin: theme.spacing(1),
  },
  cardContent: {
    '&:last-child': {
      padding: theme.spacing(2),
    },
    paddingTop: theme.spacing(0.5),
  },
  cardHeader: {
    paddingBottom: theme.spacing(0.5),
  },
  listRoot: {
    overflow: 'auto',
  },
}));

export interface ListWidgetProps extends ListProps {
  title: string;
  reference: string;
  target: string;
  source?: string;
  filters?: ReactElement | ReactElement[];
}

const ListWidget: FC<ListWidgetProps> = ({
  title,
  reference,
  target,
  source = 'id',
  filters,
  children,
  ...rest
}) => {
  const record = useRecordContext();
  const classes = useStyles();

  return (
    <Card className={classes.card} >
      <CardHeader title={title} className={classes.cardHeader} />
      <CardContent className={classes.cardContent}>
        <List
          filter={{
            ...rest.filter,
            [target]: record[source],
          }}
          filters={filters}
          resource={reference}
          basePath={`/${reference}`}
          className={classes.listRoot}
          {...rest}
        >
          <Datagrid rowClick='show'>
            {children}
          </Datagrid>
        </List>
      </CardContent>
    </Card>
  );
};

export default ListWidget;
