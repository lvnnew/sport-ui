import {FileFieldState} from './FileInput';

export const fileStateToLoading = (state: FileFieldState): FileFieldState => ({
  ...state,
  isLoading: true,
});

export const fileStateToNewURL = (url: string, id: string) => (state: FileFieldState): FileFieldState => ({
  ...state,
  id,

  // Todo: maybe need to add air url to start line
  src: url,

  // Todo: maybe need translate
  title: `${state.title} file loaded as ${url}`,
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
  replaceFile: File,
  replace: (f: FileFieldState) => FileFieldState,
): FileFieldState | FileFieldState[] => {
  if (Array.isArray(fileState)) { // isMultiple
    return fileState.map((state: any) => (state.rawFile === replaceFile ?
      replace(state) :
      state));
  } else {
    return replace(fileState);
  }
};

export const isFile = (file: File | any): file is File => file instanceof File;
