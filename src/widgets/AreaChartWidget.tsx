import * as React from 'react';
import {
  FC,
} from 'react';
import {
  Card,
  CardHeader,
  CardContent,
} from '@mui/material';
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
} from 'recharts';

interface CountRow {
  name: string;
  count: number;
}

export interface AreaChartWidgetProps {
  title?: string;
  rows: CountRow[];
}

const AreaChartWidget: FC<AreaChartWidgetProps> = ({title, rows}) => {
  return (
    <Card style={{margin: 8}}>
      <CardHeader title={title} />
      <CardContent>
        <ResponsiveContainer height={300} width='100%'>
          <AreaChart
            data={rows}
          >
            <defs>
              <linearGradient
                id='colorUv'
                x1='0'
                x2='0'
                y1='0'
                y2='1'
              >
                <stop
                  offset='5%'
                  stopColor='#8884d8'
                  stopOpacity={0.8}
                />
                <stop
                  offset='95%'
                  stopColor='#8884d8'
                  stopOpacity={0}
                />
              </linearGradient>
            </defs>
            <XAxis
              dataKey='name'
            />
            <YAxis dataKey='count' />
            <Tooltip
              cursor={{strokeDasharray: '3 3'}}
            />
            <Area
              dataKey='count'
              fill='url(#colorUv)'
              stroke='#8884d8'
              strokeWidth={2}
              type='monotone'
            />
          </AreaChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default AreaChartWidget;
