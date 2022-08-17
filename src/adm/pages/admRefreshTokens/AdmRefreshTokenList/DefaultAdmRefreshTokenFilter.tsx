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
      <TextInput
        label={translate('catalogs.admRefreshTokens.fields.search')}
        source='q'
        alwaysOn
        sx={{m: 1}}
      />
      <DateTimeInput
        fullWidth
        sx={{m: 1}}
        source='create'
        label={translate('catalogs.admRefreshTokens.fields.create')}
      />
      <ReferenceInput
        source='managerId'
        reference='managers'
        sort={{id: 'id', order: 'DESC'}}
        label={translate('catalogs.admRefreshTokens.fields.managerId')}
      >
        <AutocompleteInput
          fullWidth
          sx={{m: 1}}
          size='small'
          label={translate('catalogs.admRefreshTokens.fields.managerId')}
          optionText='title'
          defaultValue={null}
          parse={val => val || null}
        />
      </ReferenceInput>
      <TextInput
        fullWidth
        sx={{m: 1}}
        source='token'
        label={translate('catalogs.admRefreshTokens.fields.token')}
      />
    </Filter>
  );
};

export default DefaultAdmRefreshTokenFilter;
