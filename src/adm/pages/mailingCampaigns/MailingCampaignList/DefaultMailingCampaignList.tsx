/* eslint-disable max-len */
import React, {FC} from 'react';
import {
  List,
  Datagrid,
  ListProps,
  BulkActionProps,
  usePermissions,
  BulkDeleteButton,
  NumberField,
  TextField,
  ReferenceField,
  useTranslate,
} from 'react-admin';
import DateField from '../../../../uiLib/DateField';
import MailingCampaignFilter from './MailingCampaignFilter';
import {hasPermission} from '../../../../utils/permissions';

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
  const translate = useTranslate();

  return (
    <List
      title={translate('catalogs.mailingCampaigns.title.plural')}
      exporter={false}
      filters={<MailingCampaignFilter />}
      bulkActionButtons={<DefaultBulkActionButton />}
      sort={{field: 'id', order: 'desc'}}
      {...props}
    >
      <Datagrid rowClick='show'>
        <NumberField source='id' label={translate('catalogs.mailingCampaigns.fields.id')} />
        <TextField source='title' label={translate('catalogs.mailingCampaigns.fields.title')} />
        <ReferenceField source='mailingTypeId' label={translate('catalogs.mailingCampaigns.fields.mailingTypeId')} reference='mailingTypes' link='show' />
        <NumberField source='priority' label={translate('catalogs.mailingCampaigns.fields.priority')} />
        <DateField source='date' label={translate('catalogs.mailingCampaigns.fields.date')} />
        <ReferenceField source='mailingCampaignStatusId' label={translate('catalogs.mailingCampaigns.fields.mailingCampaignStatusId')} reference='mailingCampaignStatuses' link='show' />
        <ReferenceField source='messageTemplateId' label={translate('catalogs.mailingCampaigns.fields.messageTemplateId')} reference='messageTemplates' link='show' />
      </Datagrid>
    </List>
  );
};

export default DefaultMailingCampaignList;
