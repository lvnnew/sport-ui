import React, {FC} from 'react';
import {
  Filter,
  TextInput,
  ReferenceInput,
  AutocompleteInput,
  BooleanInput,
} from 'react-admin';
import DateInput from '../../../../uiLib/DateInput';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultReportForOrganizationFilter: FC<any> = (props) => {
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
        label='catalogs.reportForOrganizations.fields.title'
      />
      <ReferenceInput
        source='competitionId'
        reference='competitions'
        sort={{field: 'id', order: 'DESC'}}
        perPage={100}
        label='catalogs.reportForOrganizations.fields.competitionId'
      >
        <AutocompleteInput
          fullWidth
          sx={{m: '8px 8px 6px'}}
          size='small'
          label='catalogs.reportForOrganizations.fields.competitionId'
          defaultValue={null}
          parse={val => val || null}
          noOptionsText='ra.message.noOptions'
        />
      </ReferenceInput>
      <ReferenceInput
        source='organizatorId'
        reference='organizators'
        sort={{field: 'id', order: 'DESC'}}
        perPage={100}
        label='catalogs.reportForOrganizations.fields.organizatorId'
      >
        <AutocompleteInput
          fullWidth
          sx={{m: '8px 8px 6px'}}
          size='small'
          label='catalogs.reportForOrganizations.fields.organizatorId'
          defaultValue={null}
          parse={val => val || null}
          noOptionsText='ra.message.noOptions'
        />
      </ReferenceInput>
      <DateInput
        fullWidth
        sx={{m: 1}}
        source='lastUpdated'
        defaultValue={null}
        label='catalogs.reportForOrganizations.fields.lastUpdated'
      />
      <BooleanInput
        fullWidth
        sx={{m: 1}}
        source='paid'
        defaultValue={null}
        label='catalogs.reportForOrganizations.fields.paid'
      />
    </Filter>
  );
};

export default DefaultReportForOrganizationFilter;
