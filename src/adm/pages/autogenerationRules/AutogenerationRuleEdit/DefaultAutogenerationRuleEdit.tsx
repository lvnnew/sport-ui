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
import {Grid} from '@mui/material';
import {yupResolver} from '@hookform/resolvers/yup';
import getAutogenerationRuleValidation from '../getAutogenerationRuleValidation';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultAutogenerationRuleEdit: FC<EditProps> = (props: EditProps) => {
  const translate = useTranslate();

  const resolver = useMemo(() => yupResolver(getAutogenerationRuleValidation(translate)), [translate]);

  return (
    <Edit
      {...props}
      transform={useCallback((data: any) => ({
        ...data,
        version: data.version || null,
      }), [])}
    >
      <SimpleForm
        defaultValues={{
          ignoreVersionOnHistory: false,
        }}
        resolver={resolver}
      >
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={3} lg={2}>
            <TextInput
              fullWidth
              source='title'
              label={translate('catalogs.autogenerationRules.fields.title')}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3} lg={2}>
            <DateInput
              fullWidth
              source='version'
              defaultValue={null}
              label={translate('catalogs.autogenerationRules.fields.version')}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3} lg={2}>
            <TextInput
              fullWidth
              source='originalEntityType'
              label={translate('catalogs.autogenerationRules.fields.originalEntityType')}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3} lg={2}>
            <TextInput
              fullWidth
              source='generatingEntityType'
              label={translate('catalogs.autogenerationRules.fields.generatingEntityType')}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3} lg={2}>
            <TextInput
              fullWidth
              source='originalEntityFilter'
              label={translate('catalogs.autogenerationRules.fields.originalEntityFilter')}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3} lg={2}>
            <TextInput
              fullWidth
              source='generatingEntityConstructionRules'
              label={translate('catalogs.autogenerationRules.fields.generatingEntityConstructionRules')}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3} lg={2}>
            <BooleanInput
              fullWidth
              source='ignoreVersionOnHistory'
              label={translate('catalogs.autogenerationRules.fields.ignoreVersionOnHistory')}
            />
          </Grid>
        </Grid>
      </SimpleForm>
    </Edit>
  );
};

export default DefaultAutogenerationRuleEdit;
