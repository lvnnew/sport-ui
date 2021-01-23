/* eslint-_disable_ @typescript-eslint/camelcase */
import * as React from 'react';
import {
  FC,
} from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import {
  makeStyles,
} from '@material-ui/core/styles';
import {
  Link,
} from 'react-router-dom';
import {
  useTranslate,
} from 'react-admin';
import {
  Customer, Order,
} from '../../types';

interface Props {
    orders?: Order[];
    customers?: { [key: string]: Customer };
}

const useStyles = makeStyles(theme => ({
  cost: {
    color: theme.palette.text.primary,
    marginRight: '1em',
  },
  root: {
    flex: 1,
  },
}));

const PendingOrders: FC<Props> = ({orders = [], customers = {}}) => {
  const classes = useStyles();
  const translate = useTranslate();

  return (
    <Card className={classes.root}>
      <CardHeader title={translate('pos.dashboard.pending_orders')} />
      <List dense={true}>
        {orders.map(record => (
          <ListItem
            button
            component={Link}
            key={record.id}
            to={`/commands/${record.id}`}
          >
            <ListItemAvatar>
              {customers[record.customer_id] ? (
                <Avatar
                  src={`${
                    customers[record.customer_id].avatar
                  }?size=32x32`}
                />
              ) : (
                <Avatar />
              )}
            </ListItemAvatar>
            <ListItemText
              primary={new Date(record.date).toLocaleString(
                'en-GB',
              )}
              secondary={translate('pos.dashboard.order.items', {
                customer_name: customers[record.customer_id] ?
                  `${
                    customers[record.customer_id]
                      .first_name
                  } ${
                    customers[record.customer_id]
                      .last_name
                  }` :
                  '',
                nb_items: record.basket.length,
                smart_count: record.basket.length,
              })}
            />
            <ListItemSecondaryAction>
              <span className={classes.cost}>
                {record.total}$
              </span>
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>
    </Card>
  );
};

export default PendingOrders;
