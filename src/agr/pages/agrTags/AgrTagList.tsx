import React, {
  FC,
} from 'react';
import {
  List,
  Datagrid,
  ListProps,
  NumberField,
  TextField
} from 'react-admin';


const AgrTagList: FC<ListProps> = (props: ListProps) => (
  <List {...props}>
    <Datagrid rowClick="show">
      <NumberField source="id" />
      <TextField source="comment" />
    </Datagrid>
  </List>
);

export default AgrTagList;
