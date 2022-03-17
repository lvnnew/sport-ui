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
            primaryText='App refresh tokens'
            sidebarIsOpen={open}
            to='/appRefreshTokens'
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
            primaryText='Ui refresh tokens'
            sidebarIsOpen={open}
            to='/admRefreshTokens'
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
            primaryText='Аудит'
            sidebarIsOpen={open}
            to='/auditLogs'
          />
          <MenuItemLink
            dense={dense}
            leftIcon={<DefaultIcon />}
            onClick={onMenuClick}
            primaryText='Делегирование'
            sidebarIsOpen={open}
            to='/delegations'
          />
          <MenuItemLink
            dense={dense}
            leftIcon={<DefaultIcon />}
            onClick={onMenuClick}
            primaryText='История автогенерации'
            sidebarIsOpen={open}
            to='/autogenerationHistoryEntries'
          />
          <MenuItemLink
            dense={dense}
            leftIcon={<DefaultIcon />}
            onClick={onMenuClick}
            primaryText='Логины менеджеров'
            sidebarIsOpen={open}
            to='/managerLogins'
          />
          <MenuItemLink
            dense={dense}
            leftIcon={<DefaultIcon />}
            onClick={onMenuClick}
            primaryText='Логины пользователей'
            sidebarIsOpen={open}
            to='/appLogins'
          />
          <MenuItemLink
            dense={dense}
            leftIcon={<DefaultIcon />}
            onClick={onMenuClick}
            primaryText='Менеджеры'
            sidebarIsOpen={open}
            to='/managers'
          />
          <MenuItemLink
            dense={dense}
            leftIcon={<DefaultIcon />}
            onClick={onMenuClick}
            primaryText='Пользователи'
            sidebarIsOpen={open}
            to='/users'
          />
          <MenuItemLink
            dense={dense}
            leftIcon={<DefaultIcon />}
            onClick={onMenuClick}
            primaryText='Правила автогенерации'
            sidebarIsOpen={open}
            to='/autogenerationRules'
          />
          <MenuItemLink
            dense={dense}
            leftIcon={<DefaultIcon />}
            onClick={onMenuClick}
            primaryText='Разрешения'
            sidebarIsOpen={open}
            to='/permissions'
          />
          <MenuItemLink
            dense={dense}
            leftIcon={<DefaultIcon />}
            onClick={onMenuClick}
            primaryText='Разрешения менеджеров'
            sidebarIsOpen={open}
            to='/managersToPermissions'
          />
          <MenuItemLink
            dense={dense}
            leftIcon={<DefaultIcon />}
            onClick={onMenuClick}
            primaryText='Разрешения ролей'
            sidebarIsOpen={open}
            to='/rolesToPermissions'
          />
          <MenuItemLink
            dense={dense}
            leftIcon={<DefaultIcon />}
            onClick={onMenuClick}
            primaryText='Роли'
            sidebarIsOpen={open}
            to='/roles'
          />
          <MenuItemLink
            dense={dense}
            leftIcon={<DefaultIcon />}
            onClick={onMenuClick}
            primaryText='Роли менеджеров'
            sidebarIsOpen={open}
            to='/managersToRoles'
          />
          <MenuItemLink
            dense={dense}
            leftIcon={<DefaultIcon />}
            onClick={onMenuClick}
            primaryText='Сущности'
            sidebarIsOpen={open}
            to='/entities'
          />
          <MenuItemLink
            dense={dense}
            leftIcon={<DefaultIcon />}
            onClick={onMenuClick}
            primaryText='Типы событий аудита'
            sidebarIsOpen={open}
            to='/auditLogActionTypes'
          />
          <MenuItemLink
            dense={dense}
            leftIcon={<DefaultIcon />}
            onClick={onMenuClick}
            primaryText='Типы сообщений'
            sidebarIsOpen={open}
            to='/messageTypes'
          />
          <MenuItemLink
            dense={dense}
            leftIcon={<DefaultIcon />}
            onClick={onMenuClick}
            primaryText='Шаблоны сообщений'
            sidebarIsOpen={open}
            to='/messageTemplates'
          />
        </SubMenu>
      </>}
    </>
  );
};
