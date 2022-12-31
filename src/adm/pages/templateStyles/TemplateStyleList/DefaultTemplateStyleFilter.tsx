import React, {FC} from 'react';
import {
  Filter,
  TextInput,
  useTranslate,
} from 'react-admin';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultTemplateStyleFilter: FC<any> = (props) => {
  const translate = useTranslate();

  return (
    <Filter {...props}>
      <TextInput
        label={translate('catalogs.templateStyles.fields.search')}
        source='q'
        alwaysOn
        sx={{m: 1}}
      />
      <TextInput
        fullWidth
        sx={{m: 1}}
        source='title'
        required
        label={translate('catalogs.templateStyles.fields.title')}
      />
      <TextInput
        fullWidth
        sx={{m: 1}}
        source='style'
        required
        label={translate('catalogs.templateStyles.fields.style')}
      />
    </Filter>
  );
};

export default DefaultTemplateStyleFilter;
