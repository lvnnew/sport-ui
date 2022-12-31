import React, {FC} from 'react';
import {
  Filter,
  TextInput,
  BooleanInput,
  useTranslate,
} from 'react-admin';
import DateInput from '../../../../uiLib/DateInput';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultAutogenerationRuleFilter: FC<any> = (props) => {
  const translate = useTranslate();

  return (
    <Filter {...props}>
      <TextInput
        label={translate('catalogs.autogenerationRules.fields.search')}
        source='q'
        alwaysOn
        sx={{m: 1}}
      />
      <TextInput
        fullWidth
        sx={{m: 1}}
        source='title'
        required
        label={translate('catalogs.autogenerationRules.fields.title')}
      />
      <DateInput
        fullWidth
        sx={{m: 1}}
        source='version'
        defaultValue={null}
        label={translate('catalogs.autogenerationRules.fields.version')}
      />
      <TextInput
        fullWidth
        sx={{m: 1}}
        source='originalEntityType'
        required
        label={translate('catalogs.autogenerationRules.fields.originalEntityType')}
      />
      <TextInput
        fullWidth
        sx={{m: 1}}
        source='generatingEntityType'
        required
        label={translate('catalogs.autogenerationRules.fields.generatingEntityType')}
      />
      <TextInput
        fullWidth
        sx={{m: 1}}
        source='originalEntityFilter'
        required
        label={translate('catalogs.autogenerationRules.fields.originalEntityFilter')}
      />
      <TextInput
        fullWidth
        sx={{m: 1}}
        source='generatingEntityConstructionRules'
        required
        label={translate('catalogs.autogenerationRules.fields.generatingEntityConstructionRules')}
      />
      <BooleanInput
        fullWidth
        sx={{m: 1}}
        source='ignoreVersionOnHistory'
        required
        label={translate('catalogs.autogenerationRules.fields.ignoreVersionOnHistory')}
      />
    </Filter>
  );
};

export default DefaultAutogenerationRuleFilter;
