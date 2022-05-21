/* eslint-disable react/no-unused-prop-types */
import * as React from 'react';
import {
  FC, createElement, ReactNode,
} from 'react';
import {
  Card,
  Box,
  Typography,
  Link,
} from '@mui/material';
import {makeStyles, createStyles} from '@mui/styles';

export interface CardWithIconProps {
  icon: FC<any>;
  to?: string;
  openInNewWindow?: boolean;
  title?: string;
  subtitle?: string | number;
  children?: ReactNode | ReactNode[];
}

const useStyles = makeStyles(() => createStyles({
  card: {
    '& a': {
      color: 'inherit',
      textDecoration: 'none',
    },
    display: 'flex',
    flex: '1 1 160px',
    flexDirection: 'column',
    minHeight: 52,
    minWidth: '300px',
    wordWrap: 'break-word',
  },
  titleBox: {
    boxSizing: 'border-box',
    width: 'auto',
    maxWidth: '90%',
  },
}));

const CardWithIcon: FC<CardWithIconProps> = props => {
  const {to, children, openInNewWindow} = props;
  const classes = useStyles(props);

  return (
    <Card className={classes.card} style={{margin: 8}}>
      {to ?
        <Link href={to} target={openInNewWindow ? '_blank' : undefined}>
          <HeaderView {...props} />
        </Link> :
        <HeaderView {...props} />}
      <Box
        sx={{
          textAlign: 'end',
          padding: 1,
        }}
      >
        {children}
      </Box>
    </Card>
  );
};

const HeaderView: FC<CardWithIconProps> = props => {
  const {icon, title, subtitle} = props;
  const classes = useStyles(props);

  return (
    <Box
      sx={{
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'space-between',
        overflow: 'inherit',
        padding: 2,
        paddingBottom: 0,
      }}
    >
      <Box
        className='icon'
        width='3em'
        sx={{color: (theme) => (theme.palette.mode === 'dark' ? 'primary.dark' : 'primary.light')}}
      >
        {createElement(icon, {fontSize: 'large'})}
      </Box>
      <Box className={classes.titleBox} textAlign='right'>
        <Typography color='textSecondary'>
          {title}
        </Typography>
        {subtitle && <Typography component='h2' variant='h5'>
          {subtitle}
        </Typography>}
      </Box>
    </Box>
  );
};

export default CardWithIcon;
