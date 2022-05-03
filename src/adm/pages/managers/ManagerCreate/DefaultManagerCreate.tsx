/* eslint-disable max-len */
import React, {FC, useMemo, useCallback} from 'react';
import {
  useTranslate,
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  AutocompleteInput,
  BooleanInput,
} from 'react-admin';
import {useDebug} from '../../../../contexts/DebugContext';
import FormGrid from '../../../../uiLib/FormGrid';
import {yupResolver} from '@hookform/resolvers/yup';
import getManagerValidation from '../getManagerValidation';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultManagerCreate: FC<CreateProps> = (props: CreateProps) => {
  const {debug} = useDebug();
  const translate = useTranslate();

  const resolver = useMemo(() => yupResolver(getManagerValidation(translate)), [translate]);

  return (
    <Create
      {...props}
      transform={useCallback((data) => ({
        ...data,
      }), [])}
    >
      <SimpleForm
        defaultValues={{
          headOfUnit: false,
          active: true,
        }}
        resolver={resolver}
      >
        <FormGrid container spacing={2}>
          <FormGrid item xs={12} sm={6} md={3} lg={2}>
            <TextInput
              fullWidth
              source='title'
              label={translate('catalogs.managers.fields.title')}
            />
          </FormGrid>
          <FormGrid item xs={12} sm={6} md={3} lg={2}>
            <TextInput
              fullWidth
              source='lastName'
              label={translate('catalogs.managers.fields.lastName')}
            />
          </FormGrid>
          <FormGrid item xs={12} sm={6} md={3} lg={2}>
            <TextInput
              fullWidth
              source='firstName'
              label={translate('catalogs.managers.fields.firstName')}
            />
          </FormGrid>
          <FormGrid item xs={12} sm={6} md={3} lg={2}>
            <ReferenceInput
              source='languageId'
              label={translate('catalogs.managers.fields.languageId')}
              reference='languages'
              sort={{id: 'id', order: 'DESC'}}
            >
              <AutocompleteInput fullWidth optionText='title' />
            </ReferenceInput>
          </FormGrid>
          <FormGrid item xs={12} sm={6} md={3} lg={2}>
            <TextInput
              fullWidth
              source='email'
              label={translate('catalogs.managers.fields.email')}
            />
          </FormGrid>
          <FormGrid item xs={12} sm={6} md={3} lg={2}>
            <TextInput
              fullWidth
              source='phone'
              label={translate('catalogs.managers.fields.phone')}
            />
          </FormGrid>
          <FormGrid item xs={12} sm={6} md={3} lg={2}>
            <TextInput
              fullWidth
              source='photo'
              label={translate('catalogs.managers.fields.photo')}
            />
          </FormGrid>
          <FormGrid item xs={12} sm={6} md={3} lg={2}>
            <TextInput
              fullWidth
              source='telegramLogin'
              label={translate('catalogs.managers.fields.telegramLogin')}
            />
          </FormGrid>
          <FormGrid item xs={12} sm={6} md={3} lg={2}>
            <ReferenceInput
              source='unitId'
              label={translate('catalogs.managers.fields.unitId')}
              reference='units'
              sort={{id: 'id', order: 'DESC'}}
            >
              <AutocompleteInput fullWidth optionText='title' />
            </ReferenceInput>
          </FormGrid>
          <FormGrid item xs={12} sm={6} md={3} lg={2}>
            <BooleanInput
              fullWidth
              source='headOfUnit'
              label={translate('catalogs.managers.fields.headOfUnit')}
            />
          </FormGrid>
          <FormGrid item xs={12} sm={6} md={3} lg={2}>
            <BooleanInput
              fullWidth
              source='active'
              label={translate('catalogs.managers.fields.active')}
            />
          </FormGrid>
          {debug && <FormGrid item xs={12} sm={6} md={3} lg={2}>
            <ReferenceInput
              source='tenantId'
              label={translate('catalogs.managers.fields.tenantId')}
              reference='tenants'
              sort={{id: 'id', order: 'DESC'}}
            >
              <AutocompleteInput fullWidth optionText='title' />
            </ReferenceInput>
          </FormGrid>}
        </FormGrid>
      </SimpleForm>
    </Create>
  );
};

export default DefaultManagerCreate;
