import React, {FC} from 'react';
import {
  Filter,
  TextInput,
  useTranslate,
} from 'react-admin';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultMessageTypeFilter: FC<any> = (props) => {
  const translate = useTranslate();

  return (
    <Filter {...props}>
      <TextInput
        label={translate('catalogs.messageTypes.fields.search')}
        source='q'
        alwaysOn
      />
      <TextInput
        fullWidth
        source='title'
        label={translate('catalogs.messageTypes.fields.title')}
      />
      <TextInput
        fullWidth
        source='description'
        label={translate('catalogs.messageTypes.fields.description')}
      />
    </Filter>
  );
};

export default DefaultMessageTypeFilter;
