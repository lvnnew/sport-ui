import React, {FC} from 'react';
import {
  Filter,
  TextInput,
  ReferenceInput,
  AutocompleteInput,
} from 'react-admin';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultRolesToPermissionFilter: FC<any> = (props) => {
  return (
    <Filter {...props}>
      <TextInput
        label='catalogs.rolesToPermissions.fields.search'
        source='q'
        alwaysOn
        sx={{m: 1}}
      />
      <ReferenceInput
        source='roleId'
        reference='roles'
        sort={{field: 'id', order: 'DESC'}}
        label='catalogs.rolesToPermissions.fields.roleId'
      >
        <AutocompleteInput
          fullWidth
          sx={{m: 1}}
          size='small'
          label='catalogs.rolesToPermissions.fields.roleId'
          defaultValue={null}
          parse={val => val || null}
          noOptionsText='ra.message.noOptions'
        />
      </ReferenceInput>
      <ReferenceInput
        source='permissionId'
        reference='permissions'
        sort={{field: 'id', order: 'DESC'}}
        label='catalogs.rolesToPermissions.fields.permissionId'
      >
        <AutocompleteInput
          fullWidth
          sx={{m: 1}}
          size='small'
          label='catalogs.rolesToPermissions.fields.permissionId'
          defaultValue={null}
          parse={val => val || null}
          noOptionsText='ra.message.noOptions'
        />
      </ReferenceInput>
    </Filter>
  );
};

export default DefaultRolesToPermissionFilter;
