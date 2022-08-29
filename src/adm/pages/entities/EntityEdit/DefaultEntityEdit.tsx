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
} from 'react-admin';
import {Grid} from '@mui/material';
import {yupResolver} from '@hookform/resolvers/yup';
import getEntityValidation from '../getEntityValidation';
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
      {hasPermission(permissions, 'entities.delete') && <DeleteButton mutationMode='pessimistic' />}
    </Toolbar>
  );
};

const DefaultEntityEdit: FC<EditProps> = (props: EditProps) => {
  const translate = useTranslate();

  const resolver = useMemo(() => yupResolver(getEntityValidation(translate)), [translate]);

  return (
    <Edit
      {...props}
      transform={useCallback((data: any) => ({
        ...data,
      }), [])}
    >
      <LoadingContext>
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
                label={translate('catalogs.entities.fields.title')}
              />
            </Grid>
          </Grid>
        </SimpleForm>
      </LoadingContext>
    </Edit>
  );
};

export default DefaultEntityEdit;
