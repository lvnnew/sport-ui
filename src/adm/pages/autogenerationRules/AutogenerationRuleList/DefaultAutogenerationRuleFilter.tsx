import React, {FC} from 'react';
import {
  Filter,
  TextInput,
  BooleanInput,
} from 'react-admin';
import DateInput from '../../../../uiLib/DateInput';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultAutogenerationRuleFilter: FC<any> = (props) => (
  <Filter {...props}>
    <TextInput label='Search' source='q' alwaysOn />
    <TextInput fullWidth source='title' />
    <DateInput fullWidth source='version' />
    <TextInput fullWidth source='originalEntityType' />
    <TextInput fullWidth source='generatingEntityType' />
    <TextInput fullWidth source='originalEntityFilter' />
    <TextInput fullWidth source='generatingEntityConstructionRules' />
    <BooleanInput fullWidth source='ignoreVersionOnHistory' />
  </Filter>
);

export default DefaultAutogenerationRuleFilter;
