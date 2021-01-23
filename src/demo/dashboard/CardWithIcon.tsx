import * as React from 'react';
import {
  FC, createElement,
} from 'react';
import {
  Card, Box, Typography, Divider,
} from '@material-ui/core';
import {
  makeStyles,
} from '@material-ui/core/styles';
import {
  Link,
} from 'react-router-dom';

import cartouche from './cartouche.png';
import cartoucheDark from './cartoucheDark.png';

interface Props {
    icon: FC<any>;
    to: string;
    title?: string;
    subtitle?: string | number;
}

const useStyles = makeStyles(theme => ({
  card: {
    '& a': {
      color: 'inherit',
      textDecoration: 'none',
    },
    display: 'flex',
    flex: '1',
    flexDirection: 'column',
    minHeight: 52,
  },
  main: () => ({
    '& .icon': {
      color: theme.palette.type === 'dark' ? 'inherit' : '#dc2440',
    },
    alignItems: 'center',
    background: `url(${
      theme.palette.type === 'dark' ? cartoucheDark : cartouche
    }) no-repeat`,
    display: 'flex',
    justifyContent: 'space-between',
    overflow: 'inherit',
    padding: 16,
  }),
  title: {},
}));

const CardWithIcon: FC<Props> = props => {
  const {icon, title, subtitle, to, children} = props;
  const classes = useStyles(props);

  return (
    <Card className={classes.card}>
      <Link to={to}>
        <div className={classes.main}>
          <Box className='icon' width='3em'>
            {createElement(icon, {fontSize: 'large'})}
          </Box>
          <Box textAlign='right'>
            <Typography
              className={classes.title}
              color='textSecondary'
            >
              {title}
            </Typography>
            <Typography component='h2' variant='h5'>
              {subtitle || ' '}
            </Typography>
          </Box>
        </div>
      </Link>
      {children && <Divider />}
      {children}
    </Card>
  );
};

export default CardWithIcon;
