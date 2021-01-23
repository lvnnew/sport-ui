// in src/comments.js
import * as React from 'react';
import {
  FC,
} from 'react';
import {
  Card, CardHeader, CardContent,
} from '@material-ui/core';
import {
  makeStyles,
} from '@material-ui/core/styles';
import {
  DateField,
  EditButton,
  NumberField,
  TextField,
  BooleanField,
  useTranslate,
  RecordMap,
  Identifier,
  Record,
} from 'react-admin';

import CustomerReferenceField from '../visitors/CustomerReferenceField';

const useListStyles = makeStyles(theme => ({
  card: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    margin: '0.5rem 0',
  },
  cardContent: theme.typography.body1,
  cardContentRow: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    margin: '0.5rem 0',
  },
  cardTitleContent: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
}));

interface MobileGridProps {
    ids?: Identifier[];
    data?: RecordMap<Record>;
    basePath?: string;
}

const MobileGrid: FC<MobileGridProps> = ({ids, data, basePath}) => {
  const translate = useTranslate();
  const classes = useListStyles();

  if (!ids || !data || !basePath) {
    return null;
  }

  return (
    <div style={{margin: '1em'}}>
      {ids.map(id => (
        <Card className={classes.card} key={id}>
          <CardHeader
            title={
              <div className={classes.cardTitleContent}>
                <span>
                  {translate('resources.commands.name', 1)}
                  :&nbsp;
                  <TextField
                    record={data[id]}
                    source='reference'
                  />
                </span>
                <EditButton
                  basePath={basePath}
                  record={data[id]}
                  resource='commands'
                />
              </div>
            }
          />
          <CardContent className={classes.cardContent}>
            <span className={classes.cardContentRow}>
              {translate('resources.customers.name', 1)}:&nbsp;
              <CustomerReferenceField
                basePath={basePath}
                record={data[id]}
              />
            </span>
            <span className={classes.cardContentRow}>
              {translate('resources.reviews.fields.date')}:&nbsp;
              <DateField
                record={data[id]}
                showTime
                source='date'
              />
            </span>
            <span className={classes.cardContentRow}>
              {translate(
                'resources.commands.fields.basket.total',
              )}
              :&nbsp;
              <NumberField
                options={{currency: 'USD', style: 'currency'}}
                record={data[id]}
                source='total'
              />
            </span>
            <span className={classes.cardContentRow}>
              {translate('resources.commands.fields.status')}
              :&nbsp;
              <TextField record={data[id]} source='status' />
            </span>
            <span className={classes.cardContentRow}>
              {translate('resources.commands.fields.returned')}
              :&nbsp;
              <BooleanField record={data[id]} source='returned' />
            </span>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

MobileGrid.defaultProps = {
  data: {},
  ids: [],
};

export default MobileGrid;
