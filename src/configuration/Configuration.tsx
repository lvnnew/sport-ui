import * as React from 'react';
import {
  useSelector, useDispatch,
} from 'react-redux';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import {
  useTranslate, useLocale, useSetLocale, Title,
} from 'react-admin';
import {
  makeStyles,
} from '@material-ui/core/styles';
import {
  changeTheme,
} from './actions';
import {
  AppState,
} from '../types';

const useStyles = makeStyles({
  button: {margin: '1em'},
  label: {display: 'inline-block', width: '10em'},
});

const Configuration = () => {
  const translate = useTranslate();
  const locale = useLocale();
  const setLocale = useSetLocale();
  const classes = useStyles();
  const theme = useSelector((state: AppState) => state.theme);
  const dispatch = useDispatch();

  return (
    <Card>
      <Title title={translate('pos.configuration')} />
      <CardContent>
        <div className={classes.label}>
          {translate('pos.theme.name')}
        </div>
        <Button
          className={classes.button}
          color={theme === 'light' ? 'primary' : 'default'}
          onClick={() => dispatch(changeTheme('light'))}
          variant='contained'
        >
          {translate('pos.theme.light')}
        </Button>
        <Button
          className={classes.button}
          color={theme === 'dark' ? 'primary' : 'default'}
          onClick={() => dispatch(changeTheme('dark'))}
          variant='contained'
        >
          {translate('pos.theme.dark')}
        </Button>
      </CardContent>
      <CardContent>
        <div className={classes.label}>{translate('pos.language')}</div>
        <Button
          className={classes.button}
          color={locale === 'en' ? 'primary' : 'default'}
          onClick={() => setLocale('en')}
          variant='contained'
        >
          en
        </Button>
        <Button
          className={classes.button}
          color={locale === 'ru' ? 'primary' : 'default'}
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
