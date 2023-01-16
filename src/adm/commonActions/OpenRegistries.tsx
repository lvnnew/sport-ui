import React, {FC} from 'react';
import {Button, Menu, MenuItem} from '@mui/material';
import {
  useRecordContext,
  usePermissions,
  Link,
  useTranslate,
} from 'react-admin';
import {hasPermission, hasAnyPermission} from '../../utils/permissions';
import PopupState, {bindTrigger, bindMenu} from 'material-ui-popup-state';

interface OpenRegistriesProps {
  document: string;
  registries: {name: string; type: 'sumRegistry' | 'infoRegistry'}[];
}

const OpenRegistries: FC<OpenRegistriesProps> = ({document, registries}) => {
  const record = useRecordContext();
  const {permissions} = usePermissions<string[]>();
  const t = useTranslate();

  if (!record || !hasAnyPermission(permissions, registries.map(r => `${r.name}.all`))) {
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
            {registries.filter(r => hasPermission(permissions, `${r.name}.all`)).map(r => (
              <Link
                key={r.name}
                to={
                  `/${r.name}?filter=%7B"registrarId"%3A${record.id}%2C"registrarTypeId"%3A%22${document}%22%7D&`
                }
              >
                <MenuItem>
                  {r.type === 'sumRegistry' ?
                    t(`sumRegistries.${r.name}.title.plural`) :
                    t(`infoRegistries.${r.name}.title.plural`)}
                </MenuItem>
              </Link>
            ))}
          </Menu>
        </>
      )}
    </PopupState>
  );
};

export default OpenRegistries;
