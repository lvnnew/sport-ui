import React, {
  FC,
} from 'react';
import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  TextInput
} from 'react-admin';


const AgrTagEdit: FC<EditProps> = (props: EditProps) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput source="comment" />
    </SimpleForm>
  </Edit>
);

export default AgrTagEdit;
