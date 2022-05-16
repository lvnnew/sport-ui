/* eslint-disable max-len */
import React, {FC, useMemo, useCallback} from 'react';
import {
  useTranslate,
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  AutocompleteInput,
  BooleanInput,
} from 'react-admin';
import DateTimeInput from '../../../../uiLib/DateTimeInput';
import {Grid} from '@mui/material';
import {yupResolver} from '@hookform/resolvers/yup';
import getAuditLogValidation from '../getAuditLogValidation';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultAuditLogEdit: FC<EditProps> = (props: EditProps) => {
  const translate = useTranslate();

  const resolver = useMemo(() => yupResolver(getAuditLogValidation(translate)), [translate]);

  return (
    <Edit
      {...props}
      transform={useCallback((data: any) => ({
        ...data,
        date: data.date || null,
      }), [])}
    >
      <SimpleForm
        defaultValues={{
          foreign: false,
        }}
        resolver={resolver}
      >
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={3} lg={2}>
            <DateTimeInput
              fullWidth
              source='date'
              label={translate('catalogs.auditLogs.fields.date')}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3} lg={2}>
            <TextInput
              fullWidth
              source='title'
              label={translate('catalogs.auditLogs.fields.title')}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3} lg={2}>
            <ReferenceInput
              source='entityTypeId'
              label={translate('catalogs.auditLogs.fields.entityTypeId')}
              reference='entities'
              sort={{id: 'id', order: 'DESC'}}
            >
              <AutocompleteInput fullWidth optionText='title' disableClearable defaultValue={null} />
            </ReferenceInput>
          </Grid>
          <Grid item xs={12} sm={6} md={3} lg={2}>
            <TextInput
              fullWidth
              source='entityId'
              label={translate('catalogs.auditLogs.fields.entityId')}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3} lg={2}>
            <ReferenceInput
              source='actionTypeId'
              label={translate('catalogs.auditLogs.fields.actionTypeId')}
              reference='auditLogActionTypes'
              sort={{id: 'id', order: 'DESC'}}
            >
              <AutocompleteInput fullWidth optionText='title' disableClearable defaultValue={null} />
            </ReferenceInput>
          </Grid>
          <Grid item xs={12} sm={6} md={3} lg={2}>
            <ReferenceInput
              source='managerId'
              label={translate('catalogs.auditLogs.fields.managerId')}
              reference='managers'
              sort={{id: 'id', order: 'DESC'}}
            >
              <AutocompleteInput fullWidth optionText='title' defaultValue={null} />
            </ReferenceInput>
          </Grid>
          <Grid item xs={12} sm={6} md={3} lg={2}>
            <ReferenceInput
              source='userId'
              label={translate('catalogs.auditLogs.fields.userId')}
              reference='users'
              sort={{id: 'id', order: 'DESC'}}
            >
              <AutocompleteInput fullWidth optionText='title' defaultValue={null} />
            </ReferenceInput>
          </Grid>
          <Grid item xs={12} sm={6} md={3} lg={2}>
            <BooleanInput
              fullWidth
              source='foreign'
              defaultValue={null}
              label={translate('catalogs.auditLogs.fields.foreign')}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3} lg={2}>
            <TextInput
              fullWidth
              source='foreignEntityType'
              defaultValue={null}
              label={translate('catalogs.auditLogs.fields.foreignEntityType')}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3} lg={2}>
            <TextInput
              fullWidth
              source='foreignEntityId'
              defaultValue={null}
              label={translate('catalogs.auditLogs.fields.foreignEntityId')}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3} lg={2}>
            <TextInput
              fullWidth
              source='actionData'
              defaultValue={null}
              label={translate('catalogs.auditLogs.fields.actionData')}
            />
          </Grid>
        </Grid>
      </SimpleForm>
    </Edit>
  );
};

export default DefaultAuditLogEdit;
