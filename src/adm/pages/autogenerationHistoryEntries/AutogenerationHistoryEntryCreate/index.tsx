import React, {FC} from 'react';
import {
  CreateProps,
} from 'react-admin';
import DefaultAutogenerationHistoryEntryCreate from './DefaultAutogenerationHistoryEntryCreate';

const AutogenerationHistoryEntryCreate: FC<CreateProps> = (props: CreateProps) => (
  <DefaultAutogenerationHistoryEntryCreate {...props} />
);

export default AutogenerationHistoryEntryCreate;
