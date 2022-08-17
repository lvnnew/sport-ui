import React, {FC} from 'react';
import {
  Filter,
  TextInput,
  ReferenceInput,
  AutocompleteInput,
  BooleanInput,
  useTranslate,
} from 'react-admin';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultManagerFilter: FC<any> = (props) => {
  const translate = useTranslate();

  return (
    <Filter {...props}>
      <TextInput
        label={translate('catalogs.managers.fields.search')}
        source='q'
        alwaysOn
        sx={{m: 1}}
      />
      <TextInput
        fullWidth
        sx={{m: 1}}
        source='title'
        defaultValue={null}
        label={translate('catalogs.managers.fields.title')}
      />
      <TextInput
        fullWidth
        sx={{m: 1}}
        source='lastName'
        label={translate('catalogs.managers.fields.lastName')}
      />
      <TextInput
        fullWidth
        sx={{m: 1}}
        source='firstName'
        label={translate('catalogs.managers.fields.firstName')}
      />
      <ReferenceInput
        source='languageId'
        reference='languages'
        sort={{id: 'id', order: 'DESC'}}
        label={translate('catalogs.managers.fields.languageId')}
      >
        <AutocompleteInput
          fullWidth
          sx={{m: 1}}
          size='small'
          label={translate('catalogs.managers.fields.languageId')}
          optionText='title'
          defaultValue={null}
          parse={val => val || null}
        />
      </ReferenceInput>
      <TextInput
        fullWidth
        sx={{m: 1}}
        source='email'
        label={translate('catalogs.managers.fields.email')}
      />
      <TextInput
        fullWidth
        sx={{m: 1}}
        source='phone'
        defaultValue={null}
        label={translate('catalogs.managers.fields.phone')}
      />
      <TextInput
        fullWidth
        sx={{m: 1}}
        source='photo'
        defaultValue={null}
        label={translate('catalogs.managers.fields.photo')}
      />
      <TextInput
        fullWidth
        sx={{m: 1}}
        source='telegramLogin'
        defaultValue={null}
        label={translate('catalogs.managers.fields.telegramLogin')}
      />
      <ReferenceInput
        source='unitId'
        reference='units'
        sort={{id: 'id', order: 'DESC'}}
        label={translate('catalogs.managers.fields.unitId')}
      >
        <AutocompleteInput
          fullWidth
          sx={{m: 1}}
          size='small'
          label={translate('catalogs.managers.fields.unitId')}
          optionText='title'
          defaultValue={null}
          parse={val => val || null}
        />
      </ReferenceInput>
      <BooleanInput
        fullWidth
        sx={{m: 1}}
        source='headOfUnit'
        label={translate('catalogs.managers.fields.headOfUnit')}
      />
      <BooleanInput
        fullWidth
        sx={{m: 1}}
        source='active'
        label={translate('catalogs.managers.fields.active')}
      />
      <ReferenceInput
        source='tenantId'
        reference='tenants'
        sort={{id: 'id', order: 'DESC'}}
        label={translate('catalogs.managers.fields.tenantId')}
      >
        <AutocompleteInput
          fullWidth
          sx={{m: 1}}
          size='small'
          label={translate('catalogs.managers.fields.tenantId')}
          optionText='title'
          defaultValue={null}
          parse={val => val || null}
        />
      </ReferenceInput>
    </Filter>
  );
};

export default DefaultManagerFilter;
