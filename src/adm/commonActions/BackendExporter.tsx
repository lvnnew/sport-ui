import React, {FC, useCallback} from 'react';
import {
  useListContext,
  useResourceContext,
  Button,
  useDataProvider,
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

  const {mutate} = useMutation('downloadEntityRecords', dataProvider.downloadEntityRecords);

  const onClick = useCallback(() => {
    mutate({
      entityName: resource,
      filter: filterValues,
    });
  }, [resource, filterValues, mutate]);

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
