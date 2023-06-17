/* eslint-disable max-len */
import React, {useCallback} from 'react';
import {
  BulkActionProps,
  useDataProvider,
  useNotify,
  useRefresh,
  useTranslate,
  useUnselectAll,
} from 'react-admin';
import {Button, MenuItem} from '@mui/material';
import {useMutation} from 'react-query';
import {DataProvider} from '../../../../dataProvider/types';

const BulkDeactivateButton = ({selectedIds}: BulkActionProps) => {
  const notify = useNotify();
  const refresh = useRefresh();
  const t = useTranslate();
  const unselectAll = useUnselectAll('managers');

  const dataProvider = useDataProvider<DataProvider>();

  const {mutate: deactivateManagers, isLoading} = useMutation(
    [
      'deactivateManagers',
      [selectedIds],
    ],
    dataProvider.deactivateManagers,
    {
      onSuccess: () => {
        refresh();
        notify('Менеджеры деактивированы');
        unselectAll();
      },
    },
  );

  const onClick = useCallback(async () => {
    if (selectedIds) {
      await deactivateManagers(selectedIds as number[]);
    }
  }, [deactivateManagers, selectedIds]);

  return (
    <MenuItem>
      <Button
        color='primary'
        disabled={isLoading}
        size='medium'
        variant='contained'
        onClick={onClick}
      >
        {t('managers.deactivate')}
      </Button>
    </MenuItem>
  );
};

export default BulkDeactivateButton;
