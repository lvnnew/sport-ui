import React, {FC} from 'react';
import {
  Create,
  SimpleForm,
  EditProps,
  TextInput
} from 'react-admin';

// DO NOT EDIT! THIS IS GENERATED FILE

const TagEdit: FC<EditProps> = (props: EditProps) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="comment" />
    </SimpleForm>
  </Create>
);

export default TagEdit;
