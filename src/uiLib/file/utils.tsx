import {FileFieldState} from './FileInput';
import React from 'react';
import Img from './Img';

export const fileStateToLoading = (title: string) => (state: FileFieldState): FileFieldState => ({
  ...state,
  title: `File loading: ${title}`,
  isLoading: true,
});

export const fileStateToNewURL = (url: string, id: string | number, file: File) => (state: FileFieldState): FileFieldState => ({
  ...state,
  id,
  src: url,
  title: file?.type?.includes('image') ?
    <Img src={url} alt={typeof state.title === 'string' ? state.title : ''} type='preview' /> :
    `${state.title} file loaded as ${url}`,
  isLoading: false,
});

export const fileStateToFail = (state: FileFieldState): FileFieldState => ({
  ...state,
  src: '#',
  error: true,

  // Todo: maybe need translate
  title: `Fail load file: ${state.title}`,
  isLoading: false,
});

export const changeFileState = (
  fileState: FileFieldState | FileFieldState[],
  replace: (f: FileFieldState) => FileFieldState,
  replaceFile?: File,
): FileFieldState | FileFieldState[] => {
  if (Array.isArray(fileState)) { // isMultiple
    return fileState.map((state: any) => (state.rawFile === replaceFile || replaceFile === undefined ?
      replace(state) :
      state));
  } else {
    return replace(fileState);
  }
};

export const isFile = (file: File | any): file is File => file instanceof File;
