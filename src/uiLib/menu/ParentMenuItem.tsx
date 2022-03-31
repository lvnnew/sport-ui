import React, {useState, FC} from 'react';
import {useTranslate} from 'react-admin';
import {useDebug} from '../../contexts/DebugContext';
import * as Icons from '@material-ui/icons';
import SubMenu from '../../layout/SubMenu';
import {IconByName} from '../IconByName';
import MenuItem, {MenuElement} from './MenuItem';

export interface ParentMenuElement {
  label: string;
  icon: keyof typeof Icons;
  debugOnly: boolean;
  children: MenuElement[];
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
  const [open, setOpen] = useState(false);

  const handleToggle = () => {
    setOpen(open => !open);
  };

  return debug && debugOnly ?
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
