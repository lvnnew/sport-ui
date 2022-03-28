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
      <TextInput label='Search' source='q' alwaysOn />
      <TextInput fullWidth source='title' label={translate('catalogs.managers.fields.title')} />
      <TextInput fullWidth source='lastName' label={translate('catalogs.managers.fields.lastName')} />
      <TextInput fullWidth source='firstName' label={translate('catalogs.managers.fields.firstName')} />
      <ReferenceInput
        source='languageId'
        label={translate('catalogs.managers.fields.languageId')}
        reference='languages'
        sort={{id: 'id', order: 'DESC'}}
      >
        <AutocompleteInput fullWidth optionText='title' resettable />
      </ReferenceInput>
      <TextInput fullWidth source='email' label={translate('catalogs.managers.fields.email')} />
      <TextInput fullWidth source='phone' label={translate('catalogs.managers.fields.phone')} />
      <TextInput fullWidth source='photo' label={translate('catalogs.managers.fields.photo')} />
      <TextInput fullWidth source='telegramLogin' label={translate('catalogs.managers.fields.telegramLogin')} />
      <ReferenceInput
        source='unitId'
        label={translate('catalogs.managers.fields.unitId')}
        reference='units'
        sort={{id: 'id', order: 'DESC'}}
      >
        <AutocompleteInput fullWidth optionText='title' resettable />
      </ReferenceInput>
      <BooleanInput fullWidth source='headOfUnit' label={translate('catalogs.managers.fields.headOfUnit')} />
      <BooleanInput fullWidth source='active' label={translate('catalogs.managers.fields.active')} />
      <ReferenceInput
        source='tenantId'
        label={translate('catalogs.managers.fields.tenantId')}
        reference='tenants'
        sort={{id: 'id', order: 'DESC'}}
      >
        <AutocompleteInput fullWidth optionText='title' resettable />
      </ReferenceInput>
    </Filter>
  );
};

export default DefaultManagerFilter;
