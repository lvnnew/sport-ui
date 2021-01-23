/* eslint-_disable_ @typescript-eslint/camelcase */
import * as React from 'react';
import {
  FC, useState,
} from 'react';
import {
  useSelector,
} from 'react-redux';
import {
  MenuItemLink,
} from 'react-admin';
import orders from '../demo/orders';

import SubMenu from '../layout/SubMenu';
import {
  AppState,
} from '../types';
import {AgrSubMenu} from './SubMenu';

const defaultState = {
  menuAgr: false,
};

type MenuName = keyof typeof defaultState;

interface Props {
  dense: boolean;
  open: boolean;
  onMenuClick: () => void;
}

export const AgrMenu: FC<Props> = ({onMenuClick, dense, open}) => {
  const [state, setState] = useState(defaultState);
  useSelector((state: AppState) => state.theme); // force rerender on theme change

  const handleToggle = (menu: MenuName) => {
    setState(state => ({...state, [menu]: !state[menu]}));
  };

  return (
    <>
      <SubMenu
        dense={dense}
        handleToggle={() => handleToggle('menuAgr')}
        icon={<orders.icon />}
        isOpen={state.menuAgr}
        name='Agr'
        sidebarIsOpen={open}
      >
        <MenuItemLink
          dense={dense}
          leftIcon={<orders.icon />}
          onClick={onMenuClick}
          primaryText={'Dashboard'}
          sidebarIsOpen={open}
          to={'/agr/dashboard'}
        />
        <AgrSubMenu onMenuClick={onMenuClick} dense={dense} open={open} />
      </SubMenu>
    </>
  );
};
