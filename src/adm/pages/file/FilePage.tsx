import React, {FC} from 'react';
import {SimpleForm} from 'react-admin';
import {FileInput} from '../../../uiLib/file/FileInput';

const FilePage: FC = () => {
  return (
    <SimpleForm>
      <FileInput
        label='Related files'
        multiple
        source='files'

        // accept="application/pdf"
      />
    </SimpleForm>
  );
};

export default FilePage;
