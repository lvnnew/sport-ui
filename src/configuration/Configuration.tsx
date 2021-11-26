import * as React from 'react';
import {
  useSelector, useDispatch,
} from 'react-redux';
import {Card, CardContent, Button} from '@mui/material';
import {
  useTranslate, useLocale, useSetLocale, Title,
} from 'react-admin';
import {makeStyles, createStyles} from '@mui/styles';
import {
  changeTheme,
} from './actions';
import {
  AppState,
} from '../types';

const useStyles = makeStyles(() => createStyles({
  button: {margin: '1em'},
  label: {display: 'inline-block', width: '10em'},
}));

const Configuration = () => {
  const translate = useTranslate();
  const locale = useLocale();
  const setLocale = useSetLocale();
  const classes = useStyles();
  const theme = useSelector((state: AppState) => state.theme);
  const dispatch = useDispatch();

  return (
    <Card>
      <Title title={translate('app.configuration')} />
      <CardContent>
        <div className={classes.label}>
          {translate('app.theme.name')}
        </div>
        <Button
          className={classes.button}
          color={theme === 'light' ? 'primary' : 'secondary'}
          onClick={() => dispatch(changeTheme('light'))}
          variant='contained'
        >
          {translate('app.theme.light')}
        </Button>
        <Button
          className={classes.button}
          color={theme === 'dark' ? 'primary' : 'secondary'}
          onClick={() => dispatch(changeTheme('dark'))}
          variant='contained'
        >
          {translate('app.theme.dark')}
        </Button>
      </CardContent>
      <CardContent>
        <div className={classes.label}>{translate('app.language')}</div>
        <Button
          className={classes.button}
          color={locale === 'en' ? 'primary' : 'secondary'}
          onClick={() => setLocale('en')}
          variant='contained'
        >
          en
        </Button>
        <Button
          className={classes.button}
          color={locale === 'ru' ? 'primary' : 'secondary'}
          onClick={() => setLocale('ru')}
          variant='contained'
        >
          ru
        </Button>
      </CardContent>
    </Card>
  );
};

export default Configuration;
