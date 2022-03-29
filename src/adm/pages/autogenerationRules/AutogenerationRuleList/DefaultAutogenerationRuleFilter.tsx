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
      />
      <TextInput
        fullWidth
        source='title'
        label={translate('catalogs.autogenerationRules.fields.title')}
      />
      <DateInput
        fullWidth
        source='version'
        label={translate('catalogs.autogenerationRules.fields.version')}
      />
      <TextInput
        fullWidth
        source='originalEntityType'
        label={translate('catalogs.autogenerationRules.fields.originalEntityType')}
      />
      <TextInput
        fullWidth
        source='generatingEntityType'
        label={translate('catalogs.autogenerationRules.fields.generatingEntityType')}
      />
      <TextInput
        fullWidth
        source='originalEntityFilter'
        label={translate('catalogs.autogenerationRules.fields.originalEntityFilter')}
      />
      <TextInput
        fullWidth
        source='generatingEntityConstructionRules'
        label={translate('catalogs.autogenerationRules.fields.generatingEntityConstructionRules')}
      />
      <BooleanInput
        fullWidth
        source='ignoreVersionOnHistory'
        label={translate('catalogs.autogenerationRules.fields.ignoreVersionOnHistory')}
      />
    </Filter>
  );
};

export default DefaultAutogenerationRuleFilter;
