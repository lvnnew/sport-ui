import * as React from 'react';
import {
  FC,
} from 'react';
import {
  List,
  ListProps,
  Datagrid,
  TextField,
  DateField,
  ReferenceField,
  NumberField,
  Filter,
  FilterProps,
  DateInput,
} from 'react-admin';

import FullNameField from '../visitors/FullNameField';
import AddressField from '../visitors/AddressField';
import InvoiceShow from './InvoiceShow';

const ListFilters = (props: Omit<FilterProps, 'children'>) => (
  <Filter {...props}>
    <DateInput alwaysOn source='date_gte' />
    <DateInput alwaysOn source='date_lte' />
  </Filter>
);

const InvoiceList: FC<ListProps> = props => (
  <List
    {...props}
    filters={<ListFilters />}
    perPage={25}
    sort={{field: 'date', order: 'desc'}}
  >
    <Datagrid expand={<InvoiceShow />} rowClick='expand'>
      <TextField source='id' />
      <DateField source='date' />
      <ReferenceField reference='customers' source='customer_id'>
        <FullNameField />
      </ReferenceField>
      <ReferenceField
        label='resources.invoices.fields.address'
        link={false}
        reference='customers'
        source='customer_id'
      >
        <AddressField />
      </ReferenceField>
      <ReferenceField reference='commands' source='command_id'>
        <TextField source='reference' />
      </ReferenceField>
      <NumberField source='total_ex_taxes' />
      <NumberField source='delivery_fees' />
      <NumberField source='taxes' />
      <NumberField source='total' />
    </Datagrid>
  </List>
);

export default InvoiceList;
