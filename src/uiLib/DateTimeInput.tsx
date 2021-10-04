/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable unicorn/no-nested-ternary */
import * as React from 'react';
import {DateTimeInput as RaDateTimeInput, DateTimeInputProps} from 'react-admin';
import {log} from '../utils/log';

const parse = (value: string) => {
  log.info('!!!!!!!!!!!!!!!!!!!!! parse');
  log.info(value);
  log.info(`typeof: ${typeof value}`);
  log.info(`value: ${value}`);
  log.info(`stringify: ${JSON.stringify(value)}`);
  log.info(`stringify new Date(value): ${JSON.stringify(new Date(value))}`);

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
