import React, {useState, FC} from 'react';
import {useSelector} from 'react-redux';
import {useTranslate, MenuItemLink} from 'react-admin';
import {AppState} from '../types';
import orders from '../demo/orders';
import {useDebug} from '../contexts/DebugContext';

const defaultState = {
};

type MenuName = keyof typeof defaultState;

export interface AdditionalMenuProps {
  dense: boolean;
  open: boolean;
  onMenuClick: () => void;
}

export const AdditionalMenu: FC<AdditionalMenuProps> = ({onMenuClick, dense, open}) => {
  const translate = useTranslate();
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
            leftIcon={<orders.icon />}
            onClick={onMenuClick}
            primaryText={'Stats'}
            sidebarIsOpen={open}
            to={'/statsDashboard'}
          />
        </>
      }
    </>
  );
};
