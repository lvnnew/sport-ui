import React, {FC} from 'react';
import MenuItem, {MenuElement} from '../uiLib/menu/MenuItem';

export interface AdditionalMenuProps {
  dense: boolean;
  open: boolean;
  onClick: () => void;
}

export const AdditionalMenu: FC<AdditionalMenuProps> = ({onClick, dense, open}) => {
  const menuData: MenuElement[] = [
    {
      label: 'catalogs.stats.title',
      link: '/statsDashboard',
      icon: 'DetailsOutlined',
      debugOnly: true,
    },
    {
      label: 'Functions',
      icon: 'DetailsOutlined',
      debugOnly: true,
      children: [
        {
          label: 'Test file saving',
          link: '/ref-file-saving',
          icon: 'PermMedia',
          debugOnly: true,
        },
      ],
    },
  ];

  return (
    <>
      {menuData.map((d, i) => (<MenuItem
        key={i}
        {...d}
        dense={dense}
        open={open}
        onClick={onClick}
      />))}
    </>
  );
};
