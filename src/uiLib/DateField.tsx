import * as React from 'react';
import {DateField as RaDateField, DateFieldProps, useLocale} from 'react-admin';

const DateField = (props: DateFieldProps) => {
  const locale = useLocale();
  return (<RaDateField
    locales={locale}
    {...props}
  />);
};

export default DateField;
