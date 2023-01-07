import {DataProvider as RaDataProvider} from 'react-admin';
import getCustomMethods from './getCustomMethods';

export type DataProvider = RaDataProvider & ReturnType<typeof getCustomMethods>
