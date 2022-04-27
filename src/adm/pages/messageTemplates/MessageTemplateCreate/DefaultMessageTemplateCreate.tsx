/* eslint-disable max-len */
import React, {FC, useMemo, useCallback} from 'react';
import {
  useTranslate,
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  BooleanInput,
  ReferenceInput,
  AutocompleteInput,
} from 'react-admin';
import FormGrid from '../../../../uiLib/FormGrid';
import {makeValidate} from 'mui-rff';
import getMessageTemplateValidation from '../getMessageTemplateValidation';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultMessageTemplateCreate: FC<CreateProps> = (props: CreateProps) => {
  const translate = useTranslate();

  const validate = useMemo(() => makeValidate(getMessageTemplateValidation(translate)), [translate]);

  return (
    <Create
      {...props}
      transform={useCallback((data) => ({
        ...data,
      }), [])}
    >
      <SimpleForm
        defaultValues={{
          secretData: false,
        }}
        validate={validate}
      >
        <FormGrid container spacing={2}>
          <FormGrid item xs={12} sm={6} md={3} lg={2}>
            <TextInput
              fullWidth
              source='id'
              label={translate('catalogs.messageTemplates.fields.id')}
            />
          </FormGrid>
          <FormGrid item xs={12} sm={6} md={3} lg={2}>
            <TextInput
              fullWidth
              source='title'
              label={translate('catalogs.messageTemplates.fields.title')}
            />
          </FormGrid>
          <FormGrid item xs={12} sm={6} md={3} lg={2}>
            <BooleanInput
              fullWidth
              source='secretData'
              label={translate('catalogs.messageTemplates.fields.secretData')}
            />
          </FormGrid>
          <FormGrid item xs={12} sm={6} md={3} lg={2}>
            <ReferenceInput
              source='messageTypeId'
              label={translate('catalogs.messageTemplates.fields.messageTypeId')}
              reference='messageTypes'
              sort={{id: 'id', order: 'DESC'}}
            >
              <AutocompleteInput fullWidth optionText='title' />
            </ReferenceInput>
          </FormGrid>
        </FormGrid>
      </SimpleForm>
    </Create>
  );
};

export default DefaultMessageTemplateCreate;
