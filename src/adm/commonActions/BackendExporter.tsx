import React, {FC, useCallback} from 'react';
import {
  useListContext,
  useResourceContext,
  Button,
  useDataProvider,
  useNotify,
} from 'react-admin';
import DownloadIcon from '@mui/icons-material/GetApp';
import {useMutation} from 'react-query';
import {DataProvider} from '../../dataProvider/types';
import log from '../../utils/log';

const BackendExporter: FC = () => {
  const {
    filter,
    filterValues,
    sort,
    total,
  } = useListContext();
  const dataProvider = useDataProvider<DataProvider>();
  const notify = useNotify();

  log.info('useListContext');
  log.info({
    filter,
    filterValues,
    sort,
    total,
  });

  const resource = useResourceContext();
  log.info('resource');
  log.info(resource);

  const {mutateAsync} = useMutation('downloadEntityRecords', dataProvider.downloadEntityRecords);

  const onClick = useCallback(async () => {
    await mutateAsync({
      entityName: resource,
      filter: filterValues,
    });

    notify('Файл будет отправлен на email через несколько минут');
  }, [resource, filterValues, mutateAsync, notify]);

  return (
    <Button
      label='ra.action.export'
      disabled={total === 0}
      onClick={onClick}
    >
      <DownloadIcon />
    </Button>
  );
};

export default BackendExporter;
