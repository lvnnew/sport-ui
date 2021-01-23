import { Space } from '../contexts/SpacesContext';
import { DemoMenu } from './menu';
import {
  dmResources,
} from './resources';
import {demoRoutes} from './routes';
import {demoMapping} from './entityMapping';

export const dmElements = {
  id: 'dm',
  resources: dmResources,
  menu: DemoMenu,
  space: Space.Demo,
  mapping: demoMapping,
  routes: demoRoutes,
};
