import React, {FC} from 'react';
import {
  Filter,
  TextInput,
} from 'react-admin';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultTemplateStyleFilter: FC<any> = (props) => {
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
        label='catalogs.templateStyles.fields.title'
      />
      <TextInput
        fullWidth
        sx={{m: 1}}
        source='style'
        label='catalogs.templateStyles.fields.style'
      />
    </Filter>
  );
};

export default DefaultTemplateStyleFilter;
