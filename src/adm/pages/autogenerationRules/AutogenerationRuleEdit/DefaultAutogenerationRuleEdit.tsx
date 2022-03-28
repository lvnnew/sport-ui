/* eslint-disable max-len */
import React, {FC, useMemo, useCallback} from 'react';
import {
  useTranslate,
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  BooleanInput,
} from 'react-admin';
import DateInput from '../../../../uiLib/DateInput';
import FormGrid from '../../../../uiLib/FormGrid';
import {makeValidate} from 'mui-rff';
import getAutogenerationRuleValudation from '../getAutogenerationRuleValudation';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultAutogenerationRuleEdit: FC<EditProps> = (props: EditProps) => {
  const translate = useTranslate();

  const validate = useMemo(() => makeValidate(getAutogenerationRuleValudation(translate)), [translate]);

  return (
    <Edit
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
            <TextInput fullWidth source='title' label={translate('catalogs.autogenerationRules.fields.title')} />
          </FormGrid>
          <FormGrid item xs={12} sm={6} md={3} lg={2}>
            <DateInput fullWidth source='version' label={translate('catalogs.autogenerationRules.fields.version')} />
          </FormGrid>
          <FormGrid item xs={12} sm={6} md={3} lg={2}>
            <TextInput fullWidth source='originalEntityType' label={translate('catalogs.autogenerationRules.fields.originalEntityType')} />
          </FormGrid>
          <FormGrid item xs={12} sm={6} md={3} lg={2}>
            <TextInput fullWidth source='generatingEntityType' label={translate('catalogs.autogenerationRules.fields.generatingEntityType')} />
          </FormGrid>
          <FormGrid item xs={12} sm={6} md={3} lg={2}>
            <TextInput fullWidth source='originalEntityFilter' label={translate('catalogs.autogenerationRules.fields.originalEntityFilter')} />
          </FormGrid>
          <FormGrid item xs={12} sm={6} md={3} lg={2}>
            <TextInput fullWidth source='generatingEntityConstructionRules' label={translate('catalogs.autogenerationRules.fields.generatingEntityConstructionRules')} />
          </FormGrid>
          <FormGrid item xs={12} sm={6} md={3} lg={2}>
            <BooleanInput fullWidth source='ignoreVersionOnHistory' label={translate('catalogs.autogenerationRules.fields.ignoreVersionOnHistory')} />
          </FormGrid>
        </FormGrid>
      </SimpleForm>
    </Edit>
  );
};

export default DefaultAutogenerationRuleEdit;
