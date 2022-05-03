import {MenuElement} from '../uiLib/menu/MenuItem';

const getAdditionalMenu = () => {
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

  return menuData;
};

export default getAdditionalMenu;
