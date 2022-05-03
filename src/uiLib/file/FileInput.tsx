import React, {FC, useCallback, useEffect, ReactElement} from 'react';
import {FileField, FileInput as RaFileInput, FileInputProps as RaFileInputProps, useRecordContext} from 'react-admin';
import {gql, useMutation} from '@apollo/client';
import {useForm} from 'react-final-form';
import {isEmpty} from 'ramda';

import {fileStateToNewURL, fileStateToFail, isFile, changeFileState, fileStateToLoading} from './utils';
import log from '../../utils/log';

export type FileInputProps = Readonly<RaFileInputProps>;

export type FileFieldState = {
  id?: string | number;
  rawFile: File;
  src: string;
  title?: string | ReactElement;
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
  const {
    children,
    onChange: onChangeOverridden,
    ...rest
  } = props;
  const finalName = props.name || props.source;

  const [loadFile] = useMutation<{ saveFile: {id: string, url: string} }>(SAVE_FILE);
  const form = useForm(); // Todo: dont change ref
  const record = useRecordContext();

  useEffect(() => { // to type value
    if (record && !isEmpty(record)) { // Todo: maybe need add work with choise
      if (Array.isArray(record)) {
        throw new TypeError('Array file is not supported');
      }

      form.change(
        finalName,
        changeFileState(
          form.getState().values[finalName],
          fileStateToNewURL(record.url, record.id, {type: record.mimetype} as File),
        ),
      );
    }
  }, [finalName, form, record]);

  const onChange = useCallback(async (file: File | File[] | FileFieldState | FileFieldState[]) => {
    onChangeOverridden?.(file);

    const needLoadFileList: File[] = (Array.isArray(file) ? file : [file]).filter(isFile);

    for (const file of needLoadFileList) {
      const newState = changeFileState(
        form.getState().values[finalName],
        fileStateToLoading(file.name),
        file,
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
        const newState = changeFileState(
          form.getState().values[finalName],
          fileStateToNewURL(url, id, file),
          file,
        );

        form.change(finalName, newState);
      } catch (error: any) {
        log.error(`Fail save file in back: ${error.message}`);

        const newState = changeFileState(
          form.getState().values[finalName],
          fileStateToFail,
          file,
        );

        form.change(finalName, newState);
      }
    }
  }, [loadFile, onChangeOverridden, finalName, form]);

  return (
    <RaFileInput
      onChange={onChange}
      {...rest}
    >
      {children ?? <FileField source='src' title='title' />}
    </RaFileInput>
  );
};
