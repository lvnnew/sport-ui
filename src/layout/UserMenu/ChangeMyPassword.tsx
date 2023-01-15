import * as React from 'react';
import {useCallback, useMemo, FC} from 'react';
import {
  useUserMenu,
  useRefresh,
  useTranslate,
  Form,
  TextInput,
  useNotify,
} from 'react-admin';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import * as Yup from 'yup';
import {Button, Grid, CircularProgress} from '@mui/material';
import {makeStyles, createStyles} from '@mui/styles';
import {gql, useMutation} from '@apollo/client';
import {yupResolver} from '@hookform/resolvers/yup';
import ButtonModal from '../../uiLib/ButtonModal';
import {useModal} from '../../uiLib/contexts/ModalContext';
import log from '../../utils/log';
import {passwordRegExp} from '../../utils/regExps';

const useStyles = makeStyles(() => createStyles({
  buttonProgress: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: -12,
    marginLeft: -12,
  },
}));

export const CHANGE_PASSWORD = gql`
  mutation changePassword(
    $password: String!
  ) {
    changePassword(
      password: $password
    )
  }
`;

const ChangeMyPasswordForm: FC = () => {
  const classes = useStyles();
  const {close} = useModal();
  const refresh = useRefresh();
  const t = useTranslate();
  const notify = useNotify();

  const [changePassword, {loading}] = useMutation(CHANGE_PASSWORD);

  const onSubmit = useCallback(async (state: any) => {
    try {
      await changePassword({
        variables: {
          password: state.password,
        },
      });
      notify('Пароль изменён', {type: 'success'});
    } catch (error) {
      log.info(error);
    }

    close();
    refresh();
  }, [notify, close, refresh, changePassword]);

  const resolver = useMemo(() => yupResolver(
    Yup.object({
      password: Yup.string()
        .matches(passwordRegExp, t('validation.passwordRegExp'))
        .min(6, t('validation.minLength', {min: 6}))
        .max(30, t('validation.maxLength', {max: 30}))
        .required()
        .typeError(t('validation.required')),
    }),
  ), [t]);

  return (
    <Form onSubmit={onSubmit} resolver={resolver}>
      <Grid container spacing={2}>
        <Grid item xs={12} marginTop={0.5}>
          <TextInput source='password' label={t('app.newPassword')} />
        </Grid>
        <Grid item xs={12}>
          <Button
            color='primary'
            style={{marginLeft: 10}}
            type='submit'
            variant='contained'
            disabled={loading}
          >
            Изменить
            {loading && <CircularProgress className={classes.buttonProgress} size={24} />}
          </Button>
        </Grid>
      </Grid>
    </Form>
  );
};

const ChangeMyPassword: FC = () => {
  const t = useTranslate();
  const {onClose} = useUserMenu();
  return (
    <MenuItem
      onClick={onClose}
    >
      <ListItemIcon>
        <LockOutlinedIcon />
      </ListItemIcon>
      <ListItemText>
        <ButtonModal
          dialogTitleText={t('app.changePasswordByManagerId')}
          buttonText={t('app.changePasswordByManagerId')}
          style={{color: 'grey'}}
        >
          <ChangeMyPasswordForm />
        </ButtonModal>
      </ListItemText>
    </MenuItem>
  );
};

export default ChangeMyPassword;
