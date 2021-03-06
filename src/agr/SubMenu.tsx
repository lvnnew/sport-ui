/* eslint-_disable_ @typescript-eslint/camelcase */
import * as React from 'react';
import {
  FC,
} from 'react';
import {
  MenuItemLink,
} from 'react-admin';
import orders from '../demo/orders';
import {AdditionalMenu} from './AdditionalMenu';


interface Props {
  dense: boolean;
  open: boolean;
  onMenuClick: () => void;
}

export const AgrSubMenu: FC<Props> = ({onMenuClick, dense, open}) => {
  return (
    <>
      <AdditionalMenu
        dense={dense}
        onMenuClick={onMenuClick}
        open={open}
      />
      <MenuItemLink
        dense={dense}
        leftIcon={<orders.icon />}
        onClick={onMenuClick}
        primaryText={'Functions'}
        sidebarIsOpen={open}
        to={'/agr/functions'}
      />
      <MenuItemLink
        dense={dense}
        leftIcon={<orders.icon />}
        onClick={onMenuClick}
        primaryText={'Resources'}
        sidebarIsOpen={open}
        to={'/agrResources'}
      />
      <MenuItemLink
        dense={dense}
        leftIcon={<orders.icon />}
        onClick={onMenuClick}
        primaryText={'Docs'}
        sidebarIsOpen={open}
        to={'/meta'}
      />
      <MenuItemLink
        dense={dense}
        leftIcon={<orders.icon />}
        onClick={onMenuClick}
        primaryText={'Tags'}
        sidebarIsOpen={open}
        to={'/tags'}
      />
    </>
  );
};
