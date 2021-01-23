// in src/comments.js
import * as React from 'react';
import {
  FC,
} from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import {
  makeStyles,
} from '@material-ui/core/styles';
import {
  DateField,
  EditButton,
  useTranslate,
  NumberField,
  Identifier,
} from 'react-admin';

import AvatarField from './AvatarField';
import ColoredNumberField from './ColoredNumberField';
import SegmentsField from './SegmentsField';
import {
  Customer,
} from '../../types';

const useStyles = makeStyles(theme => ({
  card: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    margin: '0.5rem 0',
  },
  cardContent: {
    ...theme.typography.body1,
    display: 'flex',
    flexDirection: 'column',
  },
  cardTitleContent: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  root: {margin: '1em'},
}));

interface Props {
    ids?: Identifier[];
    data?: { [key: string]: Customer };
    basePath?: string;
}

const MobileGrid: FC<Props> = ({ids, data, basePath}) => {
  const translate = useTranslate();
  const classes = useStyles();

  if (!ids || !data) {
    return null;
  }

  return (
    <div className={classes.root}>
      {ids.map(id => (
        <Card className={classes.card} key={id}>
          <CardHeader
            avatar={<AvatarField record={data[id]} size='45' />}
            title={
              <div className={classes.cardTitleContent}>
                <h2>{`${data[id].first_name} ${data[id].last_name}`}</h2>
                <EditButton
                  basePath={basePath}
                  record={data[id]}
                  resource='visitors'
                />
              </div>
            }
          />
          <CardContent className={classes.cardContent}>
            <div>
              {translate(
                'resources.customers.fields.last_seen_gte',
              )}
              &nbsp;
              <DateField record={data[id]} source='last_seen' />
            </div>
            <div>
              {translate(
                'resources.commands.name',
                data[id].nb_commands || 1,
              )}
              &nbsp;:&nbsp;
              <NumberField
                label='resources.customers.fields.commands'
                record={data[id]}
                source='nb_commands'
              />
            </div>
            <div>
              {translate(
                'resources.customers.fields.total_spent',
              )}
              &nbsp; :{' '}
              <ColoredNumberField
                options={{currency: 'USD', style: 'currency'}}
                record={data[id]}
                source='total_spent'
              />
            </div>
          </CardContent>
          {data[id].groups && data[id].groups.length > 0 && (
            <CardContent className={classes.cardContent}>
              <SegmentsField record={data[id]} />
            </CardContent>
          )}
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
