import React, {FC} from 'react';
import EndMenuItem, {EndMenuElement, EndMenuItemProps} from './EndMenuItem';
import ParentMenuItem, {ParentMenuElement, ParentMenuItemProps} from './ParentMenuItem';

export type MenuElement = EndMenuElement | ParentMenuElement;

type MenuItemProps = MenuElement & {
  dense?: boolean;
}

const MenuItem: FC<MenuItemProps> =
  (props) => (props.children ? <ParentMenuItem {...props as ParentMenuItemProps} /> : <EndMenuItem {...props as EndMenuItemProps} />);

export default MenuItem;
