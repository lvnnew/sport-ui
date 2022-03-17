/* eslint-_disable_ @typescript-eslint/camelcase */
import React, {useState, FC} from 'react';
import {MenuItemLink, useTranslate} from 'react-admin';
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
  const translate = useTranslate();

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
            primaryText={translate('catalogs.appRefreshTokens')}
            sidebarIsOpen={open}
            to='/appRefreshTokens'
          />
          <MenuItemLink
            dense={dense}
            leftIcon={<DefaultIcon />}
            onClick={onMenuClick}
            primaryText={translate('catalogs.files')}
            sidebarIsOpen={open}
            to='/files'
          />
          <MenuItemLink
            dense={dense}
            leftIcon={<DefaultIcon />}
            onClick={onMenuClick}
            primaryText={translate('catalogs.languages')}
            sidebarIsOpen={open}
            to='/languages'
          />
          <MenuItemLink
            dense={dense}
            leftIcon={<DefaultIcon />}
            onClick={onMenuClick}
            primaryText={translate('catalogs.stats')}
            sidebarIsOpen={open}
            to='/stats'
          />
          <MenuItemLink
            dense={dense}
            leftIcon={<DefaultIcon />}
            onClick={onMenuClick}
            primaryText={translate('catalogs.tags')}
            sidebarIsOpen={open}
            to='/tags'
          />
          <MenuItemLink
            dense={dense}
            leftIcon={<DefaultIcon />}
            onClick={onMenuClick}
            primaryText={translate('catalogs.admRefreshTokens')}
            sidebarIsOpen={open}
            to='/admRefreshTokens'
          />
          <MenuItemLink
            dense={dense}
            leftIcon={<DefaultIcon />}
            onClick={onMenuClick}
            primaryText={translate('catalogs.units')}
            sidebarIsOpen={open}
            to='/units'
          />
          <MenuItemLink
            dense={dense}
            leftIcon={<DefaultIcon />}
            onClick={onMenuClick}
            primaryText={translate('catalogs.auditLogs')}
            sidebarIsOpen={open}
            to='/auditLogs'
          />
          <MenuItemLink
            dense={dense}
            leftIcon={<DefaultIcon />}
            onClick={onMenuClick}
            primaryText={translate('catalogs.delegations')}
            sidebarIsOpen={open}
            to='/delegations'
          />
          <MenuItemLink
            dense={dense}
            leftIcon={<DefaultIcon />}
            onClick={onMenuClick}
            primaryText={translate('catalogs.autogenerationHistoryEntries')}
            sidebarIsOpen={open}
            to='/autogenerationHistoryEntries'
          />
          <MenuItemLink
            dense={dense}
            leftIcon={<DefaultIcon />}
            onClick={onMenuClick}
            primaryText={translate('catalogs.managerLogins')}
            sidebarIsOpen={open}
            to='/managerLogins'
          />
          <MenuItemLink
            dense={dense}
            leftIcon={<DefaultIcon />}
            onClick={onMenuClick}
            primaryText={translate('catalogs.appLogins')}
            sidebarIsOpen={open}
            to='/appLogins'
          />
          <MenuItemLink
            dense={dense}
            leftIcon={<DefaultIcon />}
            onClick={onMenuClick}
            primaryText={translate('catalogs.managers')}
            sidebarIsOpen={open}
            to='/managers'
          />
          <MenuItemLink
            dense={dense}
            leftIcon={<DefaultIcon />}
            onClick={onMenuClick}
            primaryText={translate('catalogs.users')}
            sidebarIsOpen={open}
            to='/users'
          />
          <MenuItemLink
            dense={dense}
            leftIcon={<DefaultIcon />}
            onClick={onMenuClick}
            primaryText={translate('catalogs.autogenerationRules')}
            sidebarIsOpen={open}
            to='/autogenerationRules'
          />
          <MenuItemLink
            dense={dense}
            leftIcon={<DefaultIcon />}
            onClick={onMenuClick}
            primaryText={translate('catalogs.permissions')}
            sidebarIsOpen={open}
            to='/permissions'
          />
          <MenuItemLink
            dense={dense}
            leftIcon={<DefaultIcon />}
            onClick={onMenuClick}
            primaryText={translate('catalogs.managersToPermissions')}
            sidebarIsOpen={open}
            to='/managersToPermissions'
          />
          <MenuItemLink
            dense={dense}
            leftIcon={<DefaultIcon />}
            onClick={onMenuClick}
            primaryText={translate('catalogs.rolesToPermissions')}
            sidebarIsOpen={open}
            to='/rolesToPermissions'
          />
          <MenuItemLink
            dense={dense}
            leftIcon={<DefaultIcon />}
            onClick={onMenuClick}
            primaryText={translate('catalogs.roles')}
            sidebarIsOpen={open}
            to='/roles'
          />
          <MenuItemLink
            dense={dense}
            leftIcon={<DefaultIcon />}
            onClick={onMenuClick}
            primaryText={translate('catalogs.managersToRoles')}
            sidebarIsOpen={open}
            to='/managersToRoles'
          />
          <MenuItemLink
            dense={dense}
            leftIcon={<DefaultIcon />}
            onClick={onMenuClick}
            primaryText={translate('catalogs.entities')}
            sidebarIsOpen={open}
            to='/entities'
          />
          <MenuItemLink
            dense={dense}
            leftIcon={<DefaultIcon />}
            onClick={onMenuClick}
            primaryText={translate('catalogs.auditLogActionTypes')}
            sidebarIsOpen={open}
            to='/auditLogActionTypes'
          />
          <MenuItemLink
            dense={dense}
            leftIcon={<DefaultIcon />}
            onClick={onMenuClick}
            primaryText={translate('catalogs.messageTypes')}
            sidebarIsOpen={open}
            to='/messageTypes'
          />
          <MenuItemLink
            dense={dense}
            leftIcon={<DefaultIcon />}
            onClick={onMenuClick}
            primaryText={translate('catalogs.messageTemplates')}
            sidebarIsOpen={open}
            to='/messageTemplates'
          />
        </SubMenu>
      </>}
    </>
  );
};
