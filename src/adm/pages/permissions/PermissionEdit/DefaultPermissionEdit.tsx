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
  DeleteButton,
  usePermissions,
} from 'react-admin';
import {Grid} from '@mui/material';
import {yupResolver} from '@hookform/resolvers/yup';
import getPermissionValidation from '../getPermissionValidation';
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
      {hasPermission(permissions, 'permissions.delete') && <DeleteButton mutationMode='pessimistic' />}
    </Toolbar>
  );
};

const defaultValues = {};

const DefaultPermissionEdit: FC<EditProps> = (props: EditProps) => {
  const resolver = useMemo(() => yupResolver(getPermissionValidation()), []);

  return (
    <Edit
      redirect='show'
      {...props}
      transform={useCallback((data: any, previousData?: { previousData: any }) => {
        const mergedData = {...defaultValues, ...previousData?.previousData, ...data};
        return mergedData;
      }, [])}
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
                label='catalogs.permissions.fields.title'
              />
            </Grid>
          </Grid>
        </SimpleForm>
      </LoadingContext>
    </Edit>
  );
};

export default DefaultPermissionEdit;
