/* eslint-disable max-len */
import React, {FC, useMemo, useCallback} from 'react';
import {
  Edit,
  SimpleForm,
  EditProps,
  ToolbarProps,
  Toolbar,
  SaveButton,
  ReferenceInput,
  AutocompleteInput,
  TextInput,
  DeleteButton,
  usePermissions,
} from 'react-admin';
import DateTimeInput from '../../../../uiLib/DateTimeInput';
import {Grid} from '@mui/material';
import {yupResolver} from '@hookform/resolvers/yup';
import getAppRefreshTokenValidation from '../getAppRefreshTokenValidation';
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
      {hasPermission(permissions, 'appRefreshTokens.delete') && <DeleteButton mutationMode='pessimistic' />}
    </Toolbar>
  );
};

const defaultValues = {};

const DefaultAppRefreshTokenEdit: FC<EditProps> = (props: EditProps) => {
  const resolver = useMemo(() => yupResolver(getAppRefreshTokenValidation()), []);

  return (
    <Edit
      redirect='show'
      {...props}
      transform={useCallback((data: any, previousData?: { previousData: any }) => {
        const mergedData = {...defaultValues, ...previousData?.previousData, ...data};
        return {
          ...mergedData,
          create: mergedData.create || null,
        };
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
              <DateTimeInput
                fullWidth
                sx={{m: 1}}
                source='create'
                isRequired
                label='catalogs.appRefreshTokens.fields.create'
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={2}>
              <ReferenceInput
                source='userId'
                reference='users'
                sort={{field: 'id', order: 'DESC'}}
                perPage={100}
                label='catalogs.appRefreshTokens.fields.userId'
              >
                <AutocompleteInput
                  fullWidth
                  sx={{m: 1}}
                  size='small'
                  label='catalogs.appRefreshTokens.fields.userId'
                  defaultValue={null}
                  parse={val => val || null}
                  isRequired
                  noOptionsText='ra.message.noOptions'
                />
              </ReferenceInput>
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={2}>
              <TextInput
                fullWidth
                sx={{m: 1}}
                source='token'
                isRequired
                label='catalogs.appRefreshTokens.fields.token'
              />
            </Grid>
          </Grid>
        </SimpleForm>
      </LoadingContext>
    </Edit>
  );
};

export default DefaultAppRefreshTokenEdit;
