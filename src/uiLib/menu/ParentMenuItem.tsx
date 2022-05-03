import React, {useMemo, FC} from 'react';
import {usePermissions, useTranslate} from 'react-admin';
import {useDebug} from '../../contexts/DebugContext';
import * as Icons from '@mui/icons-material';
import SubMenu from '../../layout/SubMenu';
import {IconByName} from '../IconByName';
import MenuItem, {MenuElement} from './MenuItem';
import {hasAnyPermission} from '../../utils/permissions';

export interface ParentMenuElement {
  label: string;
  icon: keyof typeof Icons;
  debugOnly: boolean;
  children: MenuElement[];
  permissions?: string[];
}

export type ParentMenuItemProps = ParentMenuElement & {
  dense: boolean;
}

const ParentMenuItem: FC<ParentMenuItemProps> = ({
  label,
  icon,
  debugOnly,
  children,
  dense,
}) => {
  const translate = useTranslate();
  const {debug} = useDebug();
  const {permissions: currentPermissions} = usePermissions<string[]>();

  const requiredPermissions = useMemo(
    () =>
      children.reduce((prev, cur) => (cur.permissions ? prev.concat(...cur.permissions) : prev), [] as string[]),
    [children],
  );

  return (debug || !debugOnly) && hasAnyPermission(currentPermissions, requiredPermissions) ?
    <SubMenu
      dense={dense}
      icon={<IconByName name={icon} />}
      name={translate(label)}
    >
      {children.map((d, i) => (<MenuItem
        key={i}
        {...d}
        dense={dense}
      />))}
    </SubMenu> : null;
};

export default ParentMenuItem;
