/* eslint-disable max-len */
import React, {FC} from 'react';
import {
  List,
  Datagrid,
  ListProps,
  NumberField,
  TextField,
  ReferenceField,
  BulkActionProps,
  usePermissions,
  BulkDeleteButton,
} from 'react-admin';
import DateField from '../../../../uiLib/DateField';
import MailingCampaignFilter from './MailingCampaignFilter';
import {hasPermission} from '../../../../utils/permissions';
import ListActions from '../../../../raUiLib/ListActions';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultBulkActionButton = (props: BulkActionProps) => {
  const {permissions} = usePermissions<string[]>();

  return (
    <>
      {hasPermission(permissions, 'mailingCampaigns.delete') && <BulkDeleteButton {...props} />}
    </>
  );
};

const DefaultMailingCampaignList: FC<ListProps> = (props: ListProps) => {
  return (
    <List
      title='catalogs.mailingCampaigns.title.plural'
      filters={<MailingCampaignFilter />}
      actions={<ListActions />}
      sort={{field: 'id', order: 'desc'}}
      {...props}
    >
      <Datagrid
        rowClick='show'
        bulkActionButtons={<DefaultBulkActionButton />}
      >
        <NumberField source='id' label='catalogs.mailingCampaigns.fields.id' />
        <TextField source='title' label='catalogs.mailingCampaigns.fields.title' />
        <ReferenceField source='mailingTypeId' label='catalogs.mailingCampaigns.fields.mailingTypeId' reference='mailingTypes' link='show' />
        <NumberField source='priority' label='catalogs.mailingCampaigns.fields.priority' />
        <DateField source='date' label='catalogs.mailingCampaigns.fields.date' />
        <ReferenceField source='mailingCampaignStatusId' label='catalogs.mailingCampaigns.fields.mailingCampaignStatusId' reference='mailingCampaignStatuses' link='show' />
        <ReferenceField source='messageTemplateId' label='catalogs.mailingCampaigns.fields.messageTemplateId' reference='messageTemplates' link='show' />
      </Datagrid>
    </List>
  );
};

export default DefaultMailingCampaignList;
