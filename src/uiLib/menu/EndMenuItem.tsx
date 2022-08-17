import React, {FC} from 'react';
import {MenuItemLink, usePermissions, useTranslate} from 'react-admin';
import {useDebug} from '../../contexts/DebugContext';
import * as Icons from '@mui/icons-material';
import {makeStyles, createStyles} from '@mui/styles';
import {IconByName} from '../IconByName';
import {hasAllPermissions} from '../../utils/permissions';

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

const useStyles = makeStyles(() => createStyles({
  label: {
    textOverflow: 'ellipsis',
    overflow: 'hidden',
  },
}));

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
  const classes = useStyles();
  const t = useTranslate();

  return (debug || !debugOnly) && (!permissions || hasAllPermissions(currentPermissions, permissions)) ? <MenuItemLink
    dense={dense}
    leftIcon={<IconByName name={icon} />}
    onClick={onClick}
    primaryText={<div className={classes.label}>{t(label)}</div>}
    sidebarIsOpen={open}
    to={link}
  /> : null;
};

export default EndMenuItem;

