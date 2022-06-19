import React, {FC, ReactElement, useRef} from 'react';
import {
  ImageField,
  FileInput as RaFileInput,
  FileInputProps as RaFileInputProps,
  FileField,
  NonEmptyReferenceField,
} from 'react-admin';
import {gql, useMutation} from '@apollo/client';
import {useController} from 'react-hook-form';
import log from '../../utils/log';
import {makeStyles} from '@mui/styles';

export type FileInputProps = Readonly<RaFileInputProps & {
  type?: 'image';
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

const useStyles = makeStyles(() => ({
  img: {
    '& > img': {
      maxWidth: '100%',
      maxHeight: '25vw',
    },
  },
}));

const FileReferenceField: FC<Pick<FileInputProps, 'type'>> = ({type, ...rest}) => {
  const mc = useStyles();

  return (
    <NonEmptyReferenceField
      {...rest}
      reference='files'
      id={(rest as any).record} // This field adds the component above
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
  const refValue = useRef<Array<number | FileFieldState>>(field.value); // Only for multiple field
  refValue.current = field.value;

  // Todo: minimize
  const onChange = async (file: File | File[] | FileFieldState | FileFieldState[]) => {
    onChangeOverridden?.(file);

    const needLoadFileList: File[] = (Array.isArray(file) ? file : [file]).filter(isFile);
    // Todo: need check const value

    for (const file of needLoadFileList) {
      if (!multiple) {
        field.onChange(null);
      }

      // todo: check isMount...

      loadFile({variables: {file}}).then((result) => {
        // Todo: change after server saving
        const savedFile = result.data?.saveFile;

        if (!savedFile) {
          return;
        }

        const {id} = savedFile;

        if (multiple) {
          const value = refValue.current ?? [];
          const currentIdx = value.findIndex((f) => typeof f === 'object' && f.rawFile === file);

          // eslint-disable-next-line no-negated-condition
          if (currentIdx !== -1) {
            const newValue = [...value];
            newValue.splice(currentIdx, 1, id);

            field.onChange(newValue);
            refValue.current = newValue;
          } else {
            // todo: throw some error with status failed load image, maybe set notify
          }
        } else {
          field.onChange(id);
        }
      }).catch((error: any) => {
        log.error(`Fail save file in back: ${error.message}`);

        // todo: off loader
        if (multiple) {
          // todo: remove obj from values, Unblock save button
        } else {
          field.onChange(null);
        }
      });
    }
  };

  return (
    <RaFileInput
      onChange={onChange}
      accept={accept}
      multiple={multiple}
      {...rest}
    >
      <FileReferenceField type={type} {...rest} />
    </RaFileInput>
  );
};

// todo: добавить блокирование кнопки сохранения, когда файл загружается.
