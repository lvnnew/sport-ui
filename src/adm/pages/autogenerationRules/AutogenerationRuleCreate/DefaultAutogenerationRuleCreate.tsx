/* eslint-disable max-len */
import React, {FC, useMemo, useCallback} from 'react';
import {
  useTranslate,
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  BooleanInput,
} from 'react-admin';
import DateInput from '../../../../uiLib/DateInput';
import FormGrid from '../../../../uiLib/FormGrid';
import {makeValidate} from 'mui-rff';
import getAutogenerationRuleValidation from '../getAutogenerationRuleValidation';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultAutogenerationRuleCreate: FC<CreateProps> = (props: CreateProps) => {
  const translate = useTranslate();

  const validate = useMemo(() => makeValidate(getAutogenerationRuleValidation(translate)), [translate]);

  return (
    <Create
      {...props}
      transform={useCallback((data) => ({
        ...data,
        version: data.version || null,
      }), [])}
    >
      <SimpleForm
        initialValues={{
          ignoreVersionOnHistory: false,
        }}
        validate={validate}
      >
        <FormGrid container spacing={2}>
          <FormGrid item xs={12} sm={6} md={3} lg={2}>
            <TextInput
              fullWidth
              source='id'
              label={translate('catalogs.autogenerationRules.fields.id')}
            />
          </FormGrid>
          <FormGrid item xs={12} sm={6} md={3} lg={2}>
            <TextInput
              fullWidth
              source='title'
              label={translate('catalogs.autogenerationRules.fields.title')}
            />
          </FormGrid>
          <FormGrid item xs={12} sm={6} md={3} lg={2}>
            <DateInput
              fullWidth
              source='version'
              label={translate('catalogs.autogenerationRules.fields.version')}
            />
          </FormGrid>
          <FormGrid item xs={12} sm={6} md={3} lg={2}>
            <TextInput
              fullWidth
              source='originalEntityType'
              label={translate('catalogs.autogenerationRules.fields.originalEntityType')}
            />
          </FormGrid>
          <FormGrid item xs={12} sm={6} md={3} lg={2}>
            <TextInput
              fullWidth
              source='generatingEntityType'
              label={translate('catalogs.autogenerationRules.fields.generatingEntityType')}
            />
          </FormGrid>
          <FormGrid item xs={12} sm={6} md={3} lg={2}>
            <TextInput
              fullWidth
              source='originalEntityFilter'
              label={translate('catalogs.autogenerationRules.fields.originalEntityFilter')}
            />
          </FormGrid>
          <FormGrid item xs={12} sm={6} md={3} lg={2}>
            <TextInput
              fullWidth
              source='generatingEntityConstructionRules'
              label={translate('catalogs.autogenerationRules.fields.generatingEntityConstructionRules')}
            />
          </FormGrid>
          <FormGrid item xs={12} sm={6} md={3} lg={2}>
            <BooleanInput
              fullWidth
              source='ignoreVersionOnHistory'
              label={translate('catalogs.autogenerationRules.fields.ignoreVersionOnHistory')}
            />
          </FormGrid>
        </FormGrid>
      </SimpleForm>
    </Create>
  );
};

export default DefaultAutogenerationRuleCreate;
