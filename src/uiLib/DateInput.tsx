import dayjs from 'dayjs';
import * as React from 'react';
import {DateInput as RaDateInput, DateInputProps} from 'react-admin';
import log from '../utils/log';

const format = (value: string | Date) => {
  if (value === null || value === '') {
    return '';
  }

  log.info(`value: ${value}`);

  return value;
};

// const DateInput = RaDateInput;
// DateInput.defaultProps = {
//   format,
// };

const DateInput = (props: DateInputProps) => (
  <RaDateInput
    format={format}
    inputProps={{
      max: dayjs().format('9999-12-31'),
    }}
    {...props}
  />
);

export default DateInput;
