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

const DefaultReportForTeamFilter: FC<any> = (props) => {
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
        label='catalogs.reportForTeams.fields.created'
      />
      <TextInput
        fullWidth
        sx={{m: 1}}
        source='title'
        label='catalogs.reportForTeams.fields.title'
      />
      <ReferenceInput
        source='teamForCompetitionId'
        reference='teamForCompetitions'
        sort={{field: 'id', order: 'DESC'}}
        perPage={100}
        label='catalogs.reportForTeams.fields.teamForCompetitionId'
      >
        <AutocompleteInput
          fullWidth
          sx={{m: '8px 8px 6px'}}
          size='small'
          label='catalogs.reportForTeams.fields.teamForCompetitionId'
          defaultValue={null}
          parse={val => val || null}
          noOptionsText='ra.message.noOptions'
        />
      </ReferenceInput>
      <ReferenceInput
        source='matchId'
        reference='matches'
        sort={{field: 'id', order: 'DESC'}}
        perPage={100}
        label='catalogs.reportForTeams.fields.matchId'
      >
        <AutocompleteInput
          fullWidth
          sx={{m: '8px 8px 6px'}}
          size='small'
          label='catalogs.reportForTeams.fields.matchId'
          defaultValue={null}
          parse={val => val || null}
          noOptionsText='ra.message.noOptions'
        />
      </ReferenceInput>
      <ReferenceInput
        source='clubId'
        reference='clubs'
        sort={{field: 'id', order: 'DESC'}}
        perPage={100}
        label='catalogs.reportForTeams.fields.clubId'
      >
        <AutocompleteInput
          fullWidth
          sx={{m: '8px 8px 6px'}}
          size='small'
          label='catalogs.reportForTeams.fields.clubId'
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
        label='catalogs.reportForTeams.fields.lastUpdated'
      />
      <BooleanInput
        fullWidth
        sx={{m: 1}}
        source='paid'
        defaultValue={null}
        label='catalogs.reportForTeams.fields.paid'
      />
      <ReferenceInput
        source='fileId'
        reference='files'
        sort={{field: 'id', order: 'DESC'}}
        perPage={100}
        label='catalogs.reportForTeams.fields.fileId'
      >
        <AutocompleteInput
          fullWidth
          sx={{m: '8px 8px 6px'}}
          size='small'
          label='catalogs.reportForTeams.fields.fileId'
          defaultValue={null}
          parse={val => val || null}
          noOptionsText='ra.message.noOptions'
        />
      </ReferenceInput>
      <ReferenceInput
        source='htmlFileId'
        reference='files'
        sort={{field: 'id', order: 'DESC'}}
        perPage={100}
        label='catalogs.reportForTeams.fields.htmlFileId'
      >
        <AutocompleteInput
          fullWidth
          sx={{m: '8px 8px 6px'}}
          size='small'
          label='catalogs.reportForTeams.fields.htmlFileId'
          defaultValue={null}
          parse={val => val || null}
          noOptionsText='ra.message.noOptions'
        />
      </ReferenceInput>
      <ReferenceInput
        source='jsonFileId'
        reference='files'
        sort={{field: 'id', order: 'DESC'}}
        perPage={100}
        label='catalogs.reportForTeams.fields.jsonFileId'
      >
        <AutocompleteInput
          fullWidth
          sx={{m: '8px 8px 6px'}}
          size='small'
          label='catalogs.reportForTeams.fields.jsonFileId'
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
        label='catalogs.reportForTeams.fields.needRecalculate'
      />
    </Filter>
  );
};

export default DefaultReportForTeamFilter;
