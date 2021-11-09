import React, {FC} from 'react';
import {
  ListProps,
} from 'react-admin';
import DefaultAutogenerationHistoryEntryList from './DefaultAutogenerationHistoryEntryList';

const AutogenerationHistoryEntryList: FC<ListProps> = (props: ListProps) => (
  <DefaultAutogenerationHistoryEntryList {...props} />
);

export default AutogenerationHistoryEntryList;
