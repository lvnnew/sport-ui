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
      <TextInput
        label={translate('catalogs.auditLogActionTypes.fields.search')}
        source='q'
        alwaysOn
        sx={{m: 1}}
      />
      <TextInput
        fullWidth
        sx={{m: 1}}
        source='title'
        defaultValue={null}
        label={translate('catalogs.auditLogActionTypes.fields.title')}
      />
    </Filter>
  );
};

export default DefaultAuditLogActionTypeFilter;
