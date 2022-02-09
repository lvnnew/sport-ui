/* eslint-disable max-len */
import React, {FC, useMemo, useCallback} from 'react';
import {
  useTranslate,
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
} from 'react-admin';
import FormGrid from '../../../../uiLib/FormGrid';
import {makeValidate} from 'mui-rff';
import getMessageTypeValudation from '../getMessageTypeValudation';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultMessageTypeEdit: FC<EditProps> = (props: EditProps) => {
  const t = useTranslate();

  const validate = useMemo(() => makeValidate(getMessageTypeValudation(t)), [t]);

  return (
    <Edit
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
            <TextInput fullWidth source='title' />
          </FormGrid>
          <FormGrid item xs={12} sm={6} md={3} lg={2}>
            <TextInput fullWidth source='description' />
          </FormGrid>
        </FormGrid>
      </SimpleForm>
    </Edit>
  );
};

export default DefaultMessageTypeEdit;
