import * as React from 'react';
import {
  FC,
} from 'react';
import {
  Card, CardHeader, CardContent,
} from '@mui/material';
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
} from 'recharts';

export interface BarChartWidgetProps {
  title?: string;
  rows: CountRow[];
}

interface CountRow {
  name: string;
  count: number;
}

const BarChartWidget: FC<BarChartWidgetProps> = ({title, rows}) => {
  return (
    <Card sx={{m: 1}}>
      <CardHeader title={title} />
      <CardContent>
        <ResponsiveContainer height={300} width='100%'>
          <BarChart
            data={rows}
          >
            <XAxis
              dataKey='name'
            />
            <YAxis dataKey='count' />
            <Tooltip
              cursor={{strokeDasharray: '3 3'}}
            />
            <Bar dataKey='count' fill='#31708f' />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default BarChartWidget;
