/* eslint-_disable_ @typescript-eslint/camelcase */
import React, {useState, FC} from 'react';
import {
  MenuItemLink,
} from 'react-admin';
import {useDebug} from '../contexts/DebugContext';
import orders from '../demo/orders';
import {AdditionalMenu} from './AdditionalMenu';
import SubMenu from '../layout/SubMenu';
import DocumentsIcon from '@material-ui/icons/DescriptionOutlined';

// DO NOT EDIT! THIS IS GENERATED FILE

interface Props {
  dense: boolean;
  open: boolean;
  onMenuClick: () => void;
}

const defaultState = {
  infoRegistries: false,
  sumRegistries: false,
  documents: false,
  catalogs: false,
};

type MenuName = keyof typeof defaultState;

export const AgrSubMenu: FC<Props> = ({onMenuClick, dense, open}) => {
  const {debug} = useDebug();
  const [state, setState] = useState(defaultState);

  const handleToggle = (menu: MenuName) => {
    setState(state => ({...state, [menu]: !state[menu]}));
  };

  return (
    <>
      <AdditionalMenu
        dense={dense}
        onMenuClick={onMenuClick}
        open={open}
      />
      {debug && <>
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
          primaryText={'Meta'}
          sidebarIsOpen={open}
          to={'/meta'}
        />
        <SubMenu
          dense={dense}
          handleToggle={() => handleToggle('catalogs')}
          icon={<DocumentsIcon />}
          isOpen={state.catalogs}
          name={'catalogs'}
          sidebarIsOpen={open}>
          <MenuItemLink
            dense={dense}
            leftIcon={<orders.icon />}
            onClick={onMenuClick}
            primaryText={'Admin logins'}
            sidebarIsOpen={open}
            to={'/adminLogins'}
          />
          <MenuItemLink
            dense={dense}
            leftIcon={<orders.icon />}
            onClick={onMenuClick}
            primaryText={'Admins'}
            sidebarIsOpen={open}
            to={'/admins'}
          />
          <MenuItemLink
            dense={dense}
            leftIcon={<orders.icon />}
            onClick={onMenuClick}
            primaryText={'Files'}
            sidebarIsOpen={open}
            to={'/files'}
          />
          <MenuItemLink
            dense={dense}
            leftIcon={<orders.icon />}
            onClick={onMenuClick}
            primaryText={'Logins of usual not admins users'}
            sidebarIsOpen={open}
            to={'/appLogins'}
          />
          <MenuItemLink
            dense={dense}
            leftIcon={<orders.icon />}
            onClick={onMenuClick}
            primaryText={'Stats'}
            sidebarIsOpen={open}
            to={'/stats'}
          />
          <MenuItemLink
            dense={dense}
            leftIcon={<orders.icon />}
            onClick={onMenuClick}
            primaryText={'Tags'}
            sidebarIsOpen={open}
            to={'/tags'}
          />
          <MenuItemLink
            dense={dense}
            leftIcon={<orders.icon />}
            onClick={onMenuClick}
            primaryText={'Users'}
            sidebarIsOpen={open}
            to={'/users'}
          />
        </SubMenu>
      </>}
    </>
  );
};
