import * as React from 'react';
import {
  FC, createElement,
} from 'react';
import {
  Card, Box, Typography, Divider,
} from '@mui/base';
import {
  makeStyles,
  createStyles,
} from '@mui/styles';
import {
  Link,
} from 'react-router-dom';

export interface CardWithIconProps {
  icon: FC<any>;
  to?: string;
  title?: string;
  subtitle?: string | number;
}

const useStyles = makeStyles(theme => createStyles({
  card: {
    '& a': {
      color: 'inherit',
      textDecoration: 'none',
    },
    display: 'flex',
    flex: '1 1 160px',
    flexDirection: 'column',
    margin: theme.spacing(1),
    minHeight: 52,
    minWidth: '300px',
    wordWrap: 'break-word',
  },
  main: () => ({
    '& .icon': {
      color: theme.palette.type === 'dark' ? theme.palette.primary.dark : theme.palette.primary.light,
    },
    alignItems: 'center',

    // background: `url(${
    //   theme.palette.type === 'dark' ? cartoucheDark : cartouche
    // }) no-repeat`,
    display: 'flex',
    justifyContent: 'space-between',
    overflow: 'inherit',
    padding: 16,
  }),
  titleBox: {
    boxSizing: 'border-box',
    width: 'auto',
    maxWidth: '90%',
  },
}));

const CardWithIcon: FC<CardWithIconProps> = props => {
  const {to, children} = props;
  const classes = useStyles(props);

  return (
    <Card className={classes.card}>
      {to ?
        <Link to={to}>
          <HeaderView {...props} />
        </Link> :
        <HeaderView {...props} />}
      {children && <Divider />}
      {children}
    </Card>
  );
};

const HeaderView: FC<CardWithIconProps> = props => {
  const {icon, title, subtitle} = props;
  const classes = useStyles(props);

  return (
    <div className={classes.main}>
      <Box className='icon' width='3em'>
        {createElement(icon, {fontSize: 'large'})}
      </Box>
      <Box className={classes.titleBox} textAlign='right'>
        <Typography color='textSecondary'>
          {title}
        </Typography>
        <Typography component='h2' variant='h5'>
          {subtitle || ' '}
        </Typography>
      </Box>
    </div>
  );
};

export default CardWithIcon;
