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
  BooleanInput,
} from 'react-admin';
import DateInput from '../../../../uiLib/DateInput';
import {Grid} from '@mui/material';
import {yupResolver} from '@hookform/resolvers/yup';
import getDelegationValidation from '../getDelegationValidation';
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
      {hasPermission(permissions, 'delegations.delete') && <DeleteButton mutationMode='pessimistic' />}
    </Toolbar>
  );
};

const DefaultDelegationEdit: FC<EditProps> = (props: EditProps) => {
  const translate = useTranslate();

  const resolver = useMemo(() => yupResolver(getDelegationValidation(translate)), [translate]);

  return (
    <Edit
      redirect='show'
      {...props}
      transform={useCallback((data: any) => ({
        ...data,
        expiresAt: data.expiresAt || null,
      }), [])}
      mutationMode='pessimistic'
    >
      <LoadingContext>
        <SimpleForm
          defaultValues={{
            active: false,
          }}
          resolver={resolver}
          toolbar={<DefaultToolbar />}
        >
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={3} lg={2}>
              <ReferenceInput
                source='fromId'
                reference='managers'
                sort={{field: 'id', order: 'DESC'}}
                label='catalogs.delegations.fields.fromId'
              >
                <AutocompleteInput
                  fullWidth
                  sx={{m: 1}}
                  size='small'
                  label='catalogs.delegations.fields.fromId'
                  defaultValue={null}
                  parse={val => val || null}
                  isRequired
                  noOptionsText='ra.message.noOptions'
                />
              </ReferenceInput>
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={2}>
              <ReferenceInput
                source='toId'
                reference='managers'
                sort={{field: 'id', order: 'DESC'}}
                label='catalogs.delegations.fields.toId'
              >
                <AutocompleteInput
                  fullWidth
                  sx={{m: 1}}
                  size='small'
                  label='catalogs.delegations.fields.toId'
                  defaultValue={null}
                  parse={val => val || null}
                  isRequired
                  noOptionsText='ra.message.noOptions'
                />
              </ReferenceInput>
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={2}>
              <DateInput
                fullWidth
                sx={{m: 1}}
                source='expiresAt'
                defaultValue={null}
                label='catalogs.delegations.fields.expiresAt'
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={2}>
              <BooleanInput
                fullWidth
                sx={{m: 1}}
                source='active'
                required
                label='catalogs.delegations.fields.active'
              />
            </Grid>
          </Grid>
        </SimpleForm>
      </LoadingContext>
    </Edit>
  );
};

export default DefaultDelegationEdit;
