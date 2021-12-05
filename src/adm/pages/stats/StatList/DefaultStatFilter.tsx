import React, {FC} from 'react';
import {
  Filter,
  TextInput,
  NumberInput,
} from 'react-admin';
import DateTimeInput from '../../../../uiLib/DateTimeInput';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultStatFilter: FC<any> = (props) => (
  <Filter {...props}>
    <TextInput label='Search' source='q' alwaysOn />
    <DateTimeInput fullWidth source='updated' />
    <NumberInput fullWidth source='helloCount' />
  </Filter>
);

export default DefaultStatFilter;
