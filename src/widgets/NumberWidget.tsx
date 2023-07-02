import * as React from 'react';
import {FC} from 'react';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import CardWithIcon, {
  CardWithIconProps,
} from './CardWithIcon/CardWithIcon';
import {
  DocumentNode, QueryHookOptions, useQuery,
} from '@apollo/client';

export interface NumberWidgetProps extends Omit<CardWithIconProps, 'icon'> {
  icon?: FC<any>;
  title?: string;
  measuring?: string;
  request: DocumentNode;
  options?: QueryHookOptions;
  resultToValue: (result: any) => number;
}

const NumberWidget: FC<NumberWidgetProps> = (
  {
    request,
    options,
    resultToValue,
    measuring = '',
    icon,
    ...rest},
) => {
  const {data: result} = useQuery(request, options);

  return (
    <CardWithIcon
      {...rest}
      icon={icon || ArrowForwardIosIcon}
      subtitle={String(resultToValue(result) || '0') + ' ' + measuring}
    />
  );
};

export default NumberWidget;
