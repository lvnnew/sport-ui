import React, {FC} from 'react';
import {
  Filter,
  TextInput,
  ReferenceInput,
  AutocompleteInput,
  useTranslate,
} from 'react-admin';
import DateInput from '../../../../uiLib/DateInput';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultManagersToPermissionFilter: FC<any> = (props) => {
  const translate = useTranslate();

  return (
    <Filter {...props}>
      <TextInput
        label={translate('catalogs.managersToPermissions.fields.search')}
        source='q'
        alwaysOn
        sx={{m: 1}}
      />
      <ReferenceInput
        source='managerId'
        reference='managers'
        sort={{field: 'id', order: 'DESC'}}
        label={translate('catalogs.managersToPermissions.fields.managerId')}
      >
        <AutocompleteInput
          fullWidth
          sx={{m: 1}}
          size='small'
          label={translate('catalogs.managersToPermissions.fields.managerId')}
          optionText='title'
          defaultValue={null}
          parse={val => val || null}
          isRequired
        />
      </ReferenceInput>
      <ReferenceInput
        source='permissionId'
        reference='permissions'
        sort={{field: 'id', order: 'DESC'}}
        label={translate('catalogs.managersToPermissions.fields.permissionId')}
      >
        <AutocompleteInput
          fullWidth
          sx={{m: 1}}
          size='small'
          label={translate('catalogs.managersToPermissions.fields.permissionId')}
          optionText='title'
          defaultValue={null}
          parse={val => val || null}
          isRequired
        />
      </ReferenceInput>
      <DateInput
        fullWidth
        sx={{m: 1}}
        source='expiresAt'
        defaultValue={null}
        label={translate('catalogs.managersToPermissions.fields.expiresAt')}
      />
    </Filter>
  );
};

export default DefaultManagersToPermissionFilter;
