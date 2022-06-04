import React, {FC, ReactElement} from 'react';
import {NonEmptyReferenceField, useRecordContext, ReferenceFieldProps} from 'react-admin';
import {makeStyles} from '@mui/styles';

import {File} from '../../generated/graphql';

const useStyles = makeStyles<any, {src: string, alt?: string, type?: 'preview'}>(() => ({
  img: ({type}) => (type === 'preview' ? {
    maxWidth: '20vw',
    maxHeight: 36,
    transform: 'translateY(40%)',
  } : {
    maxWidth: '100%',
    maxHeight: '200px',
  }),
}));

const Img: FC<{src: string, alt?: string, type?: 'preview'}> = (props) => {
  const mc = useStyles(props);

  return <img className={mc.img} {...props} />;
};

const ImageView: FC = () => {
  const record: File | File[] = useRecordContext();

  const render = (record: File): ReactElement => <Img key={record.id} src={record.url} alt={record.originalName} />;

  return <>{Array.isArray(record) ? record.map(render) : render(record)}</>;
};

type ImageViewFieldProps = Readonly<Pick<ReferenceFieldProps, 'label' | 'source' | 'reference'>>;

const ImageViewField: FC<ImageViewFieldProps> = ({
  source,
  ...rest
}) => {
  const record = useRecordContext();

  return (
    <NonEmptyReferenceField
      link={false}
      id={record[source]}
      {...rest}
    >
      <ImageView />
    </NonEmptyReferenceField>
  );
};

export default ImageViewField;
