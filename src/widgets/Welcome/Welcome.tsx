import * as React from 'react';
import {
  FC,
} from 'react';
import {
  Box, Card, CardActions, Button, Typography,
} from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import CodeIcon from '@material-ui/icons/Code';
import {
  makeStyles,
} from '@material-ui/core/styles';
import {
  useTranslate,
} from 'react-admin';

import publishArticleImage from './welcome_illustration.svg';

const useStyles = makeStyles(theme => ({
  actions: {
    [theme.breakpoints.down('md')]: {
      '& a': {
        marginLeft: '0!important',
        marginRight: '1em',
        marginTop: '1em',
      },
      flexWrap: 'wrap',
      padding: 0,
    },
  },
  media: {
    background: `url(${publishArticleImage}) top right / cover`,
    marginLeft: 'auto',
  },
  root: {
    background:
            theme.palette.type === 'dark' ?
              '#535353' :
              // eslint-disable-next-line max-len
              'linear-gradient(to right, #8975fb 0%, #746be7 35%), linear-gradient(to bottom, #8975fb 0%, #6f4ceb 50%), #6f4ceb',

    color: '#fff',
    marginBottom: '1em',
    marginTop: theme.spacing(2),
    padding: 20,
  },
}));

const Welcome: FC = () => {
  const translate = useTranslate();
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <Box display='flex'>
        <Box flex='1'>
          <Typography component='h2' gutterBottom variant='h5'>
            {translate('app.dashboard.welcome.title')}
          </Typography>
          <Box maxWidth='40em'>
            <Typography component='p' gutterBottom variant='body1'>
              {translate('app.dashboard.welcome.subtitle')}
            </Typography>
          </Box>
          <CardActions className={classes.actions}>
            <Button
              href='https://marmelab.com/react-admin'
              startIcon={<HomeIcon />}
              variant='contained'
            >
              {translate('app.dashboard.welcome.ra_button')}
            </Button>
            <Button
              href='https://github.com/marmelab/react-admin/tree/master/examples/demo'
              startIcon={<CodeIcon />}
              variant='contained'
            >
              {translate('app.dashboard.welcome.demo_button')}
            </Button>
          </CardActions>
        </Box>

        <Box
          className={classes.media}
          display={{md: 'block', sm: 'none', xs: 'none'}}
          height='9em'
          overflow='hidden'
          width='16em'
        />
      </Box>
    </Card>
  );
};

export default Welcome;
