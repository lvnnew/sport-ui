/* eslint-disable max-len */
import React, {FC, useMemo, useCallback} from 'react';
import {
  Edit,
  SimpleForm,
  EditProps,
  ToolbarProps,
  Toolbar,
  SaveButton,
  TextInput,
  BooleanInput,
  DeleteButton,
  usePermissions,
} from 'react-admin';
import {Grid} from '@mui/material';
import {yupResolver} from '@hookform/resolvers/yup';
import getRoleValidation from '../getRoleValidation';
import {hasPermission} from '../../../../utils/permissions';
import {LoadingContext} from '../../../../contexts/LoadingContext';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultToolbar = (props: ToolbarProps) => {
  const {permissions} = usePermissions<string[]>();

  return (
    <Toolbar
      {...props}
      sx={{display: 'flex', justifyContent: 'space-between'}}
    >
      <SaveButton />
      {hasPermission(permissions, 'roles.delete') && <DeleteButton mutationMode='pessimistic' />}
    </Toolbar>
  );
};

const defaultValues = {
  hasAllPermissions: false,
  allTenantsAvailable: false,
};

const DefaultRoleEdit: FC<EditProps> = (props: EditProps) => {
  const resolver = useMemo(() => yupResolver(getRoleValidation()), []);

  return (
    <Edit
      redirect='show'
      {...props}
      transform={useCallback((data: any, previousData?: { previousData: any }) => ({
        ...defaultValues,
        ...previousData?.previousData,
        ...data,
      }), [])}
      mutationMode='pessimistic'
    >
      <LoadingContext>
        <SimpleForm
          defaultValues={defaultValues}
          resolver={resolver}
          toolbar={<DefaultToolbar />}
        >
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={3} lg={2}>
              <TextInput
                fullWidth
                sx={{m: 1}}
                source='title'
                defaultValue={null}
                label='catalogs.roles.fields.title'
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={2}>
              <BooleanInput
                fullWidth
                sx={{m: 1}}
                source='hasAllPermissions'
                label='catalogs.roles.fields.hasAllPermissions'
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={2}>
              <BooleanInput
                fullWidth
                sx={{m: 1}}
                source='allTenantsAvailable'
                label='catalogs.roles.fields.allTenantsAvailable'
              />
            </Grid>
          </Grid>
        </SimpleForm>
      </LoadingContext>
    </Edit>
  );
};

export default DefaultRoleEdit;
