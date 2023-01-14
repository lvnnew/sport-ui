import React, {FC} from 'react';
import {
  Filter,
  TextInput,
  NumberInput,
} from 'react-admin';
import DateTimeInput from '../../../../uiLib/DateTimeInput';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultStatFilter: FC<any> = (props) => {
  return (
    <Filter {...props}>
      <TextInput
        label='catalogs.stats.fields.search'
        source='q'
        alwaysOn
        sx={{m: 1}}
      />
      <DateTimeInput
        fullWidth
        sx={{m: 1}}
        source='updated'
        defaultValue={null}
        label='catalogs.stats.fields.updated'
      />
      <NumberInput
        fullWidth
        sx={{m: 1}}
        source='helloCount'
        defaultValue={null}
        label='catalogs.stats.fields.helloCount'
      />
    </Filter>
  );
};

export default DefaultStatFilter;
