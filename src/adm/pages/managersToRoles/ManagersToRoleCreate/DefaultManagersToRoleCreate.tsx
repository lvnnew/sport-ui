/* eslint-disable max-len */
import React, {FC, useMemo, useCallback} from 'react';
import {
  useTranslate,
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  AutocompleteInput,
} from 'react-admin';
import {Grid} from '@mui/material';
import {yupResolver} from '@hookform/resolvers/yup';
import getManagersToRoleValidation from '../getManagersToRoleValidation';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultManagersToRoleCreate: FC<CreateProps> = (props: CreateProps) => {
  const translate = useTranslate();

  const resolver = useMemo(() => yupResolver(getManagersToRoleValidation(translate)), [translate]);

  return (
    <Create
      {...props}
      transform={useCallback((data: any) => ({
        ...data,
      }), [])}
    >
      <SimpleForm
        defaultValues={{}}
        resolver={resolver}
      >
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={3} lg={2}>
            <ReferenceInput
              source='managerId'
              reference='managers'
              sort={{id: 'id', order: 'DESC'}}
              label={translate('catalogs.managersToRoles.fields.managerId')}
            >
              <AutocompleteInput
                fullWidth
                sx={{m: 1}}
                size='small'
                label={translate('catalogs.managersToRoles.fields.managerId')}
                optionText='title'
                defaultValue={null}
                parse={val => val || null}
              />
            </ReferenceInput>
          </Grid>
          <Grid item xs={12} sm={6} md={3} lg={2}>
            <ReferenceInput
              source='roleId'
              reference='roles'
              sort={{id: 'id', order: 'DESC'}}
              label={translate('catalogs.managersToRoles.fields.roleId')}
            >
              <AutocompleteInput
                fullWidth
                sx={{m: 1}}
                size='small'
                label={translate('catalogs.managersToRoles.fields.roleId')}
                optionText='title'
                defaultValue={null}
                parse={val => val || null}
              />
            </ReferenceInput>
          </Grid>
        </Grid>
      </SimpleForm>
    </Create>
  );
};

export default DefaultManagersToRoleCreate;
