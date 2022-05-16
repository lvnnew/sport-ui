import React, {FC} from 'react';
import {
  Filter,
  TextInput,
  ReferenceInput,
  AutocompleteInput,
  BooleanInput,
  useTranslate,
} from 'react-admin';
import DateTimeInput from '../../../../uiLib/DateTimeInput';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultAuditLogFilter: FC<any> = (props) => {
  const translate = useTranslate();

  return (
    <Filter {...props}>
      <TextInput
        label={translate('catalogs.auditLogs.fields.search')}
        source='q'
        alwaysOn
      />
      <DateTimeInput
        fullWidth
        source='date'
        label={translate('catalogs.auditLogs.fields.date')}
      />
      <TextInput
        fullWidth
        source='title'
        label={translate('catalogs.auditLogs.fields.title')}
      />
      <ReferenceInput
        source='entityTypeId'
        label={translate('catalogs.auditLogs.fields.entityTypeId')}
        reference='entities'
        sort={{id: 'id', order: 'DESC'}}
      >
        <AutocompleteInput fullWidth optionText='title' defaultValue={null} />
      </ReferenceInput>
      <TextInput
        fullWidth
        source='entityId'
        label={translate('catalogs.auditLogs.fields.entityId')}
      />
      <ReferenceInput
        source='actionTypeId'
        label={translate('catalogs.auditLogs.fields.actionTypeId')}
        reference='auditLogActionTypes'
        sort={{id: 'id', order: 'DESC'}}
      >
        <AutocompleteInput fullWidth optionText='title' defaultValue={null} />
      </ReferenceInput>
      <ReferenceInput
        source='managerId'
        label={translate('catalogs.auditLogs.fields.managerId')}
        reference='managers'
        sort={{id: 'id', order: 'DESC'}}
      >
        <AutocompleteInput fullWidth optionText='title' defaultValue={null} />
      </ReferenceInput>
      <ReferenceInput
        source='userId'
        label={translate('catalogs.auditLogs.fields.userId')}
        reference='users'
        sort={{id: 'id', order: 'DESC'}}
      >
        <AutocompleteInput fullWidth optionText='title' defaultValue={null} />
      </ReferenceInput>
      <BooleanInput
        fullWidth
        source='foreign'
        defaultValue={null}
        label={translate('catalogs.auditLogs.fields.foreign')}
      />
      <TextInput
        fullWidth
        source='foreignEntityType'
        defaultValue={null}
        label={translate('catalogs.auditLogs.fields.foreignEntityType')}
      />
      <TextInput
        fullWidth
        source='foreignEntityId'
        defaultValue={null}
        label={translate('catalogs.auditLogs.fields.foreignEntityId')}
      />
      <TextInput
        fullWidth
        source='actionData'
        defaultValue={null}
        label={translate('catalogs.auditLogs.fields.actionData')}
      />
    </Filter>
  );
};

export default DefaultAuditLogFilter;
