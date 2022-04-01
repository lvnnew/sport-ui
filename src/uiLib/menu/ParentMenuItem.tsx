import React, {useState, useMemo, FC} from 'react';
import {usePermissions, useTranslate} from 'react-admin';
import {useDebug} from '../../contexts/DebugContext';
import * as Icons from '@material-ui/icons';
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
  open: boolean;
  onClick: () => void;
}

const ParentMenuItem: FC<ParentMenuItemProps> = ({
  label,
  icon,
  debugOnly,
  children,
  dense,
  onClick,
}) => {
  const translate = useTranslate();
  const {debug} = useDebug();
  const {permissions: currentPermissions} = usePermissions<string[]>();
  const [open, setOpen] = useState(false);

  const handleToggle = () => {
    setOpen(open => !open);
  };

  const requiredPermissions = useMemo(
    () =>
      children.reduce((prev, cur) => (cur.permissions ? prev.concat(...cur.permissions) : prev), [] as string[]),
    [children],
  );

  return (debug || !debugOnly) && hasAnyPermission(currentPermissions, requiredPermissions) ?
    <SubMenu
      dense={dense}
      handleToggle={() => handleToggle()}
      icon={<IconByName name={icon} />}
      isOpen={open}
      name={translate(label)}
      sidebarIsOpen={open}
    >
      {children.map((d, i) => (<MenuItem
        key={i}
        {...d}
        dense={dense}
        open={open}
        onClick={onClick}
      />))}
    </SubMenu> : null;
};

export default ParentMenuItem;
