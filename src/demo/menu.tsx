/* eslint-_disable_ @typescript-eslint/camelcase */
import * as React from 'react';
import {
  FC, useState,
} from 'react';
import {
  useSelector,
} from 'react-redux';
import {
  MenuItemLink, useTranslate,
} from 'react-admin';
import LabelIcon from '@material-ui/icons/Label';

import SubMenu from '../layout/SubMenu';
import {
  AppState,
} from '../types';

import visitors from './visitors';
import orders from './orders';
import invoices from './invoices';
import products from './products';
import categories from './categories';
import reviews from './reviews';

const defaultState = {
  menuCatalog: false,
  menuCustomers: false,
  menuDemo: false,
  menuSales: false,
};

type MenuName = keyof typeof defaultState;

interface Props {
  dense: boolean;
  open: boolean;
  onMenuClick: () => void;
}

export const DemoMenu: FC<Props> = ({onMenuClick, dense, open}) => {
  const [state, setState] = useState(defaultState);
  const translate = useTranslate();
  useSelector((state: AppState) => state.theme); // force rerender on theme change

  const handleToggle = (menu: MenuName) => {
    setState(state => ({...state, [menu]: !state[menu]}));
  };

  return (
    <>
      <SubMenu
        dense={dense}
        handleToggle={() => handleToggle('menuDemo')}
        icon={<orders.icon />}
        isOpen={state.menuDemo}
        name='Demo'
        sidebarIsOpen={open}
      >
        <MenuItemLink
          dense={dense}
          leftIcon={<orders.icon />}
          onClick={onMenuClick}
          primaryText={'Dashboard'}
          sidebarIsOpen={open}
          to={'/demo/dashboard'}
        />
      </SubMenu>
      <SubMenu
        dense={dense}
        handleToggle={() => handleToggle('menuSales')}
        icon={<orders.icon />}
        isOpen={state.menuSales}
        name='pos.menu.sales'
        sidebarIsOpen={open}
      >
        <MenuItemLink
          dense={dense}
          leftIcon={<orders.icon />}
          onClick={onMenuClick}
          primaryText={translate('resources.commands.name', {
            smart_count: 2,
          })}
          sidebarIsOpen={open}
          to={'/commands'}
        />
        <MenuItemLink
          dense={dense}
          leftIcon={<invoices.icon />}
          onClick={onMenuClick}
          primaryText={translate('resources.invoices.name', {
            smart_count: 2,
          })}
          sidebarIsOpen={open}
          to={'/invoices'}
        />
      </SubMenu>
      <SubMenu
        dense={dense}
        handleToggle={() => handleToggle('menuCatalog')}
        icon={<products.icon />}
        isOpen={state.menuCatalog}
        name='pos.menu.catalog'
        sidebarIsOpen={open}
      >
        <MenuItemLink
          dense={dense}
          leftIcon={<products.icon />}
          onClick={onMenuClick}
          primaryText={translate('resources.products.name', {
            smart_count: 2,
          })}
          sidebarIsOpen={open}
          to={'/products'}
        />
        <MenuItemLink
          dense={dense}
          leftIcon={<categories.icon />}
          onClick={onMenuClick}
          primaryText={translate('resources.categories.name', {
            smart_count: 2,
          })}
          sidebarIsOpen={open}
          to={'/categories'}
        />
      </SubMenu>
      <SubMenu
        dense={dense}
        handleToggle={() => handleToggle('menuCustomers')}
        icon={<visitors.icon />}
        isOpen={state.menuCustomers}
        name='pos.menu.customers'
        sidebarIsOpen={open}
      >
        <MenuItemLink
          dense={dense}
          leftIcon={<visitors.icon />}
          onClick={onMenuClick}
          primaryText={translate('resources.customers.name', {
            smart_count: 2,
          })}
          sidebarIsOpen={open}
          to={'/customers'}
        />
        <MenuItemLink
          dense={dense}
          leftIcon={<LabelIcon />}
          onClick={onMenuClick}
          primaryText={translate('resources.segments.name', {
            smart_count: 2,
          })}
          sidebarIsOpen={open}
          to={'/segments'}
        />
      </SubMenu>
      <MenuItemLink
        dense={dense}
        leftIcon={<reviews.icon />}
        onClick={onMenuClick}
        primaryText={translate('resources.reviews.name', {
          smart_count: 2,
        })}
        sidebarIsOpen={open}
        to={'/reviews'}
      />
    </>
  );
};
