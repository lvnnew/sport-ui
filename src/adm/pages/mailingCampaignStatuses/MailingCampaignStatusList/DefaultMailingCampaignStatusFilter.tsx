import React, {FC} from 'react';
import {
  Filter,
  TextInput,
} from 'react-admin';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultMailingCampaignStatusFilter: FC<any> = (props) => {
  return (
    <Filter {...props}>
      <TextInput
        label='catalogs.mailingCampaignStatuses.fields.search'
        source='q'
        alwaysOn
        sx={{m: 1}}
      />
      <TextInput
        fullWidth
        sx={{m: 1}}
        source='title'
        defaultValue={null}
        label='catalogs.mailingCampaignStatuses.fields.title'
      />
    </Filter>
  );
};

export default DefaultMailingCampaignStatusFilter;
