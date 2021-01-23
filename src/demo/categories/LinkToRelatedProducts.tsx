/* eslint-_disable_ @typescript-eslint/camelcase */
import * as React from 'react';
import {
  FC,
} from 'react';
import Button from '@material-ui/core/Button';
import {
  makeStyles,
} from '@material-ui/core/styles';
import {
  Link,
} from 'react-router-dom';
import {
  useTranslate, FieldProps,
} from 'react-admin';
import {
  stringify,
} from 'query-string';

import products from '../products';
import {
  Category,
} from '../../types';

const useStyles = makeStyles({
  icon: {paddingRight: '0.5em'},
  link: {
    alignItems: 'center',
    display: 'inline-flex',
  },
});

const LinkToRelatedProducts: FC<FieldProps<Category>> = ({record}) => {
  const translate = useTranslate();
  const classes = useStyles();

  return record ? (
    <Button
      className={classes.link}
      color='primary'
      component={Link}
      size='small'
      to={{
        pathname: '/products',
        search: stringify({
          filter: JSON.stringify({category_id: record.id}),
        }),
      }}
    >
      <products.icon className={classes.icon} />
      {translate('resources.categories.fields.products')}
    </Button>
  ) : null;
};

export default LinkToRelatedProducts;
