import {MenuElement} from '../uiLib/menu/MenuItem';

const getAdditionalMenu = () => {
  const menuData: MenuElement[] = [
    {
      label: 'catalogs.stats.title.plural',
      link: '/statsDashboard',
      icon: 'DetailsOutlined',
      debugOnly: true,
    },
    {
      label: 'app.menu.functions',
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
