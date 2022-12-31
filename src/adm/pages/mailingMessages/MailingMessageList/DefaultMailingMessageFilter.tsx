import React, {FC} from 'react';
import {
  Filter,
  TextInput,
  ReferenceInput,
  AutocompleteInput,
  NumberInput,
  useTranslate,
} from 'react-admin';
import DateTimeInput from '../../../../uiLib/DateTimeInput';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultMailingMessageFilter: FC<any> = (props) => {
  const translate = useTranslate();

  return (
    <Filter {...props}>
      <TextInput
        label={translate('catalogs.mailingMessages.fields.search')}
        source='q'
        alwaysOn
        sx={{m: 1}}
      />
      <ReferenceInput
        source='mailingCampaignId'
        reference='mailingCampaigns'
        sort={{field: 'id', order: 'DESC'}}
        label={translate('catalogs.mailingMessages.fields.mailingCampaignId')}
      >
        <AutocompleteInput
          fullWidth
          sx={{m: 1}}
          size='small'
          label={translate('catalogs.mailingMessages.fields.mailingCampaignId')}
          optionText='title'
          defaultValue={null}
          parse={val => val || null}
          isRequired
        />
      </ReferenceInput>
      <ReferenceInput
        source='templateId'
        reference='messageTemplates'
        sort={{field: 'id', order: 'DESC'}}
        label={translate('catalogs.mailingMessages.fields.templateId')}
      >
        <AutocompleteInput
          fullWidth
          sx={{m: 1}}
          size='small'
          label={translate('catalogs.mailingMessages.fields.templateId')}
          optionText='title'
          defaultValue={null}
          parse={val => val || null}
          isRequired
        />
      </ReferenceInput>
      <ReferenceInput
        source='languageId'
        reference='languages'
        sort={{field: 'id', order: 'DESC'}}
        label={translate('catalogs.mailingMessages.fields.languageId')}
      >
        <AutocompleteInput
          fullWidth
          sx={{m: 1}}
          size='small'
          label={translate('catalogs.mailingMessages.fields.languageId')}
          optionText='title'
          defaultValue={null}
          parse={val => val || null}
          isRequired
        />
      </ReferenceInput>
      <TextInput
        fullWidth
        sx={{m: 1}}
        source='to'
        required
        label={translate('catalogs.mailingMessages.fields.to')}
      />
      <TextInput
        fullWidth
        sx={{m: 1}}
        source='locals'
        required
        label={translate('catalogs.mailingMessages.fields.locals')}
      />
      <TextInput
        fullWidth
        sx={{m: 1}}
        source='localsHash'
        required
        label={translate('catalogs.mailingMessages.fields.localsHash')}
      />
      <NumberInput
        fullWidth
        sx={{m: 1}}
        source='priority'
        required
        label={translate('catalogs.mailingMessages.fields.priority')}
      />
      <DateTimeInput
        fullWidth
        sx={{m: 1}}
        source='dateCreated'
        required
        label={translate('catalogs.mailingMessages.fields.dateCreated')}
      />
      <DateTimeInput
        fullWidth
        sx={{m: 1}}
        source='dateSent'
        defaultValue={null}
        label={translate('catalogs.mailingMessages.fields.dateSent')}
      />
      <TextInput
        fullWidth
        sx={{m: 1}}
        source='error'
        defaultValue={null}
        label={translate('catalogs.mailingMessages.fields.error')}
      />
      <TextInput
        fullWidth
        sx={{m: 1}}
        source='html'
        defaultValue={null}
        label={translate('catalogs.mailingMessages.fields.html')}
      />
      <TextInput
        fullWidth
        sx={{m: 1}}
        source='text'
        defaultValue={null}
        label={translate('catalogs.mailingMessages.fields.text')}
      />
      <TextInput
        fullWidth
        sx={{m: 1}}
        source='uniqueKey'
        defaultValue={null}
        label={translate('catalogs.mailingMessages.fields.uniqueKey')}
      />
      <TextInput
        fullWidth
        sx={{m: 1}}
        source='subject'
        defaultValue={null}
        label={translate('catalogs.mailingMessages.fields.subject')}
      />
      <ReferenceInput
        source='mailingMessageStatusId'
        reference='mailingMessageStatuses'
        sort={{field: 'id', order: 'DESC'}}
        label={translate('catalogs.mailingMessages.fields.mailingMessageStatusId')}
      >
        <AutocompleteInput
          fullWidth
          sx={{m: 1}}
          size='small'
          label={translate('catalogs.mailingMessages.fields.mailingMessageStatusId')}
          optionText='title'
          defaultValue={null}
          parse={val => val || null}
          isRequired
        />
      </ReferenceInput>
      <ReferenceInput
        source='messageTemplateLangVariantId'
        reference='messageTemplateLangVariants'
        sort={{field: 'id', order: 'DESC'}}
        label={translate('catalogs.mailingMessages.fields.messageTemplateLangVariantId')}
      >
        <AutocompleteInput
          fullWidth
          sx={{m: 1}}
          size='small'
          label={translate('catalogs.mailingMessages.fields.messageTemplateLangVariantId')}
          optionText='title'
          defaultValue={null}
          parse={val => val || null}
          isRequired
        />
      </ReferenceInput>
    </Filter>
  );
};

export default DefaultMailingMessageFilter;
