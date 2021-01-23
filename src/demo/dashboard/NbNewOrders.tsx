import * as React from 'react';
import {
  FC,
} from 'react';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import {
  useTranslate,
} from 'react-admin';

import CardWithIcon from './CardWithIcon';

interface Props {
    value?: number;
}

const NbNewOrders: FC<Props> = ({value}) => {
  const translate = useTranslate();

  return (
    <CardWithIcon
      icon={ShoppingCartIcon}
      subtitle={value}
      title={translate('pos.dashboard.new_orders')}
      to='/commands'
    />
  );
};

export default NbNewOrders;
