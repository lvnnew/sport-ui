import React, {FC} from 'react';
import {
  Filter,
  TextInput,
  useTranslate,
} from 'react-admin';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultAuditLogActionTypeFilter: FC<any> = (props) => {
  const translate = useTranslate();

  return (
  <Filter {...props}>
    <TextInput label='Search' source='q' alwaysOn />
    <TextInput fullWidth source='title' label={translate('catalogs.auditLogActionTypes.fields.title')} />
  </Filter>
);
};

export default DefaultAuditLogActionTypeFilter;
