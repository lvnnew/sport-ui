// DO NOT EDIT! THIS IS GENERATED FILE
import {Translate} from 'react-admin';
import {resourcesChunk0} from './resourcesChunk0';
import {resourcesChunk1} from './resourcesChunk1';

export function getResources(translate: Translate, permissions: string[]) {
  return permissions ? [
    ...resourcesChunk0(translate, permissions),
    ...resourcesChunk1(translate, permissions),
  ] : [];
}
