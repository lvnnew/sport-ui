import React, {useState, FC} from 'react';
import {useSelector} from 'react-redux';
import {MenuItemLink} from 'react-admin';
import SubMenu from '../layout/SubMenu';
import FileSaving from '@material-ui/icons/PermMedia';
import {AppState} from '../types';
import {useDebug} from '../contexts/DebugContext';
import DefaultIcon from '@material-ui/icons/DetailsOutlined';

const defaultState = {
  menuFunctions: false,
};

type MenuName = keyof typeof defaultState;

export interface AdditionalMenuProps {
  dense: boolean;
  open: boolean;
  onMenuClick: () => void;
}

export const AdditionalMenu: FC<AdditionalMenuProps> = ({onMenuClick, dense, open}) => {
  const [state, setState] = useState(defaultState);
  useSelector((state: AppState) => state.theme); // force rerender on theme change
  const {debug} = useDebug();

  const handleToggle = (menu: MenuName) => {
    setState(state => ({...state, [menu]: !state[menu]}));
  };

  return (
    <>
      {debug &&
        <>
          <MenuItemLink
            dense={dense}
            leftIcon={<DefaultIcon />}
            onClick={onMenuClick}
            primaryText={'Stats'}
            sidebarIsOpen={open}
            to={'/statsDashboard'}
          />
          <SubMenu
            dense={dense}
            handleToggle={() => handleToggle('menuFunctions')}
            icon={<DefaultIcon />}
            isOpen={state.menuFunctions}
            name={'Functions'}
            sidebarIsOpen={open}>
            <MenuItemLink
              dense={dense}
              leftIcon={<FileSaving />}
              onClick={onMenuClick}
              primaryText={'Test file saving'}
              sidebarIsOpen={open}
              to={'/ref-file-saving'}
            />
          </SubMenu>
        </>
      }
    </>
  );
};
