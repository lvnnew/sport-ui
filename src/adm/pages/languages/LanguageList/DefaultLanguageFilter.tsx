import React, {FC} from 'react';
import {
  Filter,
  TextInput,
  useTranslate,
} from 'react-admin';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultLanguageFilter: FC<any> = (props) => {
  const translate = useTranslate();

  return (
    <Filter {...props}>
      <TextInput
        label={translate('catalogs.languages.fields.search')}
        source='q'
        alwaysOn
        sx={{m: 1}}
      />
      <TextInput
        fullWidth
        source='title'
        defaultValue={null}
        label={translate('catalogs.languages.fields.title')}
      />
    </Filter>
  );
};

export default DefaultLanguageFilter;
