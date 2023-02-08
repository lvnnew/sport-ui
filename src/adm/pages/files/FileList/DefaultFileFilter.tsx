import React, {FC} from 'react';
import {
  Filter,
  TextInput,
} from 'react-admin';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultFileFilter: FC<any> = (props) => {
  return (
    <Filter {...props}>
      <TextInput
        label='ra.action.search'
        source='q'
        alwaysOn
        sx={{m: 1}}
      />
      <TextInput
        fullWidth
        sx={{m: 1}}
        source='originalName'
        label='catalogs.files.fields.originalName'
      />
      <TextInput
        fullWidth
        sx={{m: 1}}
        source='url'
        label='catalogs.files.fields.url'
      />
      <TextInput
        fullWidth
        sx={{m: 1}}
        source='mimetype'
        label='catalogs.files.fields.mimetype'
      />
      <TextInput
        fullWidth
        sx={{m: 1}}
        source='s3Key'
        label='catalogs.files.fields.s3Key'
      />
      <TextInput
        fullWidth
        sx={{m: 1}}
        source='eTag'
        label='catalogs.files.fields.eTag'
      />
    </Filter>
  );
};

export default DefaultFileFilter;
