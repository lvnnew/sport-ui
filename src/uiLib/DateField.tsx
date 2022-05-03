import * as React from 'react';
import {DateField as RaDateField, DateFieldProps, useLocaleState} from 'react-admin';

const DateField = (props: DateFieldProps) => {
  const [locale] = useLocaleState();
  return (
    <RaDateField
      locales={locale}
      {...props}
    />
  );
};

export default DateField;
