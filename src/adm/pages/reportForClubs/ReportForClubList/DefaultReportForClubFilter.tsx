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

const DefaultReportForClubFilter: FC<any> = (props) => {
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
        label='catalogs.reportForClubs.fields.title'
      />
      <ReferenceInput
        source='teamId'
        reference='teams'
        sort={{field: 'id', order: 'DESC'}}
        perPage={100}
        label='catalogs.reportForClubs.fields.teamId'
      >
        <AutocompleteInput
          fullWidth
          sx={{m: '8px 8px 6px'}}
          size='small'
          label='catalogs.reportForClubs.fields.teamId'
          defaultValue={null}
          parse={val => val || null}
          noOptionsText='ra.message.noOptions'
        />
      </ReferenceInput>
      <ReferenceInput
        source='competitionId'
        reference='competitions'
        sort={{field: 'id', order: 'DESC'}}
        perPage={100}
        label='catalogs.reportForClubs.fields.competitionId'
      >
        <AutocompleteInput
          fullWidth
          sx={{m: '8px 8px 6px'}}
          size='small'
          label='catalogs.reportForClubs.fields.competitionId'
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
        label='catalogs.reportForClubs.fields.clubId'
      >
        <AutocompleteInput
          fullWidth
          sx={{m: '8px 8px 6px'}}
          size='small'
          label='catalogs.reportForClubs.fields.clubId'
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
        label='catalogs.reportForClubs.fields.lastUpdated'
      />
      <BooleanInput
        fullWidth
        sx={{m: 1}}
        source='paid'
        defaultValue={null}
        label='catalogs.reportForClubs.fields.paid'
      />
    </Filter>
  );
};

export default DefaultReportForClubFilter;
