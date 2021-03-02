import React, {FC} from 'react';
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput
} from 'react-admin';


const TagEdit: FC<EditProps> = (props: EditProps) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput source="comment" />
    </SimpleForm>
  </Edit>
);

export default TagEdit;
