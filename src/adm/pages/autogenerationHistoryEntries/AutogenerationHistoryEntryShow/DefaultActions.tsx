import React from 'react';
import {
  EditButton,
  TopToolbar,
  usePermissions,
} from 'react-admin';
import {hasPermission} from '../../../../utils/permissions';
import OpenAudit from '../../../commonActions/OpenAudit';
import OpenHelp from '../../../commonActions/OpenHelp';
import {makeStyles, createStyles} from '@material-ui/core/styles';

// DO NOT EDIT! THIS IS GENERATED FILE

const useStyles = makeStyles(() => createStyles({
  toolbar: {alignItems: 'center'},
}));

const DefaultAutogenerationHistoryEntryActions = ({basePath, data}: any) => {
  const {permissions} = usePermissions<string[]>();
  const classes = useStyles();

  return data ? (
    <TopToolbar className={classes.toolbar}>
      {hasPermission(permissions, 'auditLogs.all') && (
        <OpenAudit entityTypeId='autogenerationHistoryEntry' />
      )}
      {hasPermission(permissions, 'help.getHelp') && (
        <OpenHelp entityType='autogenerationHistoryEntries' />)}
      <EditButton basePath={basePath} record={data} />
    </TopToolbar>
  ) : null;
};

export default DefaultAutogenerationHistoryEntryActions;
