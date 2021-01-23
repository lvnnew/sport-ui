import * as React from 'react';
import {
  FC, useCallback, useEffect, useState,
} from 'react';
import {
  AutocompleteInput,
  BooleanField,
  Datagrid,
  DatagridProps,
  DateField,
  DateInput,
  Filter,
  FilterProps,
  Identifier,
  List,
  ListContextProvider,
  ListProps,
  NullableBooleanInput,
  NumberField,
  ReferenceInput,
  ReferenceField,
  SearchInput,
  TextField,
  TextInput,
  useGetList,
  useListContext,
} from 'react-admin';
import {
  useMediaQuery, Divider, Tabs, Tab, Theme,
} from '@material-ui/core';

import {
  makeStyles,
} from '@material-ui/core/styles';

import NbItemsField from './NbItemsField';
import CustomerReferenceField from '../visitors/CustomerReferenceField';
import AddressField from '../visitors/AddressField';
import MobileGrid from './MobileGrid';
import {
  Customer,
} from '../../types';

const OrderFilter: FC<Omit<FilterProps, 'children'>> = props => (
  <Filter {...props}>
    <SearchInput alwaysOn source='q' />
    <ReferenceInput reference='customers' source='customer_id'>
      <AutocompleteInput
        optionText={(choice: Customer) =>
          (choice.id ? // the empty choice is { id: '' }
            `${choice.first_name} ${choice.last_name}` :
            '')}
      />
    </ReferenceInput>
    <DateInput source='date_gte' />
    <DateInput source='date_lte' />
    <TextInput source='total_gte' />
    <NullableBooleanInput source='returned' />
  </Filter>
);

const useDatagridStyles = makeStyles({
  total: {fontWeight: 'bold'},
});

const tabs = [
  {id: 'ordered', name: 'ordered'},
  {id: 'delivered', name: 'delivered'},
  {id: 'cancelled', name: 'cancelled'},
];

interface TabbedDatagridProps extends DatagridProps {}

const useGetTotals = (filterValues: any) => {
  const {total: totalOrdered} = useGetList(
    'commands',
    {page: 0, perPage: 1},
    {field: 'id', order: 'ASC'},
    {...filterValues, status: 'ordered'},
  );
  const {total: totalDelivered} = useGetList(
    'commands',
    {page: 0, perPage: 1},
    {field: 'id', order: 'ASC'},
    {...filterValues, status: 'delivered'},
  );
  const {total: totalCancelled} = useGetList(
    'commands',
    {page: 0, perPage: 1},
    {field: 'id', order: 'ASC'},
    {...filterValues, status: 'cancelled'},
  );

  return {
    cancelled: totalCancelled,
    delivered: totalDelivered,
    ordered: totalOrdered,
  };
};

const TabbedDatagrid: FC<TabbedDatagridProps> = props => {
  const listContext = useListContext();
  const {ids, filterValues, setFilters, displayedFilters} = listContext;
  const classes = useDatagridStyles();
  const isXSmall = useMediaQuery<Theme>(theme =>
    theme.breakpoints.down('xs'),
  );
  const [ordered, setOrdered] = useState<Identifier[]>([] as Identifier[]);
  const [delivered, setDelivered] = useState<Identifier[]>(
        [] as Identifier[],
  );
  const [cancelled, setCancelled] = useState<Identifier[]>(
        [] as Identifier[],
  );
  const totals = useGetTotals(filterValues) as any;

  useEffect(() => {
    if (ids && ids !== filterValues.status) {
      switch (filterValues.status) {
      case 'ordered':
        setOrdered(ids);
        break;
      case 'delivered':
        setDelivered(ids);
        break;
      case 'cancelled':
        setCancelled(ids);
        break;
      }
    }
  }, [ids, filterValues.status]);

  const handleChange = useCallback(
    (event: React.ChangeEvent<{}>, value: any) => {
      return setFilters &&
                setFilters(
                  {...filterValues, status: value},
                  displayedFilters,
                );
    },
    [displayedFilters, filterValues, setFilters],
  );

  const selectedIds =
        filterValues.status === 'ordered' ?
          ordered :
          filterValues.status === 'delivered' ?
            delivered :
            cancelled;

  return (
    <>
      <Tabs
        centered
        indicatorColor='primary'
        onChange={handleChange}
        value={filterValues.status}
        variant='fullWidth'
      >
        {tabs.map(choice => (
          <Tab
            key={choice.id}
            label={
              totals[choice.name] ?
                `${choice.name} (${totals[choice.name]})` :
                choice.name
            }
            value={choice.id}
          />
        ))}
      </Tabs>
      <Divider />
      {isXSmall ? (
        <ListContextProvider
          value={{...listContext, ids: selectedIds}}
        >
          <MobileGrid {...props} ids={selectedIds} />
        </ListContextProvider>
      ) : (
        <div>
          {filterValues.status === 'ordered' && (
            <ListContextProvider
              value={{...listContext, ids: ordered}}
            >
              <Datagrid {...props} optimized rowClick='edit'>
                <DateField showTime source='date' />
                <TextField source='reference' />
                <CustomerReferenceField />
                <ReferenceField
                  label='resources.commands.fields.address'
                  link={false}
                  reference='customers'
                  source='customer_id'
                >
                  <AddressField />
                </ReferenceField>
                <NbItemsField />
                <NumberField
                  className={classes.total}
                  options={{
                    currency: 'USD',
                    style: 'currency',
                  }}
                  source='total'
                />
              </Datagrid>
            </ListContextProvider>
          )}
          {filterValues.status === 'delivered' && (
            <ListContextProvider
              value={{...listContext, ids: delivered}}
            >
              <Datagrid {...props} rowClick='edit'>
                <DateField showTime source='date' />
                <TextField source='reference' />
                <CustomerReferenceField />
                <ReferenceField
                  label='resources.commands.fields.address'
                  link={false}
                  reference='customers'
                  source='customer_id'
                >
                  <AddressField />
                </ReferenceField>
                <NbItemsField />
                <NumberField
                  className={classes.total}
                  options={{
                    currency: 'USD',
                    style: 'currency',
                  }}
                  source='total'
                />
                <BooleanField source='returned' />
              </Datagrid>
            </ListContextProvider>
          )}
          {filterValues.status === 'cancelled' && (
            <ListContextProvider
              value={{...listContext, ids: cancelled}}
            >
              <Datagrid {...props} rowClick='edit'>
                <DateField showTime source='date' />
                <TextField source='reference' />
                <CustomerReferenceField />
                <ReferenceField
                  label='resources.commands.fields.address'
                  link={false}
                  reference='customers'
                  source='customer_id'
                >
                  <AddressField />
                </ReferenceField>
                <NbItemsField />
                <NumberField
                  className={classes.total}
                  options={{
                    currency: 'USD',
                    style: 'currency',
                  }}
                  source='total'
                />
                <BooleanField source='returned' />
              </Datagrid>
            </ListContextProvider>
          )}
        </div>
      )}
    </>
  );
};

const OrderList: FC<ListProps> = props => (
  <List
    {...props}
    filterDefaultValues={{status: 'ordered'}}
    filters={<OrderFilter />}
    perPage={25}
    sort={{field: 'date', order: 'DESC'}}
  >
    <TabbedDatagrid />
  </List>
);

export default OrderList;
