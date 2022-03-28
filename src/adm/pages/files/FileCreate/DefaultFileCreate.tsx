/* eslint-disable max-len */
import React, {FC, useMemo, useCallback} from 'react';
import {
  useTranslate,
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
} from 'react-admin';
import FormGrid from '../../../../uiLib/FormGrid';
import {makeValidate} from 'mui-rff';
import getFileValudation from '../getFileValudation';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultFileCreate: FC<CreateProps> = (props: CreateProps) => {
  const translate = useTranslate();

  const validate = useMemo(() => makeValidate(getFileValudation(translate)), [translate]);

  return (
    <Create
      {...props}
      transform={useCallback((data) => ({
        ...data,
      }), [])}
    >
      <SimpleForm
        initialValues={{}}
        validate={validate}
      >
        <FormGrid container spacing={2}>
          <FormGrid item xs={12} sm={6} md={3} lg={2}>
            <TextInput fullWidth source='originalName' label={translate('catalogs.files.fields.originalName')} />
          </FormGrid>
          <FormGrid item xs={12} sm={6} md={3} lg={2}>
            <TextInput fullWidth source='url' label={translate('catalogs.files.fields.url')} />
          </FormGrid>
          <FormGrid item xs={12} sm={6} md={3} lg={2}>
            <TextInput fullWidth source='mimetype' label={translate('catalogs.files.fields.mimetype')} />
          </FormGrid>
          <FormGrid item xs={12} sm={6} md={3} lg={2}>
            <TextInput fullWidth source='s3Key' label={translate('catalogs.files.fields.s3Key')} />
          </FormGrid>
          <FormGrid item xs={12} sm={6} md={3} lg={2}>
            <TextInput fullWidth source='eTag' label={translate('catalogs.files.fields.eTag')} />
          </FormGrid>
        </FormGrid>
      </SimpleForm>
    </Create>
  );
};

export default DefaultFileCreate;
