/* eslint-disable max-len */
import React, {FC, useMemo, useCallback} from 'react';
import {
  useTranslate,
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  AutocompleteInput,
} from 'react-admin';
import {Grid} from '@mui/material';
import {yupResolver} from '@hookform/resolvers/yup';
import getRolesToPermissionValidation from '../getRolesToPermissionValidation';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultRolesToPermissionEdit: FC<EditProps> = (props: EditProps) => {
  const translate = useTranslate();

  const resolver = useMemo(() => yupResolver(getRolesToPermissionValidation(translate)), [translate]);

  return (
    <Edit
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
    </Edit>
  );
};

export default DefaultRolesToPermissionEdit;
