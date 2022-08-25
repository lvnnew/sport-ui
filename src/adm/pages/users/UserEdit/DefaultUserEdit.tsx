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
  ReferenceInput,
  AutocompleteInput,
} from 'react-admin';
import {useDebug} from '../../../../contexts/DebugContext';
import {Grid} from '@mui/material';
import {yupResolver} from '@hookform/resolvers/yup';
import getUserValidation from '../getUserValidation';
import {hasPermission} from '../../../../utils/permissions';
import {SaveContext} from '../../../../contexts/SaveContext';

// DO NOT EDIT! THIS IS GENERATED FILE

const CustomToolbar = (props: ToolbarProps) => {
  const {permissions} = usePermissions<string[]>();

  return (
    <Toolbar
      {...props}
      sx={{display: 'flex', justifyContent: 'space-between'}}
    >
      <SaveButton />
      {hasPermission(permissions, 'users.delete') && <DeleteButton mutationMode='pessimistic' />}
    </Toolbar>
  );
};

const DefaultUserEdit: FC<EditProps> = (props: EditProps) => {
  const {debug} = useDebug();
  const translate = useTranslate();

  const resolver = useMemo(() => yupResolver(getUserValidation(translate)), [translate]);

  return (
    <Edit
      {...props}
      transform={useCallback((data: any) => ({
        ...data,
      }), [])}
    >
      <SaveContext>
        <SimpleForm
          defaultValues={{}}
          resolver={resolver}
          toolbar={<CustomToolbar />}
        >
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={3} lg={2}>
              <TextInput
                fullWidth
                sx={{m: 1}}
                source='title'
                defaultValue={null}
                label={translate('catalogs.users.fields.title')}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={2}>
              <TextInput
                fullWidth
                sx={{m: 1}}
                source='lastname'
                label={translate('catalogs.users.fields.lastname')}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={2}>
              <TextInput
                fullWidth
                sx={{m: 1}}
                source='firstname'
                label={translate('catalogs.users.fields.firstname')}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={2}>
              <TextInput
                fullWidth
                sx={{m: 1}}
                source='email'
                label={translate('catalogs.users.fields.email')}
              />
            </Grid>
            {debug && <Grid item xs={12} sm={6} md={3} lg={2}>
              <ReferenceInput
                source='tenantId'
                reference='tenants'
                sort={{id: 'id', order: 'DESC'}}
                label={translate('catalogs.users.fields.tenantId')}
              >
                <AutocompleteInput
                  fullWidth
                  sx={{m: 1}}
                  size='small'
                  label={translate('catalogs.users.fields.tenantId')}
                  optionText='title'
                  defaultValue={null}
                  parse={val => val || null}
                />
              </ReferenceInput>
            </Grid>}
          </Grid>
        </SimpleForm>
      </SaveContext>
    </Edit>
  );
};

export default DefaultUserEdit;
