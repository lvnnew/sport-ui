import React, {FC} from 'react';
import {
  Filter,
  TextInput,
  NumberInput,
  useTranslate,
} from 'react-admin';
import DateTimeInput from '../../../../uiLib/DateTimeInput';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultStatFilter: FC<any> = (props) => {
  const translate = useTranslate();

  return (
    <Filter {...props}>
      <TextInput
        label={translate('catalogs.stats.fields.search')}
        source='q'
        alwaysOn
      />
      <DateTimeInput
        fullWidth
        source='updated'
        label={translate('catalogs.stats.fields.updated')}
      />
      <NumberInput
        fullWidth
        source='helloCount'
        defaultValue={null}
        label={translate('catalogs.stats.fields.helloCount')}
      />
    </Filter>
  );
};

export default DefaultStatFilter;
