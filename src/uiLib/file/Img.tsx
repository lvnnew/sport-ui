import React, {FC} from 'react';
import {makeStyles} from '@material-ui/core/styles';

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

export default Img;
