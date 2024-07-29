import React, {FC} from 'react';
import {
  Filter,
  TextInput,
  BooleanInput,
  ReferenceInput,
  AutocompleteInput,
} from 'react-admin';
import DateTimeInput from '../../../../uiLib/DateTimeInput';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultAuditLogFilter: FC<any> = (props) => {
  return (
    <Filter {...props}>
      <TextInput
        label='ra.action.search'
        source='q'
        alwaysOn
        sx={{m: 1}}
      />
      <DateTimeInput
        fullWidth
        sx={{m: 1}}
        source='date'
        label='catalogs.auditLogs.fields.date'
      />
      <TextInput
        fullWidth
        sx={{m: 1}}
        source='title'
        label='catalogs.auditLogs.fields.title'
      />
      <BooleanInput
        fullWidth
        sx={{m: 1}}
        source='success'
        defaultValue={null}
        label='catalogs.auditLogs.fields.success'
      />
      <TextInput
        fullWidth
        sx={{m: 1}}
        source='error'
        defaultValue={null}
        label='catalogs.auditLogs.fields.error'
      />
      <ReferenceInput
        source='entityTypeId'
        reference='entities'
        sort={{field: 'id', order: 'DESC'}}
        perPage={100}
        label='catalogs.auditLogs.fields.entityTypeId'
      >
        <AutocompleteInput
          fullWidth
          sx={{m: '8px 8px 6px'}}
          size='small'
          label='catalogs.auditLogs.fields.entityTypeId'
          defaultValue={null}
          parse={val => val || null}
          noOptionsText='ra.message.noOptions'
        />
      </ReferenceInput>
      <TextInput
        fullWidth
        sx={{m: 1}}
        source='entityId'
        label='catalogs.auditLogs.fields.entityId'
      />
      <ReferenceInput
        source='actionTypeId'
        reference='auditLogActionTypes'
        sort={{field: 'id', order: 'DESC'}}
        perPage={100}
        label='catalogs.auditLogs.fields.actionTypeId'
      >
        <AutocompleteInput
          fullWidth
          sx={{m: '8px 8px 6px'}}
          size='small'
          label='catalogs.auditLogs.fields.actionTypeId'
          defaultValue={null}
          parse={val => val || null}
          noOptionsText='ra.message.noOptions'
        />
      </ReferenceInput>
      <ReferenceInput
        source='managerId'
        reference='managers'
        sort={{field: 'id', order: 'DESC'}}
        perPage={100}
        label='catalogs.auditLogs.fields.managerId'
      >
        <AutocompleteInput
          fullWidth
          sx={{m: '8px 8px 6px'}}
          size='small'
          label='catalogs.auditLogs.fields.managerId'
          defaultValue={null}
          parse={val => val || null}
          noOptionsText='ra.message.noOptions'
        />
      </ReferenceInput>
      <TextInput
        fullWidth
        sx={{m: 1}}
        source='managerLogin'
        defaultValue={null}
        label='catalogs.auditLogs.fields.managerLogin'
      />
      <ReferenceInput
        source='userId'
        reference='users'
        sort={{field: 'id', order: 'DESC'}}
        perPage={100}
        label='catalogs.auditLogs.fields.userId'
      >
        <AutocompleteInput
          fullWidth
          sx={{m: '8px 8px 6px'}}
          size='small'
          label='catalogs.auditLogs.fields.userId'
          defaultValue={null}
          parse={val => val || null}
          noOptionsText='ra.message.noOptions'
        />
      </ReferenceInput>
      <BooleanInput
        fullWidth
        sx={{m: 1}}
        source='foreign'
        defaultValue={null}
        label='catalogs.auditLogs.fields.foreign'
      />
      <TextInput
        fullWidth
        sx={{m: 1}}
        source='foreignEntityType'
        defaultValue={null}
        label='catalogs.auditLogs.fields.foreignEntityType'
      />
      <TextInput
        fullWidth
        sx={{m: 1}}
        source='foreignEntityId'
        defaultValue={null}
        label='catalogs.auditLogs.fields.foreignEntityId'
      />
    </Filter>
  );
};

export default DefaultAuditLogFilter;
