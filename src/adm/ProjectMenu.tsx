/* eslint-_disable_ @typescript-eslint/camelcase */
import React, {useState, FC} from 'react';
import {
  MenuItemLink,
} from 'react-admin';
import {useDebug} from '../contexts/DebugContext';
import {AdditionalMenu} from './AdditionalMenu';
import SubMenu from '../layout/SubMenu';
import DocumentsIcon from '@material-ui/icons/DescriptionOutlined';
import DefaultIcon from '@material-ui/icons/DetailsOutlined';

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

export const ProjectMenu: FC<Props> = ({onMenuClick, dense, open}) => {
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
          leftIcon={<DefaultIcon />}
          onClick={onMenuClick}
          primaryText='Functions'
          sidebarIsOpen={open}
          to='/functions'
        />
        <MenuItemLink
          dense={dense}
          leftIcon={<DefaultIcon />}
          onClick={onMenuClick}
          primaryText='Resources'
          sidebarIsOpen={open}
          to='/resources'
        />
        <MenuItemLink
          dense={dense}
          leftIcon={<DefaultIcon />}
          onClick={onMenuClick}
          primaryText='Meta'
          sidebarIsOpen={open}
          to='/meta'
        />
        <SubMenu
          dense={dense}
          handleToggle={() => handleToggle('catalogs')}
          icon={<DocumentsIcon />}
          isOpen={state.catalogs}
          name='catalogs'
          sidebarIsOpen={open}
        >
          <MenuItemLink
            dense={dense}
            leftIcon={<DefaultIcon />}
            onClick={onMenuClick}
            primaryText='Audit'
            sidebarIsOpen={open}
            to='/auditLogs'
          />
          <MenuItemLink
            dense={dense}
            leftIcon={<DefaultIcon />}
            onClick={onMenuClick}
            primaryText='Audit action types'
            sidebarIsOpen={open}
            to='/auditLogActionTypes'
          />
          <MenuItemLink
            dense={dense}
            leftIcon={<DefaultIcon />}
            onClick={onMenuClick}
            primaryText='Autogeneration History'
            sidebarIsOpen={open}
            to='/autogenerationHistoryEntries'
          />
          <MenuItemLink
            dense={dense}
            leftIcon={<DefaultIcon />}
            onClick={onMenuClick}
            primaryText='Autogeneration Rules'
            sidebarIsOpen={open}
            to='/autogenerationRules'
          />
          <MenuItemLink
            dense={dense}
            leftIcon={<DefaultIcon />}
            onClick={onMenuClick}
            primaryText='Delegations'
            sidebarIsOpen={open}
            to='/delegations'
          />
          <MenuItemLink
            dense={dense}
            leftIcon={<DefaultIcon />}
            onClick={onMenuClick}
            primaryText='Files'
            sidebarIsOpen={open}
            to='/files'
          />
          <MenuItemLink
            dense={dense}
            leftIcon={<DefaultIcon />}
            onClick={onMenuClick}
            primaryText='Languages'
            sidebarIsOpen={open}
            to='/languages'
          />
          <MenuItemLink
            dense={dense}
            leftIcon={<DefaultIcon />}
            onClick={onMenuClick}
            primaryText='Logins of users'
            sidebarIsOpen={open}
            to='/appLogins'
          />
          <MenuItemLink
            dense={dense}
            leftIcon={<DefaultIcon />}
            onClick={onMenuClick}
            primaryText='Manager logins'
            sidebarIsOpen={open}
            to='/managerLogins'
          />
          <MenuItemLink
            dense={dense}
            leftIcon={<DefaultIcon />}
            onClick={onMenuClick}
            primaryText='Managers'
            sidebarIsOpen={open}
            to='/managers'
          />
          <MenuItemLink
            dense={dense}
            leftIcon={<DefaultIcon />}
            onClick={onMenuClick}
            primaryText='Managers To Permissions'
            sidebarIsOpen={open}
            to='/managersToPermissions'
          />
          <MenuItemLink
            dense={dense}
            leftIcon={<DefaultIcon />}
            onClick={onMenuClick}
            primaryText='Managers To Roles'
            sidebarIsOpen={open}
            to='/managersToRoles'
          />
          <MenuItemLink
            dense={dense}
            leftIcon={<DefaultIcon />}
            onClick={onMenuClick}
            primaryText='Message templates'
            sidebarIsOpen={open}
            to='/messageTemplates'
          />
          <MenuItemLink
            dense={dense}
            leftIcon={<DefaultIcon />}
            onClick={onMenuClick}
            primaryText='Permissions'
            sidebarIsOpen={open}
            to='/permissions'
          />
          <MenuItemLink
            dense={dense}
            leftIcon={<DefaultIcon />}
            onClick={onMenuClick}
            primaryText='Roles'
            sidebarIsOpen={open}
            to='/roles'
          />
          <MenuItemLink
            dense={dense}
            leftIcon={<DefaultIcon />}
            onClick={onMenuClick}
            primaryText='Roles To Permissions'
            sidebarIsOpen={open}
            to='/rolesToPermissions'
          />
          <MenuItemLink
            dense={dense}
            leftIcon={<DefaultIcon />}
            onClick={onMenuClick}
            primaryText='Stats'
            sidebarIsOpen={open}
            to='/stats'
          />
          <MenuItemLink
            dense={dense}
            leftIcon={<DefaultIcon />}
            onClick={onMenuClick}
            primaryText='Tags'
            sidebarIsOpen={open}
            to='/tags'
          />
          <MenuItemLink
            dense={dense}
            leftIcon={<DefaultIcon />}
            onClick={onMenuClick}
            primaryText='Units'
            sidebarIsOpen={open}
            to='/units'
          />
          <MenuItemLink
            dense={dense}
            leftIcon={<DefaultIcon />}
            onClick={onMenuClick}
            primaryText='Users'
            sidebarIsOpen={open}
            to='/users'
          />
        </SubMenu>
      </>}
    </>
  );
};
