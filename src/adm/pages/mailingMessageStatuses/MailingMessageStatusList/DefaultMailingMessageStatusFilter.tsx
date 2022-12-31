import React, {FC} from 'react';
import {
  Filter,
  TextInput,
  BooleanInput,
  useTranslate,
} from 'react-admin';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultMailingMessageStatusFilter: FC<any> = (props) => {
  const translate = useTranslate();

  return (
    <Filter {...props}>
      <TextInput
        label={translate('catalogs.mailingMessageStatuses.fields.search')}
        source='q'
        alwaysOn
        sx={{m: 1}}
      />
      <TextInput
        fullWidth
        sx={{m: 1}}
        source='title'
        defaultValue={null}
        label={translate('catalogs.mailingMessageStatuses.fields.title')}
      />
      <BooleanInput
        fullWidth
        sx={{m: 1}}
        source='final'
        required
        label={translate('catalogs.mailingMessageStatuses.fields.final')}
      />
    </Filter>
  );
};

export default DefaultMailingMessageStatusFilter;
