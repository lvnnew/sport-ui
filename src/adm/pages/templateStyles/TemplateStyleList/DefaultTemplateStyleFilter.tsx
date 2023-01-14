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
        label='catalogs.templateStyles.fields.search'
        source='q'
        alwaysOn
        sx={{m: 1}}
      />
      <TextInput
        fullWidth
        sx={{m: 1}}
        source='title'
        defaultValue={null}
        label='catalogs.templateStyles.fields.title'
      />
      <TextInput
        fullWidth
        sx={{m: 1}}
        source='style'
        defaultValue={null}
        label='catalogs.templateStyles.fields.style'
      />
    </Filter>
  );
};

export default DefaultTemplateStyleFilter;
