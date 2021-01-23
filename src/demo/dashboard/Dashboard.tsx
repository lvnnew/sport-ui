/* eslint-_disable_ @typescript-eslint/camelcase */
import React, {
  useState,
  useEffect,
  useCallback,
  FC,
  CSSProperties,
} from 'react';
import {
  useVersion, useDataProvider,
} from 'react-admin';
import {
  useMediaQuery, Theme,
} from '@material-ui/core';

import Welcome from './Welcome';
import MonthlyRevenue from './MonthlyRevenue';
import NbNewOrders from './NbNewOrders';
import PendingOrders from './PendingOrders';
import PendingReviews from './PendingReviews';
import NewCustomers from './NewCustomers';
import OrderChart from './OrderChart';

import {
  Customer, Order, Review,
} from '../../types';

interface OrderStats {
    revenue: number;
    nbNewOrders: number;
    pendingOrders: Order[];
}

interface CustomerData {
    [key: string]: Customer;
}

interface State {
    nbNewOrders?: number;
    nbPendingReviews?: number;
    pendingOrders?: Order[];
    pendingOrdersCustomers?: CustomerData;
    pendingReviews?: Review[];
    pendingReviewsCustomers?: CustomerData;
    recentOrders?: Order[];
    revenue?: string;
}

const styles = {
  flex: {display: 'flex'},
  flexColumn: {display: 'flex', flexDirection: 'column'},
  leftCol: {flex: 1, marginRight: '0.5em'},
  rightCol: {flex: 1, marginLeft: '0.5em'},
  singleCol: {marginBottom: '1em', marginTop: '1em'},
};

const Spacer = () => <span style={{width: '1em'}} />;
const VerticalSpacer = () => <span style={{height: '1em'}} />;

export const DemoDashboard: FC = () => {
  const [state, setState] = useState<State>({});
  const version = useVersion();
  const dataProvider = useDataProvider();
  const isXSmall = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down('xs'),
  );
  const isSmall = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down('md'),
  );

  const fetchOrders = useCallback(async () => {
    const aMonthAgo = new Date();
    aMonthAgo.setDate(aMonthAgo.getDate() - 30);
    const {data: recentOrders} = await dataProvider.getList<Order>(
      'commands',
      {
        filter: {date_gte: aMonthAgo.toISOString()},
        pagination: {page: 0, perPage: 50},
        sort: {field: 'date', order: 'DESC'},
      },
    );
    const aggregations = recentOrders
      .filter(order => order.status !== 'cancelled')
      .reduce(
        (stats: OrderStats, order) => {
          if (order.status !== 'cancelled') {
            stats.revenue += order.total;
            stats.nbNewOrders++;
          }
          if (order.status === 'ordered') {
            stats.pendingOrders.push(order);
          }

          return stats;
        },
        {
          nbNewOrders: 0,
          pendingOrders: [],
          revenue: 0,
        },
      );
    setState(state => ({
      ...state,
      nbNewOrders: aggregations.nbNewOrders,
      pendingOrders: aggregations.pendingOrders,
      recentOrders,
      revenue: aggregations.revenue.toLocaleString(undefined, {
        currency: 'USD',
        maximumFractionDigits: 0,
        minimumFractionDigits: 0,
        style: 'currency',
      }),
    }));
    const {data: customers} = await dataProvider.getMany<Customer>(
      'customers',
      {
        ids: aggregations.pendingOrders.map(
          (order: Order) => order.customer_id,
        ),
      },
    );
    setState(state => ({
      ...state,
      pendingOrdersCustomers: customers.reduce(
        (prev: CustomerData, customer) => {
          prev[customer.id] = customer; // eslint-disable-line no-param-reassign

          return prev;
        },
        {},
      ),
    }));
  }, [dataProvider]);

  const fetchReviews = useCallback(async () => {
    const {data: reviews} = await dataProvider.getList<Review>(
      'reviews',
      {
        filter: {status: 'pending'},
        pagination: {page: 0, perPage: 100},
        sort: {field: 'date', order: 'DESC'},
      },
    );
    // eslint-disable-next-line no-param-reassign
    const nbPendingReviews = reviews.reduce((nb: number) => ++nb, 0);
    const pendingReviews = reviews.slice(0, Math.min(10, reviews.length));
    setState(state => ({...state, nbPendingReviews, pendingReviews}));
    const {data: customers} = await dataProvider.getMany<Customer>(
      'customers',
      {
        ids: pendingReviews.map(review => review.customer_id),
      },
    );
    setState(state => ({
      ...state,
      pendingReviewsCustomers: customers.reduce(
        (prev: CustomerData, customer) => {
          prev[customer.id] = customer; // eslint-disable-line no-param-reassign

          return prev;
        },
        {},
      ),
    }));
  }, [dataProvider]);

  useEffect(() => {
    fetchOrders();
    fetchReviews();
  }, [version]); // eslint-disable-line_ react-hooks/exhaustive-deps

  const {
    nbNewOrders,
    nbPendingReviews,
    pendingOrders,
    pendingOrdersCustomers,
    pendingReviews,
    pendingReviewsCustomers,
    revenue,
    recentOrders,
  } = state;

  return isXSmall ? (
    <div>
      <div style={styles.flexColumn as CSSProperties}>
        <Welcome />
        <MonthlyRevenue value={revenue} />
        <VerticalSpacer />
        <NbNewOrders value={nbNewOrders} />
        <VerticalSpacer />
        <PendingOrders
          customers={pendingOrdersCustomers}
          orders={pendingOrders}
        />
      </div>
    </div>
  ) : isSmall ? (
    <div style={styles.flexColumn as CSSProperties}>
      <div style={styles.singleCol}>
        <Welcome />
      </div>
      <div style={styles.flex}>
        <MonthlyRevenue value={revenue} />
        <Spacer />
        <NbNewOrders value={nbNewOrders} />
      </div>
      <div style={styles.singleCol}>
        <OrderChart orders={recentOrders} />
      </div>
      <div style={styles.singleCol}>
        <PendingOrders
          customers={pendingOrdersCustomers}
          orders={pendingOrders}
        />
      </div>
    </div>
  ) : (
    <>
      <Welcome />
      <div style={styles.flex}>
        <div style={styles.leftCol}>
          <div style={styles.flex}>
            <MonthlyRevenue value={revenue} />
            <Spacer />
            <NbNewOrders value={nbNewOrders} />
          </div>
          <div style={styles.singleCol}>
            <OrderChart orders={recentOrders} />
          </div>
          <div style={styles.singleCol}>
            <PendingOrders
              customers={pendingOrdersCustomers}
              orders={pendingOrders}
            />
          </div>
        </div>
        <div style={styles.rightCol}>
          <div style={styles.flex}>
            <PendingReviews
              customers={pendingReviewsCustomers}
              nb={nbPendingReviews}
              reviews={pendingReviews}
            />
            <Spacer />
            <NewCustomers />
          </div>
        </div>
      </div>
    </>
  );
};
