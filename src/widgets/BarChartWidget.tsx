import * as React from 'react';
import {
  FC,
} from 'react';
import {
  Card, CardHeader, CardContent,
} from '@material-ui/core';
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
} from 'recharts';
import {
  makeStyles,
  createStyles,
} from '@material-ui/core/styles';

export interface BarChartWidgetProps {
  title?: string;
  rows: CountRow[];
}

interface CountRow {
  name: string;
  count: number;
}

const useStyles = makeStyles((theme) => createStyles({
  card: {
    margin: theme.spacing(1),
  },
}));

const BarChartWidget: FC<BarChartWidgetProps> = ({title, rows}) => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
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
