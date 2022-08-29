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
import getRolesToPermissionValidation from '../getRolesToPermissionValidation';
import {LoadingContext} from '../../../../contexts/LoadingContext';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultRolesToPermissionCreate: FC<CreateProps> = (props: CreateProps) => {
  const translate = useTranslate();

  const resolver = useMemo(() => yupResolver(getRolesToPermissionValidation(translate)), [translate]);

  return (
    <Create
      {...props}
      transform={useCallback((data: any) => ({
        ...data,
      }), [])}
    >
      <LoadingContext>
        <SimpleForm
          defaultValues={{}}
          resolver={resolver}
        >
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={3} lg={2}>
              <ReferenceInput
                source='roleId'
                reference='roles'
                sort={{id: 'id', order: 'DESC'}}
                label={translate('catalogs.rolesToPermissions.fields.roleId')}
              >
                <AutocompleteInput
                  fullWidth
                  sx={{m: 1}}
                  size='small'
                  label={translate('catalogs.rolesToPermissions.fields.roleId')}
                  optionText='title'
                  defaultValue={null}
                  parse={val => val || null}
                />
              </ReferenceInput>
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={2}>
              <ReferenceInput
                source='permissionId'
                reference='permissions'
                sort={{id: 'id', order: 'DESC'}}
                label={translate('catalogs.rolesToPermissions.fields.permissionId')}
              >
                <AutocompleteInput
                  fullWidth
                  sx={{m: 1}}
                  size='small'
                  label={translate('catalogs.rolesToPermissions.fields.permissionId')}
                  optionText='title'
                  defaultValue={null}
                  parse={val => val || null}
                />
              </ReferenceInput>
            </Grid>
          </Grid>
        </SimpleForm>
      </LoadingContext>
    </Create>
  );
};

export default DefaultRolesToPermissionCreate;
