import React, {FC} from 'react';
import {SimpleForm, FileField} from 'react-admin';
import {FileInput} from './FileInput';

const FilePage: FC = () => {
  return (
    <SimpleForm>
      <FileInput
        label='Related files'
        multiple
        source='files'

        // accept="application/pdf"
      >
        <FileField
          source='src'
          title='title'
        />
      </FileInput>
    </SimpleForm>
  );
};

export default FilePage;
