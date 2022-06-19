import React, {FC} from 'react';
import {SimpleForm} from 'react-admin';
import {FileInput} from '../../../uiLib/file/FileInput';

const STORAGE_FILES = 'STORAGE_FILES';

const FilePage: FC = () => {
  const storageData = localStorage.getItem(STORAGE_FILES);
  const defaultValues = storageData ? JSON.parse(storageData) : {files: [30, 31], images: [30, 31]};

  const onSubmit = (data: any) => {
    localStorage.setItem(STORAGE_FILES, JSON.stringify(data));
  };

  return (
    <SimpleForm
      defaultValues={defaultValues}
      onSubmit={onSubmit}
    >
      <FileInput
        label='Related files'
        multiple
        source='files'
      />
      <FileInput
        label='Only image file!'
        multiple
        source='images'
        type='image'
      />
      <FileInput
        label='Only one image file! Without multiple'
        source='img'
        type='image'
      />
    </SimpleForm>
  );
};

export default FilePage;
