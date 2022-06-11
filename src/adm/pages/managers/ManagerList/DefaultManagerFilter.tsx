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
      />
      <TextInput
        fullWidth
        source='title'
        defaultValue={null}
        label={translate('catalogs.managers.fields.title')}
      />
      <TextInput
        fullWidth
        source='lastName'
        label={translate('catalogs.managers.fields.lastName')}
      />
      <TextInput
        fullWidth
        source='firstName'
        label={translate('catalogs.managers.fields.firstName')}
      />
      <ReferenceInput
        source='languageId'
        reference='languages'
        sort={{id: 'id', order: 'DESC'}}
      >
        <AutocompleteInput
          fullWidth
          label={translate('catalogs.managers.fields.languageId')}
          optionText='title'
          defaultValue={null}
          parse={val => val || null}
        />
      </ReferenceInput>
      <TextInput
        fullWidth
        source='email'
        label={translate('catalogs.managers.fields.email')}
      />
      <TextInput
        fullWidth
        source='phone'
        defaultValue={null}
        label={translate('catalogs.managers.fields.phone')}
      />
      <TextInput
        fullWidth
        source='photo'
        defaultValue={null}
        label={translate('catalogs.managers.fields.photo')}
      />
      <TextInput
        fullWidth
        source='telegramLogin'
        defaultValue={null}
        label={translate('catalogs.managers.fields.telegramLogin')}
      />
      <ReferenceInput
        source='unitId'
        reference='units'
        sort={{id: 'id', order: 'DESC'}}
      >
        <AutocompleteInput
          fullWidth
          label={translate('catalogs.managers.fields.unitId')}
          optionText='title'
          defaultValue={null}
          parse={val => val || null}
        />
      </ReferenceInput>
      <BooleanInput
        fullWidth
        source='headOfUnit'
        label={translate('catalogs.managers.fields.headOfUnit')}
      />
      <BooleanInput
        fullWidth
        source='active'
        label={translate('catalogs.managers.fields.active')}
      />
      <ReferenceInput
        source='tenantId'
        reference='tenants'
        sort={{id: 'id', order: 'DESC'}}
      >
        <AutocompleteInput
          fullWidth
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
