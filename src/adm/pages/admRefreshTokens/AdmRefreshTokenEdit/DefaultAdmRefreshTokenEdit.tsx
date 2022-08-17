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
  ReferenceInput,
  AutocompleteInput,
  TextInput,
} from 'react-admin';
import DateTimeInput from '../../../../uiLib/DateTimeInput';
import {Grid} from '@mui/material';
import {yupResolver} from '@hookform/resolvers/yup';
import getAdmRefreshTokenValidation from '../getAdmRefreshTokenValidation';
import {hasPermission} from '../../../../utils/permissions';

// DO NOT EDIT! THIS IS GENERATED FILE

const CustomToolbar = (props: ToolbarProps) => {
  const {permissions} = usePermissions<string[]>();

  return (
    <Toolbar
      {...props}
      sx={{display: 'flex', justifyContent: 'space-between'}}
    >
      <SaveButton />
      {hasPermission(permissions, 'admRefreshTokens.delete') && <DeleteButton mutationMode='pessimistic' />}
    </Toolbar>
  );
};

const DefaultAdmRefreshTokenEdit: FC<EditProps> = (props: EditProps) => {
  const translate = useTranslate();

  const resolver = useMemo(() => yupResolver(getAdmRefreshTokenValidation(translate)), [translate]);

  return (
    <Edit
      {...props}
      transform={useCallback((data: any) => ({
        ...data,
        create: data.create || null,
      }), [])}
    >
      <SimpleForm
        defaultValues={{}}
        resolver={resolver}
        toolbar={<CustomToolbar />}
      >
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={3} lg={2}>
            <DateTimeInput
              fullWidth
              sx={{m: 1}}
              source='create'
              label={translate('catalogs.admRefreshTokens.fields.create')}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3} lg={2}>
            <ReferenceInput
              source='managerId'
              reference='managers'
              sort={{id: 'id', order: 'DESC'}}
              label={translate('catalogs.admRefreshTokens.fields.managerId')}
            >
              <AutocompleteInput
                fullWidth
                sx={{m: 1}}
                size='small'
                label={translate('catalogs.admRefreshTokens.fields.managerId')}
                optionText='title'
                defaultValue={null}
                parse={val => val || null}
              />
            </ReferenceInput>
          </Grid>
          <Grid item xs={12} sm={6} md={3} lg={2}>
            <TextInput
              fullWidth
              sx={{m: 1}}
              source='token'
              label={translate('catalogs.admRefreshTokens.fields.token')}
            />
          </Grid>
        </Grid>
      </SimpleForm>
    </Edit>
  );
};

export default DefaultAdmRefreshTokenEdit;
