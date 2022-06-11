import React, {FC} from 'react';
import {
  Filter,
  TextInput,
  ReferenceInput,
  AutocompleteInput,
  useTranslate,
} from 'react-admin';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultManagersToRoleFilter: FC<any> = (props) => {
  const translate = useTranslate();

  return (
    <Filter {...props}>
      <TextInput
        label={translate('catalogs.managersToRoles.fields.search')}
        source='q'
        alwaysOn
      />
      <ReferenceInput
        source='managerId'
        reference='managers'
        sort={{id: 'id', order: 'DESC'}}
      >
        <AutocompleteInput
          fullWidth
          label={translate('catalogs.managersToRoles.fields.managerId')}
          optionText='title'
          defaultValue={null}
          parse={val => val || null}
        />
      </ReferenceInput>
      <ReferenceInput
        source='roleId'
        reference='roles'
        sort={{id: 'id', order: 'DESC'}}
      >
        <AutocompleteInput
          fullWidth
          label={translate('catalogs.managersToRoles.fields.roleId')}
          optionText='title'
          defaultValue={null}
          parse={val => val || null}
        />
      </ReferenceInput>
    </Filter>
  );
};

export default DefaultManagersToRoleFilter;
