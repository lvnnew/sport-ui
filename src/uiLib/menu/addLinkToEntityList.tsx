import {MenuElement} from './MenuItem';

const addLinkToEntityList = (entityName: string, debugOnly = false) => ({
  label: `catalogs.${entityName}.title`,
  link: `/${entityName}`,
  icon: 'DetailsOutlined',
  debugOnly,
} as MenuElement);

export default addLinkToEntityList;
