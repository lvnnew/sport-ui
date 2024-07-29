import React, {FC} from 'react';
import {
  Filter,
  TextInput,
  ReferenceInput,
  AutocompleteInput,
  BooleanInput,
} from 'react-admin';
import DateTimeInput from '../../../../uiLib/DateTimeInput';
import DateInput from '../../../../uiLib/DateInput';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultTeamMatchReportFilter: FC<any> = (props) => {
  return (
    <Filter {...props}>
      <TextInput
        label='ra.action.search'
        source='q'
        alwaysOn
        sx={{m: 1}}
      />
      <DateTimeInput
        fullWidth
        sx={{m: 1}}
        source='created'
        label='catalogs.teamMatchReports.fields.created'
      />
      <ReferenceInput
        source='matchId'
        reference='matches'
        sort={{field: 'id', order: 'DESC'}}
        perPage={100}
        label='catalogs.teamMatchReports.fields.matchId'
      >
        <AutocompleteInput
          fullWidth
          sx={{m: '8px 8px 6px'}}
          size='small'
          label='catalogs.teamMatchReports.fields.matchId'
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
        label='catalogs.teamMatchReports.fields.lastUpdated'
      />
      <ReferenceInput
        source='fileId'
        reference='files'
        sort={{field: 'id', order: 'DESC'}}
        perPage={100}
        label='catalogs.teamMatchReports.fields.fileId'
      >
        <AutocompleteInput
          fullWidth
          sx={{m: '8px 8px 6px'}}
          size='small'
          label='catalogs.teamMatchReports.fields.fileId'
          defaultValue={null}
          parse={val => val || null}
          noOptionsText='ra.message.noOptions'
        />
      </ReferenceInput>
      <BooleanInput
        fullWidth
        sx={{m: 1}}
        source='needRecalculate'
        defaultValue={null}
        label='catalogs.teamMatchReports.fields.needRecalculate'
      />
    </Filter>
  );
};

export default DefaultTeamMatchReportFilter;
