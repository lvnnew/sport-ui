/* eslint-disable max-len */
import React, {FC, useMemo, useCallback} from 'react';
import {
  Edit,
  SimpleForm,
  EditProps,
  ToolbarProps,
  Toolbar,
  SaveButton,
  DeleteButton,
  usePermissions,
  TextInput,
  BooleanInput,
  ReferenceInput,
  AutocompleteInput,
} from 'react-admin';
import {Grid} from '@mui/material';
import {yupResolver} from '@hookform/resolvers/yup';
import getMessageTemplateValidation from '../getMessageTemplateValidation';
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
      {hasPermission(permissions, 'messageTemplates.delete') && <DeleteButton mutationMode='pessimistic' />}
    </Toolbar>
  );
};

const DefaultMessageTemplateEdit: FC<EditProps> = (props: EditProps) => {
  const resolver = useMemo(() => yupResolver(getMessageTemplateValidation()), []);

  return (
    <Edit
      redirect='show'
      {...props}
      transform={useCallback((data: any) => ({
        ...data,
      }), [])}
      mutationMode='pessimistic'
    >
      <LoadingContext>
        <SimpleForm
          defaultValues={{
            secretData: false,
          }}
          resolver={resolver}
          toolbar={<DefaultToolbar />}
        >
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={3} lg={2}>
              <TextInput
                fullWidth
                sx={{m: 1}}
                source='title'
                required
                label='catalogs.messageTemplates.fields.title'
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={2}>
              <BooleanInput
                fullWidth
                sx={{m: 1}}
                source='secretData'
                label='catalogs.messageTemplates.fields.secretData'
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={2}>
              <ReferenceInput
                source='messageTypeId'
                reference='messageTypes'
                sort={{field: 'id', order: 'DESC'}}
                label='catalogs.messageTemplates.fields.messageTypeId'
              >
                <AutocompleteInput
                  fullWidth
                  sx={{m: 1}}
                  size='small'
                  label='catalogs.messageTemplates.fields.messageTypeId'
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
                source='dataExample'
                defaultValue={null}
                label='catalogs.messageTemplates.fields.dataExample'
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={2}>
              <ReferenceInput
                source='templateStyleId'
                reference='templateStyles'
                sort={{field: 'id', order: 'DESC'}}
                label='catalogs.messageTemplates.fields.templateStyleId'
              >
                <AutocompleteInput
                  fullWidth
                  sx={{m: 1}}
                  size='small'
                  label='catalogs.messageTemplates.fields.templateStyleId'
                  defaultValue={null}
                  parse={val => val || null}
                  noOptionsText='ra.message.noOptions'
                />
              </ReferenceInput>
            </Grid>
          </Grid>
        </SimpleForm>
      </LoadingContext>
    </Edit>
  );
};

export default DefaultMessageTemplateEdit;
