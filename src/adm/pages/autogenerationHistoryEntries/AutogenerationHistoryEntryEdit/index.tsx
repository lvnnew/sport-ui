import React, {FC} from 'react';
import {
  EditProps,
} from 'react-admin';
import DefaultAutogenerationHistoryEntryEdit from './DefaultAutogenerationHistoryEntryEdit';

const AutogenerationHistoryEntryEdit: FC<EditProps> = (props: EditProps) => (
  <DefaultAutogenerationHistoryEntryEdit {...props} />
);

export default AutogenerationHistoryEntryEdit;
