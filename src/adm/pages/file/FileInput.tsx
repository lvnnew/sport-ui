import React, {FC, useCallback} from 'react';
import {FileInput as RaFileInput, FileInputProps as RaFileInputProps, InputProps} from 'react-admin';
import {FileInputOptions} from 'ra-ui-materialui/lib/input/FileInput';
import {gql, useMutation} from '@apollo/client';
import {fileStateToNewURL, fileStateToFail, isFile, changeFileState, fileStateToLoading} from './utils';
import {useForm} from 'react-final-form';
import log from '../../../utils/log';

export type FileInputProps = Readonly<RaFileInputProps & InputProps<FileInputOptions>>;

export type FileFieldState = {
  id?: string;
  rawFile: File;
  src: string;
  title?: string;
  error?: boolean;
  isLoading?: boolean;
};

const SAVE_FILE = gql`
  mutation ($file: Upload!) {
    saveFile(file: $file) {
        id
        url
    }
  }
`;

export const FileInput: FC<FileInputProps> = (props) => {
  const {onChange: onChangeOverridden, ...rest} = props;
  const finalName = props.name || props.source;

  const [loadFile] = useMutation<{ saveFile: {id: string, url: string} }>(SAVE_FILE);
  const form = useForm(); // Todo: dont change ref

  const onChange = useCallback(async (file: File | File[] | FileFieldState | FileFieldState[]) => {
    onChangeOverridden?.(file);

    const needLoadFileList: File[] = (Array.isArray(file) ? file : [file]).filter(isFile);

    for (const file of needLoadFileList) {
      const newState = changeFileState(
        form.getState().values[finalName],
        file,
        fileStateToLoading,
      );

      form.change(finalName, newState);

      try {
        const result = await loadFile({variables: {file}});

        // Todo: change after server saving
        const savedFile = result.data?.saveFile;

        if (!savedFile) {
          return;
        }

        const {url, id} = savedFile;
        form.change(
          finalName,
          changeFileState(
            form.getState().values[finalName],
            file,
            fileStateToNewURL(url, id),
          ),
        );
      } catch (error: any) {
        log.error(`Fail save file in back: ${error.message}`);

        const newState = changeFileState(
          form.getState().values[finalName],
          file,
          fileStateToFail,
        );

        form.change(finalName, newState);
      }
    }
  }, [loadFile, onChangeOverridden, finalName, form]);

  return (
    <RaFileInput
      onChange={onChange}
      {...rest}
    />
  );
};
