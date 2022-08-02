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
        sx={{m: 1}}
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
        reference='entities'
        sort={{id: 'id', order: 'DESC'}}
        label={translate('catalogs.auditLogs.fields.entityTypeId')}
      >
        <AutocompleteInput
          fullWidth
          sx={{m: 1}}
          size='small'
          label={translate('catalogs.auditLogs.fields.entityTypeId')}
          optionText='title'
          defaultValue={null}
          parse={val => val || null}
        />
      </ReferenceInput>
      <TextInput
        fullWidth
        source='entityId'
        label={translate('catalogs.auditLogs.fields.entityId')}
      />
      <ReferenceInput
        source='actionTypeId'
        reference='auditLogActionTypes'
        sort={{id: 'id', order: 'DESC'}}
        label={translate('catalogs.auditLogs.fields.actionTypeId')}
      >
        <AutocompleteInput
          fullWidth
          sx={{m: 1}}
          size='small'
          label={translate('catalogs.auditLogs.fields.actionTypeId')}
          optionText='title'
          defaultValue={null}
          parse={val => val || null}
        />
      </ReferenceInput>
      <ReferenceInput
        source='managerId'
        reference='managers'
        sort={{id: 'id', order: 'DESC'}}
        label={translate('catalogs.auditLogs.fields.managerId')}
      >
        <AutocompleteInput
          fullWidth
          sx={{m: 1}}
          size='small'
          label={translate('catalogs.auditLogs.fields.managerId')}
          optionText='title'
          defaultValue={null}
          parse={val => val || null}
        />
      </ReferenceInput>
      <ReferenceInput
        source='userId'
        reference='users'
        sort={{id: 'id', order: 'DESC'}}
        label={translate('catalogs.auditLogs.fields.userId')}
      >
        <AutocompleteInput
          fullWidth
          sx={{m: 1}}
          size='small'
          label={translate('catalogs.auditLogs.fields.userId')}
          optionText='title'
          defaultValue={null}
          parse={val => val || null}
        />
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
