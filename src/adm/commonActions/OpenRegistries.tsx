import React, {FC} from 'react';
import {Button, Menu, MenuItem} from '@mui/material';
import {
  useRecordContext,
  usePermissions,
  Link,
} from 'react-admin';
import {hasPermission, hasAnyPermission} from '../../utils/permissions';
import PopupState, {bindTrigger, bindMenu} from 'material-ui-popup-state';

interface OpenRegistriesProps {
  registries: string[];
}

const OpenRegistries: FC<OpenRegistriesProps> = ({registries}) => {
  const record = useRecordContext();
  const {permissions} = usePermissions<string[]>();

  if (!record || !hasAnyPermission(permissions, registries.map(r => `${r}.all`))) {
    return null;
  }

  return (
    <PopupState variant='popover'>
      {(popupState) => (
        <>
          <Button
            color='primary'
            size='small'
            {...bindTrigger(popupState)}
          >
            Registries
          </Button>
          <Menu {...bindMenu(popupState)}>
            {registries.filter(r => hasPermission(permissions, `${r}.all`)).map(r => (
              <Link
                key={r}
                to={
                  '/milesRegistryEntries?filter=%7B"registrarId"%3A' +
                      record.id +
                      '%2C"registrarTypeId"%3A%22autoMilesForCashierDocument%22%7D&'
                }
              >
                <MenuItem>{r}</MenuItem>
              </Link>
            ))}
          </Menu>
        </>
      )}
    </PopupState>
  );
};

export default OpenRegistries;
