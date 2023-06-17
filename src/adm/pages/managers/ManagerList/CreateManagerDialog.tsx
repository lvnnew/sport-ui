import React, {useMemo, useCallback} from 'react';
import * as Yup from 'yup';
import {
  TextInput,
  useNotify,
  useTranslate,
  AutocompleteArrayInput,
  ReferenceArrayInput,
  Form,
  useDataProvider,
  useRefresh,
} from 'react-admin';
import {Button, Dialog, Grid, CircularProgress, DialogTitle, DialogContent} from '@mui/material';
import {makeStyles, createStyles} from '@mui/styles';
import {onlyLetters} from '../../../../utils/regExps';
import log from '../../../../utils/log';
import {yupResolver} from '@hookform/resolvers/yup';
import {useMutation} from 'react-query';
import {DataProvider} from '../../../../dataProvider/types';

interface CreateManagerDialogProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const useStyles = makeStyles(() => createStyles({
  buttonProgress: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: -12,
    marginLeft: -12,
  },
}));

const CreateManagerDialog = (props: CreateManagerDialogProps) => {
  const {open, setOpen} = props;
  const notify = useNotify();
  const refresh = useRefresh();

  const classes = useStyles();
  const t = useTranslate();

  const dataProvider = useDataProvider<DataProvider>();

  const {mutate: newManager, isLoading} = useMutation(
    'newManager',
    dataProvider.newManager,
    {
      onSuccess: () => {
        notify('Manager created');
        handleClose();
        refresh();
      },
    },
  );

  const handleClose = useCallback(() => {
    setOpen(false);
  }, [setOpen]);

  const onSubmit = useCallback(async (state: any) => {
    log.info(state);
    newManager({
      firstName: state.firstName,
      lastName: state.lastName,
      email: state.email,
      password: state.password,
      roles: state.roles,
    });
  }, [newManager]);

  const resolver = useMemo(() => yupResolver(
    Yup.object({
      firstName: Yup.string()
        .matches(onlyLetters, t('validation.onlyLatinLetters'))
        .min(2)
        .max(50)
        .required(),
      lastName: Yup.string()
        .matches(onlyLetters, t('validation.onlyLatinLetters'))
        .min(2)
        .max(50)
        .required(),
      email: Yup.string()
        .noSpaces().required(),
      password: Yup.string()
        .noSpaces()
        .min(6)
        .max(50)
        .required(),
    }),
  ), [t]);

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogContent>
        <DialogTitle style={{padding: 0, marginBottom: 30}}>Создание менеджера</DialogTitle>
        <Grid container spacing={2} >
          <Form onSubmit={onSubmit} resolver={resolver}>
            <Grid item xs={12} style={{minWidth: 500}}>
              <TextInput source='firstName' fullWidth />
            </Grid>
            <Grid item xs={12} style={{minWidth: 500}}>
              <TextInput source='lastName' fullWidth />
            </Grid>
            <Grid item xs={12} style={{minWidth: 500}}>
              <TextInput source='email' fullWidth />
            </Grid>
            <Grid item xs={12} style={{minWidth: 500}}>
              <TextInput source='password' fullWidth />
            </Grid>
            <Grid item xs={12} style={{minWidth: 500}}>
              <ReferenceArrayInput source='roles' reference='roles'>
                <AutocompleteArrayInput fullWidth optionText='title' />
              </ReferenceArrayInput>
            </Grid>
            <Grid item>
              <Button
                color='primary'
                disabled={isLoading}
                type='submit'
              >
                {t('app.create')}
                {isLoading && <CircularProgress className={classes.buttonProgress} size={24} />}
              </Button>
              <Button color='primary' onClick={handleClose}>
                {t('app.cancel')}
              </Button>
            </Grid>
          </Form>
        </Grid>
      </DialogContent>
    </Dialog>
  );
};

export default CreateManagerDialog;
