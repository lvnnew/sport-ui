import * as React from 'react';
import {FC} from 'react';
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
  const {data: result} = useQuery(request, options);

  return <AreaChartWidget title={title} rows={resultToValue(result)} />;
};

export default AreaChartGQLWidget;
