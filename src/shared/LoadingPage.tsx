import React, {
  FC,
  memo,
} from 'react';
import {
  makeStyles,
} from '@material-ui/core/styles';

// import CircularProgress from '@material-ui/core/CircularProgress';
// import Typography from '@material-ui/core/Typography';

export interface ILoadingPageProps {
  title?: string;
}

const useStyles = makeStyles((theme) => {
  return {
    loader: {
      display: 'table',
      margin: '0 auto 15px',
    },
    root: {
      alignItems: 'center',
      background:
      'black linear-gradient(45deg, ' +
      theme.palette.secondary + '08 0%,' +
      theme.palette.secondary + '08 9%,' +
      theme.palette.secondary + 'ff 100%)',
      display: 'flex',
      height: '100vh',
      justifyContent: 'center',
      padding: '40px 16px',
      width: '100vw',
    },
    title: {
      color: 'white',
      fontSize: 14,
      fontWeight: theme.typography.fontWeightBold,
      textAlign: 'center',
      textTransform: 'uppercase',
    },
  };
});

const LoadingPage: FC<ILoadingPageProps> = memo((props: ILoadingPageProps) => {
  // const {title} = props;
  const mc = useStyles(props);

  return (
    <div className={mc.root} />
  );
});

export default LoadingPage;
