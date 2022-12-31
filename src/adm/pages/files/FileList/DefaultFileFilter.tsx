import React, {FC} from 'react';
import {
  Filter,
  TextInput,
  useTranslate,
} from 'react-admin';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultFileFilter: FC<any> = (props) => {
  const translate = useTranslate();

  return (
    <Filter {...props}>
      <TextInput
        label={translate('catalogs.files.fields.search')}
        source='q'
        alwaysOn
        sx={{m: 1}}
      />
      <TextInput
        fullWidth
        sx={{m: 1}}
        source='originalName'
        required
        label={translate('catalogs.files.fields.originalName')}
      />
      <TextInput
        fullWidth
        sx={{m: 1}}
        source='url'
        required
        label={translate('catalogs.files.fields.url')}
      />
      <TextInput
        fullWidth
        sx={{m: 1}}
        source='mimetype'
        required
        label={translate('catalogs.files.fields.mimetype')}
      />
      <TextInput
        fullWidth
        sx={{m: 1}}
        source='s3Key'
        required
        label={translate('catalogs.files.fields.s3Key')}
      />
      <TextInput
        fullWidth
        sx={{m: 1}}
        source='eTag'
        required
        label={translate('catalogs.files.fields.eTag')}
      />
    </Filter>
  );
};

export default DefaultFileFilter;
