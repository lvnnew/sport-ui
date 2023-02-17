/* eslint-disable max-len */
import React, {useCallback, useMemo, FC} from 'react';
import {
  useRefresh,
  useTranslate,
  Form,
  TextInput,
  useRecordContext,
  useNotify,
} from 'react-admin';
import * as Yup from 'yup';
import {Button, Grid, CircularProgress} from '@mui/material';
import {makeStyles, createStyles} from '@mui/styles';
import {gql, useMutation} from '@apollo/client';
import {yupResolver} from '@hookform/resolvers/yup';
import log from '../../../../../utils/log';
import ButtonModal from '../../../../../uiLib/ButtonModal';
import {useModal} from '../../../../../uiLib/contexts/ModalContext';
import {password} from '../../../../../utils/regExps';

const useStyles = makeStyles(() => createStyles({
  buttonProgress: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: -12,
    marginLeft: -12,
  },
}));

export const CHANGE_PASSWORD_BY_MANAGER_ID = gql`
  mutation changePasswordByManagerId(
    $password: String!, 
    $managerId: Int!
  ) {
    changePasswordByManagerId(
      password: $password
      managerId: $managerId
      )
  }
`;

const ChangeManagerPasswordButtonForm: FC = () => {
  const classes = useStyles();
  const record = useRecordContext();
  const {close} = useModal();
  const refresh = useRefresh();
  const t = useTranslate();
  const notify = useNotify();

  const [changePasswordByManagerId, {loading}] = useMutation(CHANGE_PASSWORD_BY_MANAGER_ID);

  const onSubmit = useCallback(async (state: any) => {
    try {
      await changePasswordByManagerId({
        variables: {
          managerId: record?.id,
          password: state.password,
        },
      });
      notify('Пароль изменён', {type: 'success'});
    } catch (error) {
      log.info(error);
    }

    close();
    refresh();
  }, [notify, close, refresh, changePasswordByManagerId, record]);

  const resolver = useMemo(() => yupResolver(
    Yup.object({
      password: Yup.string()
        .matches(password, t('validation.password'))
        .min(6, t('validation.minLength', {min: 6}))
        .max(30, t('validation.maxLength', {max: 30}))
        .required()
        .typeError(t('validation.required')),
    }),
  ), [t]);

  if (!record) {
    return null;
  }

  return (
    <Form onSubmit={onSubmit} resolver={resolver}>
      <Grid container spacing={2}>
        <Grid item xs={12} marginTop={0.5}>
          <TextInput source='password' label={t('app.newPassword')} />
        </Grid>
        <Grid item xs={12}>
          <Button
            color='primary'
            size='large'
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

const ChangeManagerPasswordButton = () => {
  const t = useTranslate();

  return (
    <ButtonModal
      dialogTitleText={t('app.changePasswordByManagerId')}
      buttonText={t('app.changePasswordByManagerId')}
      color='primary'
      variant='contained'
    >
      <ChangeManagerPasswordButtonForm />
    </ButtonModal>
  );
};

export default ChangeManagerPasswordButton;
