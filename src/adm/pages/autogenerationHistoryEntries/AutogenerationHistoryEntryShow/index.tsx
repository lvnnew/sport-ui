/* eslint-disable max-len */
import React, {FC} from 'react';
import {
  ShowProps,
} from 'react-admin';
import DefaultAutogenerationHistoryEntryShow from './DefaultAutogenerationHistoryEntryShow';

const AutogenerationHistoryEntryShow: FC<ShowProps> = (props: ShowProps) => (
  <DefaultAutogenerationHistoryEntryShow {...props} />
);

export default AutogenerationHistoryEntryShow;
