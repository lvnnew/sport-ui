import React, {FC} from 'react';
import {MenuItemLink, usePermissions, useTranslate} from 'react-admin';
import {useDebug} from '../../contexts/DebugContext';
import * as Icons from '@mui/icons-material';
import {IconByName} from '../IconByName';
import {hasAllPermissions} from '../../utils/permissions';
import {Tooltip} from '@mui/material';

export interface EndMenuElement {
  label: string;
  link: string;
  icon: keyof typeof Icons;
  debugOnly: boolean;
  permissions?: string[];
}

export type EndMenuItemProps = EndMenuElement & {
  dense: boolean;
  open: boolean;
  onClick: () => void;
}

// const useStyles = makeStyles(() => createStyles({
//   label: {
//     textOverflow: 'ellipsis',
//     overflow: 'hidden',
//   },
// }));

const EndMenuItem: FC<EndMenuItemProps> = ({
  label,
  link,
  icon,
  debugOnly,
  dense,
  open,
  onClick,
  permissions,
}) => {
  const {debug} = useDebug();
  const {permissions: currentPermissions} = usePermissions<string[]>();
  // const classes = useStyles();
  const t = useTranslate();

  return (debug || !debugOnly) && (!permissions || hasAllPermissions(currentPermissions, permissions)) ?
    <Tooltip
      title={t(label)}
      placement='right'
    >
      <MenuItemLink
        dense={dense}
        leftIcon={<IconByName name={icon} />}
        onClick={onClick}
        primaryText={t(label)}
        sidebarIsOpen={open}
        to={link}
      />
    </Tooltip> :
    null;
};

export default EndMenuItem;

