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
        source='originalName'
        label={translate('catalogs.files.fields.originalName')}
      />
      <TextInput
        fullWidth
        source='url'
        label={translate('catalogs.files.fields.url')}
      />
      <TextInput
        fullWidth
        source='mimetype'
        label={translate('catalogs.files.fields.mimetype')}
      />
      <TextInput
        fullWidth
        source='s3Key'
        label={translate('catalogs.files.fields.s3Key')}
      />
      <TextInput
        fullWidth
        source='eTag'
        label={translate('catalogs.files.fields.eTag')}
      />
    </Filter>
  );
};

export default DefaultFileFilter;
