import React, {FC} from 'react';
import {
  Filter,
  TextInput,
  BooleanInput,
} from 'react-admin';
import DateInput from '../../../../uiLib/DateInput';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultAutogenerationRuleFilter: FC<any> = (props) => {
  return (
    <Filter {...props}>
      <TextInput
        label='ra.action.search'
        source='q'
        alwaysOn
        sx={{m: 1}}
      />
      <TextInput
        fullWidth
        sx={{m: 1}}
        source='title'
        label='catalogs.autogenerationRules.fields.title'
      />
      <DateInput
        fullWidth
        sx={{m: 1}}
        source='version'
        defaultValue={null}
        label='catalogs.autogenerationRules.fields.version'
      />
      <TextInput
        fullWidth
        sx={{m: 1}}
        source='originalEntityType'
        label='catalogs.autogenerationRules.fields.originalEntityType'
      />
      <TextInput
        fullWidth
        sx={{m: 1}}
        source='generatingEntityType'
        label='catalogs.autogenerationRules.fields.generatingEntityType'
      />
      <TextInput
        fullWidth
        sx={{m: 1}}
        source='originalEntityFilter'
        label='catalogs.autogenerationRules.fields.originalEntityFilter'
      />
      <TextInput
        fullWidth
        sx={{m: 1}}
        source='generatingEntityConstructionRules'
        label='catalogs.autogenerationRules.fields.generatingEntityConstructionRules'
      />
      <BooleanInput
        fullWidth
        sx={{m: 1}}
        source='ignoreVersionOnHistory'
        label='catalogs.autogenerationRules.fields.ignoreVersionOnHistory'
      />
    </Filter>
  );
};

export default DefaultAutogenerationRuleFilter;
