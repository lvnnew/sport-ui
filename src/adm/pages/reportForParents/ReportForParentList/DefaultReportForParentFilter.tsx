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

const DefaultReportForParentFilter: FC<any> = (props) => {
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
        label='catalogs.reportForParents.fields.title'
      />
      <ReferenceInput
        source='playerId'
        reference='players'
        sort={{field: 'id', order: 'DESC'}}
        perPage={100}
        label='catalogs.reportForParents.fields.playerId'
      >
        <AutocompleteInput
          fullWidth
          sx={{m: '8px 8px 6px'}}
          size='small'
          label='catalogs.reportForParents.fields.playerId'
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
        label='catalogs.reportForParents.fields.matchId'
      >
        <AutocompleteInput
          fullWidth
          sx={{m: '8px 8px 6px'}}
          size='small'
          label='catalogs.reportForParents.fields.matchId'
          defaultValue={null}
          parse={val => val || null}
          noOptionsText='ra.message.noOptions'
        />
      </ReferenceInput>
      <ReferenceInput
        source='parentId'
        reference='parents'
        sort={{field: 'id', order: 'DESC'}}
        perPage={100}
        label='catalogs.reportForParents.fields.parentId'
      >
        <AutocompleteInput
          fullWidth
          sx={{m: '8px 8px 6px'}}
          size='small'
          label='catalogs.reportForParents.fields.parentId'
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
        label='catalogs.reportForParents.fields.lastUpdated'
      />
      <BooleanInput
        fullWidth
        sx={{m: 1}}
        source='paid'
        defaultValue={null}
        label='catalogs.reportForParents.fields.paid'
      />
    </Filter>
  );
};

export default DefaultReportForParentFilter;
