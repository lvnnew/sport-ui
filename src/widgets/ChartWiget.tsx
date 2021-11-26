import * as React from 'react';
import {
  FC,
} from 'react';
import {
  Card, CardHeader, CardContent,
} from '@mui/material';
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from 'recharts';
import {makeStyles, createStyles} from '@mui/styles';

// import {
//   useTranslate,
// } from 'react-admin';
import {
  Order,
} from '../types';

const useStyles = makeStyles((theme) => createStyles({
  card: {
    margin: (theme as any).spacing(1),
  },
}));

const lastDay = new Date(new Date().toDateString()).getTime();
const oneDay = 24 * 60 * 60 * 1000;
const lastMonthDays = Array.from(
  {length: 30},
  (_, i) => lastDay - i * oneDay,
).reverse();
const aMonthAgo = new Date();
aMonthAgo.setDate(aMonthAgo.getDate() - 30);

const dateFormatter = (date: number): string =>
  new Date(date).toLocaleDateString();

const aggregateOrdersByDay = (orders: Order[]): { [key: number]: number } =>
  orders
    .filter((order: Order) => order.status !== 'cancelled')
    .reduce((acc, curr) => {
      const day = new Date(new Date(curr.date).toDateString()).getTime();
      if (!acc[day]) {
        acc[day] = 0;
      }

      acc[day] += curr.total;

      return acc;
    }, {} as { [key: string]: number });

const getRevenuePerDay = (orders: Order[]): TotalByDay[] => {
  const daysWithRevenue = aggregateOrdersByDay(orders);

  return lastMonthDays.map(date => ({
    date,
    total: daysWithRevenue[date] || 0,
  }));
};

const ChartWiget: FC<{ orders?: Order[]; title?: string }> = ({orders, title}) => {
  const classes = useStyles();

  // const translate = useTranslate();
  if (!orders) {
    return null;
  }

  return (
    <Card className={classes.card}>
      <CardHeader title={title} />
      <CardContent>
        <div style={{height: 300, width: '100%'}}>
          <ResponsiveContainer>
            <AreaChart data={getRevenuePerDay(orders)}>
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
                dataKey='date'
                domain={[
                  aMonthAgo.getTime(),
                  Date.now(),
                ]}
                name='Date'
                reversed
                scale='time'
                tickFormatter={dateFormatter}
                type='number'
              />
              <YAxis dataKey='total' name='Revenue' unit='€' />
              <CartesianGrid strokeDasharray='3 3' />
              <Tooltip
                cursor={{strokeDasharray: '3 3'}}
                formatter={(value: any) =>
                  new Intl.NumberFormat(undefined, {
                    currency: 'USD',
                    style: 'currency',
                  }).format(value as any)}
                labelFormatter={(label: any) =>
                  dateFormatter(label)}
              />
              <Area
                dataKey='total'
                fill='url(#colorUv)'
                stroke='#8884d8'
                strokeWidth={2}
                type='monotone'
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

interface TotalByDay {
    date: number;
    total: number;
}

export default ChartWiget;
