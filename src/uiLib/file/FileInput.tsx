import React, {FC, ReactElement, useRef} from 'react';
import {
  ImageField,
  FileInput as RaFileInput,
  FileInputProps as RaFileInputProps,
  FileField,
  NonEmptyReferenceField,
  useIsMounted,
  useRecordContext,
  useNotify,
  useTranslate,
} from 'react-admin';
import {gql, useMutation} from '@apollo/client';
import {useController} from 'react-hook-form';
import log from '../../utils/log';
import {getUniqSaveId, useLoadingContext} from '../../contexts/LoadingContext';

export type FileInputProps = Readonly<RaFileInputProps & {
  type?: 'image';
  maxFiles?: number;
}>;

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

const Field: FC<Pick<FileInputProps, 'type'>> = ({type}) => (
  type === 'image' ? <ImageField
    source='url'
    title='originalName'
    sx={{
      '& > img': {
        maxWidth: '100%',
        maxHeight: '25vw',
      },
    }}
  /> : <FileField
    source='url'
    title='originalName'
  />
);

const FileReferenceField: FC<Pick<FileInputProps, 'type'>> = ({type, ...rest}) => {
  const record = useRecordContext(rest) as number | FileFieldState;

  if (typeof record !== 'number') {
    return <Field type={type} />;
  }

  return (
    <NonEmptyReferenceField
      {...rest}
      reference='files'
      id={record} // This field adds the component above
    >
      <Field type={type} />
    </NonEmptyReferenceField>
  );
};

const isFile = (file: File | any): file is File => file instanceof File;

export const FileInput: FC<FileInputProps> = (props) => {
  const {
    onChange: onChangeOverridden,
    type,
    multiple,
    accept = type === 'image' ? 'image/png, image/jpeg, image/webp, image/svg' : undefined,
    ...rest
  } = props;
  const finalName = props.name || props.source;

  const [loadFile] = useMutation<{ saveFile: { id: number, url: string } }>(SAVE_FILE);
  const {field} = useController({name: finalName});
  const setLoader = useLoadingContext();
  const isMounted = useIsMounted();
  const refValue = useRef<Array<number | FileFieldState>>(field.value); // Only for multiple field
  refValue.current = field.value;
  const notify = useNotify();
  const t = useTranslate();

  const onChange = (file: File | File[] | FileFieldState | FileFieldState[]) => {
    onChangeOverridden?.(file);

    const needLoadFileList: File[] = (Array.isArray(file) ? file : [file]).filter(isFile);
    if (!isMounted.current) {
      return;
    }

    for (const file of needLoadFileList) {
      const fileId = getUniqSaveId();
      setLoader?.({[fileId]: true});
      if (!multiple) {
        field.onChange(null);
      }

      loadFile({variables: {file}}).then((result) => {
        if (!isMounted.current) {
          return;
        }

        const savedFile = result.data?.saveFile;

        if (!savedFile) {
          return;
        }

        const {id} = savedFile;

        if (multiple) {
          const value = refValue.current ?? [];
          const currentIdx = value.findIndex((f) => typeof f === 'object' && f.rawFile === file);

          if (currentIdx !== -1) {
            const newValue = [...value];
            newValue.splice(currentIdx, 1, id);

            field.onChange(newValue);
            refValue.current = newValue;
          }
        } else {
          field.onChange(id);
        }
      }).catch((error: any) => {
        log.error(`Fail save file in back: ${error.message}`);
        if (!isMounted.current) {
          return;
        }

        if (multiple) {
          const value = (refValue.current ?? []).filter((f) => typeof f !== 'object' || f.rawFile !== file);

          field.onChange(value);
        } else {
          field.onChange(null);
        }
      }).finally(() => {
        if (!isMounted.current) {
          return;
        }

        setLoader?.({[fileId]: false});
      });
    }
  };

  return (
    <RaFileInput
      onChange={onChange}
      accept={accept}
      multiple={multiple}
      options={{
        onDropRejected: (fileRejections: any[]) => {
          log.info(fileRejections);
          notify(fileRejections[0].errors[0].code === 'file-too-large' ?
            t('validation.fileTooLarge', {max: props.maxSize}) :
            t('validation.fileInvalidType'), {type: 'error'});
        },
      }}
      {...rest}
    >
      <FileReferenceField type={type} {...rest} />
    </RaFileInput>
  );
};
