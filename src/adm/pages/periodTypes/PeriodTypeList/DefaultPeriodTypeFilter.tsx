import React, {FC} from 'react';
import {
  Filter,
  TextInput,
  NumberInput,
} from 'react-admin';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultPeriodTypeFilter: FC<any> = (props) => {
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
        label='catalogs.periodTypes.fields.title'
      />
      <NumberInput
        fullWidth
        sx={{m: 1}}
        source='order'
        label='catalogs.periodTypes.fields.order'
      />
    </Filter>
  );
};

export default DefaultPeriodTypeFilter;
