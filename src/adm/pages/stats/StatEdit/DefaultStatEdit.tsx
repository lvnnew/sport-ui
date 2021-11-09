/* eslint-disable max-len */
import React, {FC, useMemo} from 'react';
import {
  useTranslate,
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  NumberInput,
} from 'react-admin';
import FormGrid from '../../../../uiLib/FormGrid';
import {makeValidate} from 'mui-rff';
import getStatValudation from '../getStatValudation';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultStatEdit: FC<EditProps> = (props: EditProps) => {
  const t = useTranslate();

  const validate = useMemo(() => makeValidate(getStatValudation(t)), [t]);

  return (
    <Edit {...props}>
      <SimpleForm
        initialValues={{}}
        validate={validate}
      >
        <FormGrid container spacing={2}>
          <FormGrid item xs={12} sm={6} md={3} lg={2}>
            <DateTimeInput fullWidth source='updated' />
          </FormGrid>
          <FormGrid item xs={12} sm={6} md={3} lg={2}>
            <NumberInput fullWidth source='helloCount' />
          </FormGrid>
        </FormGrid>
      </SimpleForm>
    </Edit>
  );
};

export default DefaultStatEdit;
