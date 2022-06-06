/* eslint-disable max-len */
import React, {useCallback, useState} from 'react';
import {
  useNotify,
  useRefresh,
  useTranslate,
  Confirm,
} from 'react-admin';
import {Button, MenuItem} from '@mui/material';
import {gql, useMutation} from '@apollo/client';

export const DEACTIVATE_MANAGERS = gql`
  mutation deactivateManagers($managerIds: [Int!]!) {
    deactivateManagers(managerIds: $managerIds)
  }
`;

interface DeactivateManagerButtonProps {
  managerIds: [number];
}

const DeactivateManagerButton = ({managerIds}: DeactivateManagerButtonProps) => {
  const notify = useNotify();
  const refresh = useRefresh();
  const t = useTranslate();

  const [openConfirm, setOpenConfirm] = useState(false);
  const [deactivateManagers, {loading}] = useMutation(DEACTIVATE_MANAGERS);

  const handleClick = () => setOpenConfirm(true);
  const handleDialogClose = () => {
    setOpenConfirm(false);
  };

  const handleConfirm = useCallback(async () => {
    await deactivateManagers({
      variables: {managerIds},
    });
    setOpenConfirm(false);
    notify(t('managers.deactivated'));
    refresh();
  }, [notify, deactivateManagers, refresh, managerIds, t]);

  return (
    <MenuItem>
      <Button
        color='primary'
        disabled={loading}
        size='medium'
        variant='contained'
        onClick={handleClick}
      >
        {t('managers.deactivate')}
      </Button>
      <Confirm
        isOpen={openConfirm}
        loading={loading}
        title={t('managers.deactivate')}
        content='Are you sure you want to deactivated this manager?'
        onConfirm={handleConfirm}
        onClose={handleDialogClose}
      />
    </MenuItem>
  );
};

export default DeactivateManagerButton;
