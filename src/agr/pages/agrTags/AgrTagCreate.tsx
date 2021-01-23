import React, {
  FC,
} from 'react';
import {
  Create,
  SimpleForm,
  EditProps,
  NumberInput,
  TextInput
} from 'react-admin';


const AgrTagEdit: FC<EditProps> = (props: EditProps) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="comment" />
    </SimpleForm>
  </Create>
);

export default AgrTagEdit;
