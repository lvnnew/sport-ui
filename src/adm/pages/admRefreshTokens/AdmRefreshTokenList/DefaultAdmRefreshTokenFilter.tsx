import React, {FC} from 'react';
import {
  Filter,
  TextInput,
  ReferenceInput,
  AutocompleteInput,
  useTranslate,
} from 'react-admin';
import DateTimeInput from '../../../../uiLib/DateTimeInput';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultAdmRefreshTokenFilter: FC<any> = (props) => {
  const translate = useTranslate();

  return (
    <Filter {...props}>
      <TextInput label='Search' source='q' alwaysOn />
      <DateTimeInput fullWidth source='create' label={translate('catalogs.admRefreshTokens.fields.create')} />
      <ReferenceInput
        source='managerId'
        label={translate('catalogs.admRefreshTokens.fields.managerId')}
        reference='managers'
        sort={{id: 'id', order: 'DESC'}}
      >
        <AutocompleteInput fullWidth optionText='title' />
      </ReferenceInput>
      <TextInput fullWidth source='token' label={translate('catalogs.admRefreshTokens.fields.token')} />
    </Filter>
  );
};

export default DefaultAdmRefreshTokenFilter;
