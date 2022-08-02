import React, {FC} from 'react';
import {
  Filter,
  TextInput,
  useTranslate,
} from 'react-admin';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultEntityFilter: FC<any> = (props) => {
  const translate = useTranslate();

  return (
    <Filter {...props}>
      <TextInput
        label={translate('catalogs.entities.fields.search')}
        source='q'
        alwaysOn
        sx={{m: 1}}
      />
      <TextInput
        fullWidth
        source='title'
        defaultValue={null}
        label={translate('catalogs.entities.fields.title')}
      />
    </Filter>
  );
};

export default DefaultEntityFilter;
