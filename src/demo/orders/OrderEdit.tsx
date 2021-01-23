import * as React from 'react';
import {
  FC,
} from 'react';
import {
  BooleanInput,
  DateField,
  Edit,
  EditProps,
  FormWithRedirect,
  Labeled,
  ReferenceField,
  SelectInput,
  TextField,
  Toolbar,
  useTranslate,
} from 'react-admin';
import {
  Link as RouterLink,
} from 'react-router-dom';
import {
  Card,
  CardContent,
  Box,
  Grid,
  Typography,
  Link,
} from '@material-ui/core';
import {
  makeStyles,
} from '@material-ui/core/styles';

import {
  Order, Customer,
} from '../../types';
import Basket from './Basket';
import Totals from './Totals';

interface OrderTitleProps {
    record?: Order;
}

const OrderTitle: FC<OrderTitleProps> = ({record}) => {
  const translate = useTranslate();

  return record ? (
    <span>
      {translate('resources.commands.title', {
        reference: record.reference,
      })}
    </span>
  ) : null;
};

const CustomerDetails = ({record}: { record?: Customer }) => (
  <Box display='flex' flexDirection='column'>
    <Typography
      color='primary'
      component={RouterLink}
      style={{textDecoration: 'none'}}
      to={`/customers/${record?.id}`}
    >
      {record?.first_name} {record?.last_name}
    </Typography>
    <Typography
      color='primary'
      component={Link}
      href={`mailto:${record?.email}`}
      style={{textDecoration: 'none'}}
    >
      {record?.email}
    </Typography>
  </Box>
);

const CustomerAddress = ({record}: { record?: Customer }) => (
  <Box>
    <Typography>
      {record?.first_name} {record?.last_name}
    </Typography>
    <Typography>{record?.address}</Typography>
    <Typography>
      {record?.city}, {record?.stateAbbr} {record?.zipcode}
    </Typography>
  </Box>
);

const useEditStyles = makeStyles({
  root: {alignItems: 'flex-start'},
});

const Spacer = () => <Box m={1}>&nbsp;</Box>;

const OrderForm = (props: any) => {
  const translate = useTranslate();

  return (
    <FormWithRedirect
      {...props}
      render={(formProps: any) => (
        <Box maxWidth='50em'>
          <Card>
            <CardContent>
              <Grid container spacing={1}>
                <Grid item md={8} sm={12} xs={12}>
                  <Typography gutterBottom variant='h6'>
                    {translate(
                      'resources.commands.section.order',
                    )}
                  </Typography>
                  <Grid container>
                    <Grid item md={6} sm={12} xs={12}>
                      <Labeled
                        resource='commands'
                        source='date'
                      >
                        <DateField
                          record={formProps.record}
                          resource='commands'
                          source='date'
                        />
                      </Labeled>
                    </Grid>
                    <Grid item md={6} sm={12} xs={12}>
                      <Labeled
                        resource='commands'
                        source='reference'
                      >
                        <TextField
                          record={formProps.record}
                          resource='commands'
                          source='reference'
                        />
                      </Labeled>
                    </Grid>
                  </Grid>
                  <Grid container>
                    <Grid item md={6} sm={12} xs={12}>
                      <SelectInput
                        choices={[
                          {
                            id: 'delivered',
                            name: 'delivered',
                          },
                          {
                            id: 'ordered',
                            name: 'ordered',
                          },
                          {
                            id: 'cancelled',
                            name: 'cancelled',
                          },
                          {
                            disabled: true,
                            id: 'unknown',
                            name: 'unknown',
                          },
                        ]}
                        resource='commands'
                        source='status'
                      />
                    </Grid>
                    <Grid item md={6} sm={12} xs={12}>
                      <Box mt={2}>
                        <BooleanInput
                          resource='commands'
                          row={true}
                          source='returned'
                        />
                      </Box>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item md={4} sm={12} xs={12}>
                  <Typography gutterBottom variant='h6'>
                    {translate(
                      'resources.commands.section.customer',
                    )}
                  </Typography>
                  <ReferenceField
                    basePath='/customers'
                    link={false}
                    record={formProps.record}
                    reference='customers'
                    resource='commands'
                    source='customer_id'
                  >
                    <CustomerDetails />
                  </ReferenceField>
                  <Spacer />

                  <Typography gutterBottom variant='h6'>
                    {translate(
                      'resources.commands.section.shipping_address',
                    )}
                  </Typography>
                  <ReferenceField
                    basePath='/customers'
                    link={false}
                    record={formProps.record}
                    reference='customers'
                    resource='commands'
                    source='customer_id'
                  >
                    <CustomerAddress />
                  </ReferenceField>
                </Grid>
              </Grid>
              <Spacer />

              <Typography gutterBottom variant='h6'>
                {translate('resources.commands.section.items')}
              </Typography>
              <Box>
                <Basket record={formProps.record} />
              </Box>
              <Spacer />

              <Typography gutterBottom variant='h6'>
                {translate('resources.commands.section.total')}
              </Typography>
              <Box>
                <Totals record={formProps.record} />
              </Box>
            </CardContent>
            <Toolbar
              basePath={formProps.basePath}
              // eslint-disable-next-line react/jsx-handler-names
              handleSubmit={formProps.handleSubmit}
              invalid={formProps.invalid}
              record={formProps.record}
              resource='commands'
              saving={formProps.saving}
              undoable={true}
            />
          </Card>
        </Box>
      )}
    />
  );
};
const OrderEdit: FC<EditProps> = props => {
  const classes = useEditStyles();

  return (
    <Edit
      classes={classes}
      title={<OrderTitle />}
      {...props}
      component='div'
    >
      <OrderForm />
    </Edit>
  );
};

export default OrderEdit;
