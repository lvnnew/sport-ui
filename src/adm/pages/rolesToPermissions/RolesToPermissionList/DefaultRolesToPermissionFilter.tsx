import React, {FC} from 'react';
import {
  Filter,
  TextInput,
  ReferenceInput,
  AutocompleteInput,
  useTranslate,
} from 'react-admin';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultRolesToPermissionFilter: FC<any> = (props) => {
  const translate = useTranslate();

  return (
    <Filter {...props}>
      <TextInput
        label={translate('catalogs.rolesToPermissions.fields.search')}
        source='q'
        alwaysOn
        sx={{m: 1}}
      />
      <ReferenceInput
        source='roleId'
        reference='roles'
        sort={{id: 'id', order: 'DESC'}}
        label={translate('catalogs.rolesToPermissions.fields.roleId')}
      >
        <AutocompleteInput
          fullWidth
          sx={{m: 1}}
          size='small'
          label={translate('catalogs.rolesToPermissions.fields.roleId')}
          optionText='title'
          defaultValue={null}
          parse={val => val || null}
        />
      </ReferenceInput>
      <ReferenceInput
        source='permissionId'
        reference='permissions'
        sort={{id: 'id', order: 'DESC'}}
        label={translate('catalogs.rolesToPermissions.fields.permissionId')}
      >
        <AutocompleteInput
          fullWidth
          sx={{m: 1}}
          size='small'
          label={translate('catalogs.rolesToPermissions.fields.permissionId')}
          optionText='title'
          defaultValue={null}
          parse={val => val || null}
        />
      </ReferenceInput>
    </Filter>
  );
};

export default DefaultRolesToPermissionFilter;
