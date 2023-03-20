import React, {FC} from 'react';
import {
  Filter,
  TextInput,
  ReferenceInput,
  AutocompleteInput,
  NumberInput,
} from 'react-admin';
import DateInput from '../../../../uiLib/DateInput';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultMailingCampaignFilter: FC<any> = (props) => {
  return (
    <Filter {...props}>
      <TextInput
        label='ra.action.search'
        source='q'
        alwaysOn
        sx={{m: 1}}
      />
      <TextInput
        fullWidth
        sx={{m: 1}}
        source='title'
        label='catalogs.mailingCampaigns.fields.title'
      />
      <ReferenceInput
        source='mailingTypeId'
        reference='mailingTypes'
        sort={{field: 'id', order: 'DESC'}}
        label='catalogs.mailingCampaigns.fields.mailingTypeId'
      >
        <AutocompleteInput
          fullWidth
          sx={{m: 1}}
          size='small'
          label='catalogs.mailingCampaigns.fields.mailingTypeId'
          defaultValue={null}
          parse={val => val || null}
          noOptionsText='ra.message.noOptions'
        />
      </ReferenceInput>
      <NumberInput
        fullWidth
        sx={{m: 1}}
        source='priority'
        label='catalogs.mailingCampaigns.fields.priority'
      />
      <DateInput
        fullWidth
        sx={{m: 1}}
        source='date'
        defaultValue={null}
        label='catalogs.mailingCampaigns.fields.date'
      />
      <ReferenceInput
        source='mailingCampaignStatusId'
        reference='mailingCampaignStatuses'
        sort={{field: 'id', order: 'DESC'}}
        label='catalogs.mailingCampaigns.fields.mailingCampaignStatusId'
      >
        <AutocompleteInput
          fullWidth
          sx={{m: 1}}
          size='small'
          label='catalogs.mailingCampaigns.fields.mailingCampaignStatusId'
          defaultValue={null}
          parse={val => val || null}
          noOptionsText='ra.message.noOptions'
        />
      </ReferenceInput>
      <ReferenceInput
        source='messageTemplateId'
        reference='messageTemplates'
        sort={{field: 'id', order: 'DESC'}}
        label='catalogs.mailingCampaigns.fields.messageTemplateId'
      >
        <AutocompleteInput
          fullWidth
          sx={{m: 1}}
          size='small'
          label='catalogs.mailingCampaigns.fields.messageTemplateId'
          defaultValue={null}
          parse={val => val || null}
          noOptionsText='ra.message.noOptions'
        />
      </ReferenceInput>
    </Filter>
  );
};

export default DefaultMailingCampaignFilter;
