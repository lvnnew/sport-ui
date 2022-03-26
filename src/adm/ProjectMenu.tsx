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
            primaryText={translate('catalogs.appRefreshTokens.title')}
            sidebarIsOpen={open}
            to='/appRefreshTokens'
          />
          <MenuItemLink
            dense={dense}
            leftIcon={<DefaultIcon />}
            onClick={onMenuClick}
            primaryText={translate('catalogs.files.title')}
            sidebarIsOpen={open}
            to='/files'
          />
          <MenuItemLink
            dense={dense}
            leftIcon={<DefaultIcon />}
            onClick={onMenuClick}
            primaryText={translate('catalogs.languages.title')}
            sidebarIsOpen={open}
            to='/languages'
          />
          <MenuItemLink
            dense={dense}
            leftIcon={<DefaultIcon />}
            onClick={onMenuClick}
            primaryText={translate('catalogs.stats.title')}
            sidebarIsOpen={open}
            to='/stats'
          />
          <MenuItemLink
            dense={dense}
            leftIcon={<DefaultIcon />}
            onClick={onMenuClick}
            primaryText={translate('catalogs.tags.title')}
            sidebarIsOpen={open}
            to='/tags'
          />
          <MenuItemLink
            dense={dense}
            leftIcon={<DefaultIcon />}
            onClick={onMenuClick}
            primaryText={translate('catalogs.admRefreshTokens.title')}
            sidebarIsOpen={open}
            to='/admRefreshTokens'
          />
          <MenuItemLink
            dense={dense}
            leftIcon={<DefaultIcon />}
            onClick={onMenuClick}
            primaryText={translate('catalogs.units.title')}
            sidebarIsOpen={open}
            to='/units'
          />
          <MenuItemLink
            dense={dense}
            leftIcon={<DefaultIcon />}
            onClick={onMenuClick}
            primaryText={translate('catalogs.auditLogs.title')}
            sidebarIsOpen={open}
            to='/auditLogs'
          />
          <MenuItemLink
            dense={dense}
            leftIcon={<DefaultIcon />}
            onClick={onMenuClick}
            primaryText={translate('catalogs.delegations.title')}
            sidebarIsOpen={open}
            to='/delegations'
          />
          <MenuItemLink
            dense={dense}
            leftIcon={<DefaultIcon />}
            onClick={onMenuClick}
            primaryText={translate('catalogs.autogenerationHistoryEntries.title')}
            sidebarIsOpen={open}
            to='/autogenerationHistoryEntries'
          />
          <MenuItemLink
            dense={dense}
            leftIcon={<DefaultIcon />}
            onClick={onMenuClick}
            primaryText={translate('catalogs.managerLogins.title')}
            sidebarIsOpen={open}
            to='/managerLogins'
          />
          <MenuItemLink
            dense={dense}
            leftIcon={<DefaultIcon />}
            onClick={onMenuClick}
            primaryText={translate('catalogs.appLogins.title')}
            sidebarIsOpen={open}
            to='/appLogins'
          />
          <MenuItemLink
            dense={dense}
            leftIcon={<DefaultIcon />}
            onClick={onMenuClick}
            primaryText={translate('catalogs.managers.title')}
            sidebarIsOpen={open}
            to='/managers'
          />
          <MenuItemLink
            dense={dense}
            leftIcon={<DefaultIcon />}
            onClick={onMenuClick}
            primaryText={translate('catalogs.users.title')}
            sidebarIsOpen={open}
            to='/users'
          />
          <MenuItemLink
            dense={dense}
            leftIcon={<DefaultIcon />}
            onClick={onMenuClick}
            primaryText={translate('catalogs.autogenerationRules.title')}
            sidebarIsOpen={open}
            to='/autogenerationRules'
          />
          <MenuItemLink
            dense={dense}
            leftIcon={<DefaultIcon />}
            onClick={onMenuClick}
            primaryText={translate('catalogs.permissions.title')}
            sidebarIsOpen={open}
            to='/permissions'
          />
          <MenuItemLink
            dense={dense}
            leftIcon={<DefaultIcon />}
            onClick={onMenuClick}
            primaryText={translate('catalogs.managersToPermissions.title')}
            sidebarIsOpen={open}
            to='/managersToPermissions'
          />
          <MenuItemLink
            dense={dense}
            leftIcon={<DefaultIcon />}
            onClick={onMenuClick}
            primaryText={translate('catalogs.rolesToPermissions.title')}
            sidebarIsOpen={open}
            to='/rolesToPermissions'
          />
          <MenuItemLink
            dense={dense}
            leftIcon={<DefaultIcon />}
            onClick={onMenuClick}
            primaryText={translate('catalogs.roles.title')}
            sidebarIsOpen={open}
            to='/roles'
          />
          <MenuItemLink
            dense={dense}
            leftIcon={<DefaultIcon />}
            onClick={onMenuClick}
            primaryText={translate('catalogs.managersToRoles.title')}
            sidebarIsOpen={open}
            to='/managersToRoles'
          />
          <MenuItemLink
            dense={dense}
            leftIcon={<DefaultIcon />}
            onClick={onMenuClick}
            primaryText={translate('catalogs.entities.title')}
            sidebarIsOpen={open}
            to='/entities'
          />
          <MenuItemLink
            dense={dense}
            leftIcon={<DefaultIcon />}
            onClick={onMenuClick}
            primaryText={translate('catalogs.tenants.title')}
            sidebarIsOpen={open}
            to='/tenants'
          />
          <MenuItemLink
            dense={dense}
            leftIcon={<DefaultIcon />}
            onClick={onMenuClick}
            primaryText={translate('catalogs.auditLogActionTypes.title')}
            sidebarIsOpen={open}
            to='/auditLogActionTypes'
          />
          <MenuItemLink
            dense={dense}
            leftIcon={<DefaultIcon />}
            onClick={onMenuClick}
            primaryText={translate('catalogs.messageTypes.title')}
            sidebarIsOpen={open}
            to='/messageTypes'
          />
          <MenuItemLink
            dense={dense}
            leftIcon={<DefaultIcon />}
            onClick={onMenuClick}
            primaryText={translate('catalogs.messageTemplates.title')}
            sidebarIsOpen={open}
            to='/messageTemplates'
          />
        </SubMenu>
      </>}
    </>
  );
};
