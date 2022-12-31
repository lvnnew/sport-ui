import React, {FC} from 'react';
import {
  Filter,
  TextInput,
  BooleanInput,
  ReferenceInput,
  AutocompleteInput,
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
        sx={{m: 1}}
        source='date'
        required
        label={translate('catalogs.auditLogs.fields.date')}
      />
      <TextInput
        fullWidth
        sx={{m: 1}}
        source='title'
        required
        label={translate('catalogs.auditLogs.fields.title')}
      />
      <BooleanInput
        fullWidth
        sx={{m: 1}}
        source='success'
        defaultValue={null}
        label={translate('catalogs.auditLogs.fields.success')}
      />
      <TextInput
        fullWidth
        sx={{m: 1}}
        source='error'
        defaultValue={null}
        label={translate('catalogs.auditLogs.fields.error')}
      />
      <ReferenceInput
        source='entityTypeId'
        reference='entities'
        sort={{field: 'id', order: 'DESC'}}
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
          isRequired
        />
      </ReferenceInput>
      <TextInput
        fullWidth
        sx={{m: 1}}
        source='entityId'
        required
        label={translate('catalogs.auditLogs.fields.entityId')}
      />
      <ReferenceInput
        source='actionTypeId'
        reference='auditLogActionTypes'
        sort={{field: 'id', order: 'DESC'}}
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
          isRequired
        />
      </ReferenceInput>
      <ReferenceInput
        source='managerId'
        reference='managers'
        sort={{field: 'id', order: 'DESC'}}
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
        sort={{field: 'id', order: 'DESC'}}
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
        sx={{m: 1}}
        source='foreign'
        defaultValue={null}
        label={translate('catalogs.auditLogs.fields.foreign')}
      />
      <TextInput
        fullWidth
        sx={{m: 1}}
        source='foreignEntityType'
        defaultValue={null}
        label={translate('catalogs.auditLogs.fields.foreignEntityType')}
      />
      <TextInput
        fullWidth
        sx={{m: 1}}
        source='foreignEntityId'
        defaultValue={null}
        label={translate('catalogs.auditLogs.fields.foreignEntityId')}
      />
      <TextInput
        fullWidth
        sx={{m: 1}}
        source='actionData'
        defaultValue={null}
        label={translate('catalogs.auditLogs.fields.actionData')}
      />
    </Filter>
  );
};

export default DefaultAuditLogFilter;
