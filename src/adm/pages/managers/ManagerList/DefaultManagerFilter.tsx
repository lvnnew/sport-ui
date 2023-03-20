import React, {FC} from 'react';
import {
  Filter,
  TextInput,
  ReferenceInput,
  AutocompleteInput,
  BooleanInput,
} from 'react-admin';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultManagerFilter: FC<any> = (props) => {
  return (
    <Filter {...props}>
      <TextInput
        label='ra.action.search'
        source='q'
        alwaysOn
        sx={{m: 1}}
      />
      <TextInput
        fullWidth
        sx={{m: 1}}
        source='title'
        defaultValue={null}
        label='catalogs.managers.fields.title'
      />
      <TextInput
        fullWidth
        sx={{m: 1}}
        source='lastName'
        label='catalogs.managers.fields.lastName'
      />
      <TextInput
        fullWidth
        sx={{m: 1}}
        source='firstName'
        label='catalogs.managers.fields.firstName'
      />
      <ReferenceInput
        source='languageId'
        reference='languages'
        sort={{field: 'id', order: 'DESC'}}
        label='catalogs.managers.fields.languageId'
      >
        <AutocompleteInput
          fullWidth
          sx={{m: 1}}
          size='small'
          label='catalogs.managers.fields.languageId'
          defaultValue={null}
          parse={val => val || null}
          noOptionsText='ra.message.noOptions'
          optionText='title'
        />
      </ReferenceInput>
      <TextInput
        fullWidth
        sx={{m: 1}}
        source='email'
        label='catalogs.managers.fields.email'
      />
      <TextInput
        fullWidth
        sx={{m: 1}}
        source='phone'
        defaultValue={null}
        label='catalogs.managers.fields.phone'
      />
      <TextInput
        fullWidth
        sx={{m: 1}}
        source='telegramLogin'
        defaultValue={null}
        label='catalogs.managers.fields.telegramLogin'
      />
      <ReferenceInput
        source='unitId'
        reference='units'
        sort={{field: 'id', order: 'DESC'}}
        label='catalogs.managers.fields.unitId'
      >
        <AutocompleteInput
          fullWidth
          sx={{m: 1}}
          size='small'
          label='catalogs.managers.fields.unitId'
          defaultValue={null}
          parse={val => val || null}
          noOptionsText='ra.message.noOptions'
          optionText='title'
        />
      </ReferenceInput>
      <BooleanInput
        fullWidth
        sx={{m: 1}}
        source='headOfUnit'
        label='catalogs.managers.fields.headOfUnit'
      />
      <BooleanInput
        fullWidth
        sx={{m: 1}}
        source='active'
        label='catalogs.managers.fields.active'
      />
      <ReferenceInput
        source='tenantId'
        reference='tenants'
        sort={{field: 'id', order: 'DESC'}}
        label='catalogs.managers.fields.tenantId'
      >
        <AutocompleteInput
          fullWidth
          sx={{m: 1}}
          size='small'
          label='catalogs.managers.fields.tenantId'
          defaultValue={null}
          parse={val => val || null}
          noOptionsText='ra.message.noOptions'
          optionText='title'
        />
      </ReferenceInput>
    </Filter>
  );
};

export default DefaultManagerFilter;
