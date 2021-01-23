import * as React from 'react';
import {
  FC,
} from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import {
  makeStyles,
} from '@material-ui/core/styles';
import {
  useShowController,
  ReferenceField,
  TextField,
  FieldProps,
} from 'react-admin';

import Basket from '../orders/Basket';
import {
  Customer, Invoice,
} from '../../types';

const CustomerField: FC<FieldProps<Customer>> = ({record}) =>
  (record ? (
    <Typography>
      {record.first_name} {record.last_name}
      <br />
      {record.address}
      <br />
      {record.city}, {record.zipcode}
    </Typography>
  ) : null);

const InvoiceShow = (props: any) => {
  const {record} = useShowController<Invoice>(props);
  const classes = useStyles();

  if (!record) {
    return null;
  }

  return (
    <Card className={classes.root}>
      <CardContent>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Typography gutterBottom variant='h6'>
              Posters Galore
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography align='right' gutterBottom variant='h6'>
              Invoice {record.id}
            </Typography>
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid alignContent='flex-end' container item xs={12}>
            <ReferenceField
              basePath='/invoices'
              link={false}
              record={record}
              reference='customers'
              resource='invoices'
              source='customer_id'
            >
              <CustomerField />
            </ReferenceField>
          </Grid>
        </Grid>
        <div className={classes.spacer}>&nbsp;</div>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Typography align='center' gutterBottom variant='h6'>
              Date{' '}
            </Typography>
            <Typography align='center' gutterBottom>
              {new Date(record.date).toLocaleDateString()}
            </Typography>
          </Grid>

          <Grid item xs={5}>
            <Typography align='center' gutterBottom variant='h6'>
              Order
            </Typography>
            <ReferenceField
              basePath='/invoices'
              link={false}
              record={record}
              reference='commands'
              resource='invoices'
              source='command_id'
            >
              <TextField
                align='center'
                component='p'
                gutterBottom
                source='reference'
              />
            </ReferenceField>
          </Grid>
        </Grid>
        <div className={classes.invoices}>
          <ReferenceField
            basePath='/invoices'
            link={false}
            record={record}
            reference='commands'
            resource='invoices'
            source='command_id'
          >
            <Basket />
          </ReferenceField>
        </div>
      </CardContent>
    </Card>
  );
};

export default InvoiceShow;

const useStyles = makeStyles({
  invoices: {margin: '10px 0'},
  root: {margin: 'auto', width: 600},
  spacer: {height: 20},
});
