import * as React from 'react';

import {
  Resource,
} from 'react-admin';

import visitors from './visitors';
import orders from './orders';
import products from './products';
import invoices from './invoices';
import categories from './categories';
import reviews from './reviews';

export const dmResources = [
  <Resource key='customers' name='customers' {...visitors} />,
  <Resource
    key='commands'
    name='commands'
    {...orders}
    options={{label: 'Orders'}}
  />,
  <Resource key='invoices' name='invoices' {...invoices} />,
  <Resource key='products' name='products' {...products} />,
  <Resource key='categories' name='categories' {...categories} />,
  <Resource key='reviews' name='reviews' {...reviews} />,
];
