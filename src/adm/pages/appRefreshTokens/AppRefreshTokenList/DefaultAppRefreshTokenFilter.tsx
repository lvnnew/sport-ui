import React, {FC} from 'react';
import {
  Filter,
  TextInput,
  ReferenceInput,
  AutocompleteInput,
} from 'react-admin';
import DateTimeInput from '../../../../uiLib/DateTimeInput';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultAppRefreshTokenFilter: FC<any> = (props) => (
  <Filter {...props}>
    <TextInput label='Search' source='q' alwaysOn />
    <DateTimeInput fullWidth source='create' />
    <ReferenceInput source='userId' reference='users'>
      <AutocompleteInput fullWidth optionText='title' />
    </ReferenceInput>
    <TextInput fullWidth source='token' />
  </Filter>
);

export default DefaultAppRefreshTokenFilter;
