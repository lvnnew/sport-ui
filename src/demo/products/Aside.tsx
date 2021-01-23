/* eslint-_disable_ @typescript-eslint/camelcase */
import * as React from 'react';
import {
  FC,
} from 'react';
import inflection from 'inflection';
import {
  Card, CardContent,
} from '@material-ui/core';
import {
  makeStyles,
} from '@material-ui/core/styles';
import LocalOfferIcon from '@material-ui/icons/LocalOfferOutlined';
import BarChartIcon from '@material-ui/icons/BarChart';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import {
  FilterList,
  FilterListItem,
  FilterLiveSearch,
  useGetList,
} from 'react-admin';

import {
  Category,
} from '../../types';

const useStyles = makeStyles(theme => ({
  root: {
    [theme.breakpoints.up('sm')]: {
      marginRight: '1em',
      overflow: 'initial',
      width: '15em',
    },
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
}));

const Aside: FC = () => {
  const {data, ids} = useGetList<Category>(
    'categories',
    {page: 0, perPage: 100},
    {field: 'name', order: 'ASC'},
    {},
  );
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <FilterLiveSearch />

        <FilterList
          icon={<AttachMoneyIcon />}
          label='resources.products.filters.sales'
        >
          <FilterListItem
            label='resources.products.filters.best_sellers'
            value={{
              sales: undefined,
              sales_gt: 25,
              sales_lte: undefined,
            }}
          />
          <FilterListItem
            label='resources.products.filters.average_sellers'
            value={{
              sales: undefined,
              sales_gt: 10,
              sales_lte: 25,
            }}
          />
          <FilterListItem
            label='resources.products.filters.low_sellers'
            value={{
              sales: undefined,
              sales_gt: 0,
              sales_lte: 10,
            }}
          />
          <FilterListItem
            label='resources.products.filters.never_sold'
            value={{
              sales: 0,
              sales_gt: undefined,
              sales_lte: undefined,
            }}
          />
        </FilterList>

        <FilterList
          icon={<BarChartIcon />}
          label='resources.products.filters.stock'
        >
          <FilterListItem
            label='resources.products.filters.no_stock'
            value={{
              stock: 0,
              stock_gt: undefined,
              stock_lt: undefined,
            }}
          />
          <FilterListItem
            label='resources.products.filters.low_stock'
            value={{
              stock: undefined,
              stock_gt: 0,
              stock_lt: 10,
            }}
          />
          <FilterListItem
            label='resources.products.filters.average_stock'
            value={{
              stock: undefined,
              stock_gt: 9,
              stock_lt: 50,
            }}
          />
          <FilterListItem
            label='resources.products.filters.enough_stock'
            value={{
              stock: undefined,
              stock_gt: 49,
              stock_lt: undefined,
            }}
          />
        </FilterList>

        <FilterList
          icon={<LocalOfferIcon />}
          label='resources.products.filters.categories'
        >
          {ids &&
                        data &&
                        ids.map((id: any) => (
                          <FilterListItem
                            key={data[id].id}
                            label={inflection.humanize(data[id].name)}
                            value={{category_id: data[id].id}}
                          />
                        ))}
        </FilterList>
      </CardContent>
    </Card>
  );
};

export default Aside;
