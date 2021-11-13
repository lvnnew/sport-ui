import * as React from 'react';
import {DateInput as RaDateInput, DateInputProps} from 'react-admin';

const format = (value: string | Date) => {
  if (value === null || value === '') {
    return '';
  }

  return value;
};

const DateInput = (props: DateInputProps) => (
  <RaDateInput {...{
    format,
    ...props,
  }} />
);

export default DateInput;
