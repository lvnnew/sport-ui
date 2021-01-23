import * as React from 'react';
import {
  FC, useEffect,
} from 'react';
import {
  useVersion,
} from 'react-admin';
import {
  DocumentNode, QueryHookOptions, useQuery,
} from '@apollo/client';
import AreaChartWidget, {AreaChartWidgetProps} from './AreaChartWidget';

interface CountRow {
  name: string;
  count: number;
}

export interface AreaChartGQLWidgetProps extends Omit<AreaChartWidgetProps, 'rows'> {
  request: DocumentNode;
  options?: QueryHookOptions;
  resultToValue: (result: any) => CountRow[];
}

const AreaChartGQLWidget: FC<AreaChartGQLWidgetProps> = ({title, request, options, resultToValue}) => {
  const {data: result, refetch} = useQuery(request, options);
  const version = useVersion();

  useEffect(() => {
    refetch();
  }, [refetch, version]);

  return <AreaChartWidget title={title} rows={resultToValue(result)} />;
};

export default AreaChartGQLWidget;
