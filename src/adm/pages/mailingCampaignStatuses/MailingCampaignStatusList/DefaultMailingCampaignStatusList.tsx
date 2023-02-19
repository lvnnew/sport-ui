/* eslint-disable max-len */
import React, {FC} from 'react';
import {
  List,
  Datagrid,
  ListProps,
  BulkActionProps,
  usePermissions,
  BulkDeleteButton,
  TextField,
} from 'react-admin';
import MailingCampaignStatusFilter from './MailingCampaignStatusFilter';
import {hasPermission} from '../../../../utils/permissions';
import ListActions from '../../../../raUiLib/ListActions';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultBulkActionButton = (props: BulkActionProps) => {
  const {permissions} = usePermissions<string[]>();

  return (
    <>
      {hasPermission(permissions, 'mailingCampaignStatuses.delete') && <BulkDeleteButton {...props} />}
    </>
  );
};

const DefaultMailingCampaignStatusList: FC<ListProps> = (props: ListProps) => {
  return (
    <List
      title='catalogs.mailingCampaignStatuses.title.plural'
      filters={<MailingCampaignStatusFilter />}
      actions={<ListActions />}
      bulkActionButtons={<DefaultBulkActionButton />}
      sort={{field: 'id', order: 'desc'}}
      {...props}
    >
      <Datagrid rowClick='show'>
        <TextField source='id' label='catalogs.mailingCampaignStatuses.fields.id' />
        <TextField source='title' label='catalogs.mailingCampaignStatuses.fields.title' />
      </Datagrid>
    </List>
  );
};

export default DefaultMailingCampaignStatusList;
