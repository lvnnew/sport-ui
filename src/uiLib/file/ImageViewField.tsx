import React, {FC, ReactElement} from 'react';
import {useRecordContext} from 'react-admin';

import {File} from '../../generated/graphql';
import Img from './Img';

const ImageViewField: FC = () => {
  const record: File | File[] = useRecordContext();

  const render = (record: File): ReactElement => <Img key={record.id} src={record.url} alt={record.originalName} />;

  return <>{Array.isArray(record) ? record.map(render) : render(record)}</>;
};

export default ImageViewField;
