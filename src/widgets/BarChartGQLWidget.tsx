import * as React from 'react';
import {FC} from 'react';
import {
  DocumentNode,
  QueryHookOptions,
  useQuery,
} from '@apollo/client';
import BarChartWidget, {BarChartWidgetProps} from './BarChartWidget';

export interface BarChartGQLWidgetProps extends Omit<BarChartWidgetProps, 'rows'> {
  request: DocumentNode;
  options?: QueryHookOptions;
  resultToValue: (result: any) => CountRow[];
}

interface CountRow {
  name: string;
  count: number;
}

const BarChartGQLWidget: FC<BarChartGQLWidgetProps> = ({title, request, options, resultToValue}) => {
  const {data: result} = useQuery(request, options);

  return <BarChartWidget title={title} rows={resultToValue(result)} />;
};

export default BarChartGQLWidget;
