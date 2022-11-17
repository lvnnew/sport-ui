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
  useTranslate,
} from 'react-admin';
import MailingCampaignStatusFilter from './MailingCampaignStatusFilter';
import {hasPermission} from '../../../../utils/permissions';

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
  const translate = useTranslate();

  return (
    <List
      title={translate('catalogs.mailingCampaignStatuses.title')}
      exporter={false}
      filters={<MailingCampaignStatusFilter />}
      bulkActionButtons={<DefaultBulkActionButton />}
      sort={{field: 'id', order: 'desc'}}
      {...props}
    >
      <Datagrid rowClick='show'>
        <TextField source='id' label={translate('catalogs.mailingCampaignStatuses.fields.id')} />
        <TextField source='title' label={translate('catalogs.mailingCampaignStatuses.fields.title')} />
      </Datagrid>
    </List>
  );
};

export default DefaultMailingCampaignStatusList;
