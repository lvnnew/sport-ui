import React from 'react';
import {
  TopToolbar,
  EditButton,
  usePermissions,
  useRecordContext,
} from 'react-admin';
import {makeStyles, createStyles} from '@mui/styles';
import {hasPermission, hasAnyPermission} from '../../../../../utils/permissions';
import OpenAudit from '../../../../commonActions/OpenAudit';
import OpenHelp from '../../../../commonActions/OpenHelp';
import DeactivateManagerButton from './DeactivateManagerButton';
import ChangeManagerPasswordButton from './ChangeManagerPasswordButton';

const useStyles = makeStyles(() => createStyles({
  toolbar: {alignItems: 'center'},
}));

const Actions = () => {
  const {permissions} = usePermissions<string[]>();
  const classes = useStyles();
  const record = useRecordContext();

  if (!record) {
    return null;
  }

  return (
    <TopToolbar className={classes.toolbar}>
      {record.active && hasPermission(permissions, 'managers.deactivateManagers') &&
        <DeactivateManagerButton managerIds={[record.id as number]} />}
      {hasPermission(permissions, 'managers.changePassword') &&
        <ChangeManagerPasswordButton />}
      {hasAnyPermission(permissions, ['auditLogs.all', 'help.getHelp']) && (
        <>
          <OpenAudit entityTypeId='manager' />
          <OpenHelp entityType='managers' />
        </>
      )}
      {
        hasPermission(permissions, 'managers.update') &&
        <EditButton />
      }
    </TopToolbar>
  );
};

export default Actions;
