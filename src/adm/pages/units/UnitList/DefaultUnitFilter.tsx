import React, {FC} from 'react';
import {
  Filter,
  TextInput,
  ReferenceInput,
  AutocompleteInput,
  useTranslate,
} from 'react-admin';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultUnitFilter: FC<any> = (props) => {
  const translate = useTranslate();

  return (
    <Filter {...props}>
      <TextInput
        label={translate('catalogs.units.fields.search')}
        source='q'
        alwaysOn
      />
      <TextInput
        fullWidth
        source='title'
        defaultValue={null}
        label={translate('catalogs.units.fields.title')}
      />
      <ReferenceInput
        source='parentId'
        label={translate('catalogs.units.fields.parentId')}
        reference='units'
        sort={{id: 'id', order: 'DESC'}}
      >
        <AutocompleteInput fullWidth optionText='title' defaultValue={null} parse={val => val || null} />
      </ReferenceInput>
    </Filter>
  );
};

export default DefaultUnitFilter;
