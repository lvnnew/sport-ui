import * as React from 'react';
import {Logout, UserMenu as RaUserMenu} from 'react-admin';
import ChangeMyPassword from './ChangeMyPassword';

const UserMenu = () => (
  <RaUserMenu>
    <ChangeMyPassword />
    <Logout />
  </RaUserMenu>
);

export default UserMenu;
