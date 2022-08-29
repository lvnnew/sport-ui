/* eslint-disable max-len */
import React, {FC, useMemo, useCallback} from 'react';
import {
  useTranslate,
  Edit,
  SimpleForm,
  EditProps,
  ToolbarProps,
  Toolbar,
  SaveButton,
  DeleteButton,
  usePermissions,
  TextInput,
  BooleanInput,
} from 'react-admin';
import DateInput from '../../../../uiLib/DateInput';
import {Grid} from '@mui/material';
import {yupResolver} from '@hookform/resolvers/yup';
import getAutogenerationRuleValidation from '../getAutogenerationRuleValidation';
import {hasPermission} from '../../../../utils/permissions';
import {LoadingContext} from '../../../../contexts/LoadingContext';

// DO NOT EDIT! THIS IS GENERATED FILE

const CustomToolbar = (props: ToolbarProps) => {
  const {permissions} = usePermissions<string[]>();

  return (
    <Toolbar
      {...props}
      sx={{display: 'flex', justifyContent: 'space-between'}}
    >
      <SaveButton />
      {hasPermission(permissions, 'autogenerationRules.delete') && <DeleteButton mutationMode='pessimistic' />}
    </Toolbar>
  );
};

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
      <LoadingContext>
        <SimpleForm
          defaultValues={{
            ignoreVersionOnHistory: false,
          }}
          resolver={resolver}
          toolbar={<CustomToolbar />}
        >
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={3} lg={2}>
              <TextInput
                fullWidth
                sx={{m: 1}}
                source='title'
                label={translate('catalogs.autogenerationRules.fields.title')}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={2}>
              <DateInput
                fullWidth
                sx={{m: 1}}
                source='version'
                defaultValue={null}
                label={translate('catalogs.autogenerationRules.fields.version')}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={2}>
              <TextInput
                fullWidth
                sx={{m: 1}}
                source='originalEntityType'
                label={translate('catalogs.autogenerationRules.fields.originalEntityType')}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={2}>
              <TextInput
                fullWidth
                sx={{m: 1}}
                source='generatingEntityType'
                label={translate('catalogs.autogenerationRules.fields.generatingEntityType')}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={2}>
              <TextInput
                fullWidth
                sx={{m: 1}}
                source='originalEntityFilter'
                label={translate('catalogs.autogenerationRules.fields.originalEntityFilter')}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={2}>
              <TextInput
                fullWidth
                sx={{m: 1}}
                source='generatingEntityConstructionRules'
                label={translate('catalogs.autogenerationRules.fields.generatingEntityConstructionRules')}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={2}>
              <BooleanInput
                fullWidth
                sx={{m: 1}}
                source='ignoreVersionOnHistory'
                label={translate('catalogs.autogenerationRules.fields.ignoreVersionOnHistory')}
              />
            </Grid>
          </Grid>
        </SimpleForm>
      </LoadingContext>
    </Edit>
  );
};

export default DefaultAutogenerationRuleEdit;
