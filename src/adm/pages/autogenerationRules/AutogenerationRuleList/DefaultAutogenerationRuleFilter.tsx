import React, {FC} from 'react';
import {
  Filter,
  TextInput,
  DateInput,
  BooleanInput,
} from 'react-admin';

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
