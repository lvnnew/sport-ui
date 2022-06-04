import React, {FC, useCallback, ReactElement} from 'react';
import {
  ImageField,
  FileInput as RaFileInput,
  FileInputProps as RaFileInputProps,
  NonEmptyReferenceField,
  FileField,
} from 'react-admin';
import {gql, useMutation} from '@apollo/client';
import {useController} from 'react-hook-form';
import log from '../../utils/log';
import {makeStyles} from '@mui/styles';

export type FileInputProps = Readonly<RaFileInputProps> & {
  type?: 'image';
};

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

const useStyles = makeStyles(() => ({
  img: {
    '& > img': {
      maxWidth: '100%',
      maxHeight: '25vw',
    },
  },
}));

const isFile = (file: File | any): file is File => file instanceof File;

export const FileInput: FC<FileInputProps> = (props) => {
  const mc = useStyles();
  const {
    onChange: onChangeOverridden,
    type,
    accept = type === 'image' ? 'image/png, image/jpeg, image/webp, image/svg' : undefined,
    ...rest
  } = props;
  const finalName = props.name || props.source;

  const [loadFile] = useMutation<{ saveFile: { id: string, url: string } }>(SAVE_FILE);
  const {field} = useController({name: finalName});

  const onChange = useCallback(async (file: File | File[] | FileFieldState | FileFieldState[]) => {
    onChangeOverridden?.(file);

    const needLoadFileList: File[] = (Array.isArray(file) ? file : [file]).filter(isFile);

    for (const file of needLoadFileList) {
      field.onChange(null);

      try {
        const result = await loadFile({variables: {file}});

        // Todo: change after server saving
        const savedFile = result.data?.saveFile;

        if (!savedFile) {
          return;
        }

        const {id} = savedFile;

        field.onChange(id);
      } catch (error: any) {
        log.error(`Fail save file in back: ${error.message}`);

        // todo: off loader
        field.onChange(null);
      }
    }
  }, [loadFile, onChangeOverridden, field]);

  return (
    <RaFileInput
      onChange={onChange}
      accept={accept}
      {...rest}
    >
      <NonEmptyReferenceField
        {...rest}
        reference='files'
        id={field.value}
      >
        {type === 'image' ? <ImageField
          source='url'
          title='originalName'
          className={mc.img}
        /> : <FileField
          source='url'
          title='originalName'
        />}
      </NonEmptyReferenceField>
    </RaFileInput>
  );
};
