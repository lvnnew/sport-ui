import React, {FC} from 'react';
import {
  Filter,
  TextInput,
  ReferenceInput,
  AutocompleteInput,
} from 'react-admin';
import DateTimeInput from '../../../../uiLib/DateTimeInput';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultAdmRefreshTokenFilter: FC<any> = (props) => (
  <Filter {...props}>
    <TextInput label='Search' source='q' alwaysOn />
    <DateTimeInput fullWidth source='create' />
    <ReferenceInput source='managerId' reference='managers'>
      <AutocompleteInput fullWidth optionText='title' />
    </ReferenceInput>
    <TextInput fullWidth source='token' />
  </Filter>
);

export default DefaultAdmRefreshTokenFilter;
