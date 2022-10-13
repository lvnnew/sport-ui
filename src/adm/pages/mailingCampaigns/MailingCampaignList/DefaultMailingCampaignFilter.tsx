import React, {FC} from 'react';
import {
  Filter,
  TextInput,
  ReferenceInput,
  AutocompleteInput,
  NumberInput,
  useTranslate,
} from 'react-admin';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultMailingCampaignFilter: FC<any> = (props) => {
  const translate = useTranslate();

  return (
    <Filter {...props}>
      <TextInput
        label={translate('catalogs.mailingCampaigns.fields.search')}
        source='q'
        alwaysOn
        sx={{m: 1}}
      />
      <TextInput
        fullWidth
        sx={{m: 1}}
        source='title'
        label={translate('catalogs.mailingCampaigns.fields.title')}
      />
      <ReferenceInput
        source='mailingTypeId'
        reference='mailingTypes'
        sort={{field: 'id', order: 'DESC'}}
        label={translate('catalogs.mailingCampaigns.fields.mailingTypeId')}
      >
        <AutocompleteInput
          fullWidth
          sx={{m: 1}}
          size='small'
          label={translate('catalogs.mailingCampaigns.fields.mailingTypeId')}
          optionText='title'
          defaultValue={null}
          parse={val => val || null}
        />
      </ReferenceInput>
      <NumberInput
        fullWidth
        sx={{m: 1}}
        source='priority'
        label={translate('catalogs.mailingCampaigns.fields.priority')}
      />
    </Filter>
  );
};

export default DefaultMailingCampaignFilter;
