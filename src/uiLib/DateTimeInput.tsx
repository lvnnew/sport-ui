import * as React from 'react';
import {DateTimeInput as RaDateTimeInput, DateTimeInputProps} from 'react-admin';

const parse = (value: string) => {
  if (!value) {
    return value;
  }

  return new Date(value);
};

const DateTimeInput = (props: DateTimeInputProps) => (
  <RaDateTimeInput {...{
    parse,
    ...props,
  }} />
);

export default DateTimeInput;
