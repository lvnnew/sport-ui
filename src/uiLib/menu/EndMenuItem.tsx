import React, {FC} from 'react';
import {MenuItemLink, usePermissions, useTranslate} from 'react-admin';
import {useDebug} from '../../contexts/DebugContext';
import * as Icons from '@material-ui/icons';
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
  const translate = useTranslate();
  const {debug} = useDebug();
  const {permissions: currentPermissions} = usePermissions<string[]>();

  return (debug || !debugOnly) && (!permissions || hasAllPermissions(currentPermissions, permissions)) ? <MenuItemLink
    dense={dense}
    leftIcon={<IconByName name={icon} />}
    onClick={onClick}
    primaryText={translate(label)}
    sidebarIsOpen={open}
    to={link}
  /> : null;
};

export default EndMenuItem;

