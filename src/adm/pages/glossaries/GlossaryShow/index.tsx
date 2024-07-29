/* eslint-disable max-len */
import React, {FC} from 'react';
import {
  ShowProps,
} from 'react-admin';
import DefaultGlossaryShow from './DefaultGlossaryShow';

const GlossaryShow: FC<ShowProps> = (props: ShowProps) => (
  <DefaultGlossaryShow {...props} />
);

export default GlossaryShow;
