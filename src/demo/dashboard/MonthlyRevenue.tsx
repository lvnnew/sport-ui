import * as React from 'react';
import {
  FC,
} from 'react';
import DollarIcon from '@material-ui/icons/AttachMoney';
import {
  useTranslate,
} from 'react-admin';

import CardWithIcon from './CardWithIcon';

interface Props {
    value?: string;
}

const MonthlyRevenue: FC<Props> = ({value}) => {
  const translate = useTranslate();

  return (
    <CardWithIcon
      icon={DollarIcon}
      subtitle={value}
      title={translate('pos.dashboard.monthly_revenue')}
      to='/commands'
    />
  );
};

export default MonthlyRevenue;
