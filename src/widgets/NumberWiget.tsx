import * as React from 'react';
import {
  FC, useEffect,
} from 'react';
import {
  useVersion,
} from 'react-admin';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import CardWithIcon, {
  CardWithIconProps,
} from './CardWithIcon/CardWithIcon';
import {
  DocumentNode, QueryHookOptions, useQuery,
} from '@apollo/client';

export interface NumberWigetProps extends Omit<CardWithIconProps, 'icon'> {
  icon?: FC<any>;
  title?: string;
  measuring?: string;
  request: DocumentNode;
  options?: QueryHookOptions;
  resultToValue: (result: any) => number;
}

const NumberWiget: FC<NumberWigetProps> = (
  {
    request,
    options,
    resultToValue,
    measuring = '',
    icon,
    ...rest},
) => {
  const {data: result, refetch} = useQuery(request, options);
  const version = useVersion();

  useEffect(() => {
    refetch();
  }, [refetch, version]);

  return (
    <CardWithIcon
      {...rest}
      icon={icon || ArrowForwardIosIcon}
      subtitle={String(resultToValue(result) || '0') + ' ' + measuring}
    />
  );
};

export default NumberWiget;
