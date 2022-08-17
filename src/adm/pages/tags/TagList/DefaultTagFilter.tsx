import React, {FC} from 'react';
import {
  Filter,
  TextInput,
  useTranslate,
} from 'react-admin';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultTagFilter: FC<any> = (props) => {
  const translate = useTranslate();

  return (
    <Filter {...props}>
      <TextInput
        label={translate('catalogs.tags.fields.search')}
        source='q'
        alwaysOn
        sx={{m: 1}}
      />
      <TextInput
        fullWidth
        sx={{m: 1}}
        source='comment'
        defaultValue={null}
        label={translate('catalogs.tags.fields.comment')}
      />
    </Filter>
  );
};

export default DefaultTagFilter;
