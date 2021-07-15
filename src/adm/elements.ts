import {
  agrResources,
} from './resources';
import {Space} from '../contexts/SpacesContext';
import {AgrMenu} from './menu';
import {agrMapping} from './entityMapping';
import {agrRoutes} from './routes';

// DO NOT EDIT! THIS IS GENERATED FILE

export const agrElements = {
  id: 'agr',
  resources: agrResources,
  menu: AgrMenu,
  space: Space.Agr,
  mapping: agrMapping,
  routes: agrRoutes,
};
