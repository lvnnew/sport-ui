import React, {FC} from 'react';
import {MenuItemLink, useTranslate} from 'react-admin';
import {useDebug} from '../../contexts/DebugContext';
import * as Icons from '@material-ui/icons';
import {IconByName} from '../IconByName';

export interface EndMenuElement {
  label: string;
  link: string;
  icon: keyof typeof Icons;
  debugOnly: boolean;
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
}) => {
  const translate = useTranslate();
  const {debug} = useDebug();

  return debug || !debugOnly ? <MenuItemLink
    dense={dense}
    leftIcon={<IconByName name={icon} />}
    onClick={onClick}
    primaryText={translate(label)}
    sidebarIsOpen={open}
    to={link}
  /> : null;
};

export default EndMenuItem;

