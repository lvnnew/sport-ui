import React, {FC} from 'react';
import {
  Filter,
  TextInput
} from 'react-admin';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultFileFilter: FC<any> = (props) => (
  <Filter {...props}>
      <TextInput label="Search" source="q" alwaysOn />
      <TextInput fullWidth source="originalName" />
      <TextInput fullWidth source="url" />
      <TextInput fullWidth source="mimetype" />
      <TextInput fullWidth source="s3Key" />
      <TextInput fullWidth source="eTag" />
  </Filter>
);

export default DefaultFileFilter;
