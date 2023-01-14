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
        label='catalogs.autogenerationRules.fields.search'
        source='q'
        alwaysOn
        sx={{m: 1}}
      />
      <TextInput
        fullWidth
        sx={{m: 1}}
        source='title'
        defaultValue={null}
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
        defaultValue={null}
        label='catalogs.autogenerationRules.fields.originalEntityType'
      />
      <TextInput
        fullWidth
        sx={{m: 1}}
        source='generatingEntityType'
        defaultValue={null}
        label='catalogs.autogenerationRules.fields.generatingEntityType'
      />
      <TextInput
        fullWidth
        sx={{m: 1}}
        source='originalEntityFilter'
        defaultValue={null}
        label='catalogs.autogenerationRules.fields.originalEntityFilter'
      />
      <TextInput
        fullWidth
        sx={{m: 1}}
        source='generatingEntityConstructionRules'
        defaultValue={null}
        label='catalogs.autogenerationRules.fields.generatingEntityConstructionRules'
      />
      <BooleanInput
        fullWidth
        sx={{m: 1}}
        source='ignoreVersionOnHistory'
        defaultValue={null}
        label='catalogs.autogenerationRules.fields.ignoreVersionOnHistory'
      />
    </Filter>
  );
};

export default DefaultAutogenerationRuleFilter;
