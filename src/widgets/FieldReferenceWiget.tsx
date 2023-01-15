import * as React from 'react';
import {
  FC,
} from 'react';
import {
  ReferenceField,
} from 'react-admin';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import CardWithIcon, {CardWithIconProps} from './CardWithIcon/CardWithIcon';

export interface FieldReferenceWigetProps extends Omit<CardWithIconProps, 'icon'> {
  icon?: FC<any>;
  title?: string;
  source: string;
  reference: string;
  defaultValue?: string;
}

const FieldReferenceWiget: FC<FieldReferenceWigetProps> = (
  {
    source,
    reference,
    icon,
    defaultValue,
    ...rest
  },
) => {
  return (
    <CardWithIcon
      {...rest}
      icon={icon || ArrowForwardIosIcon}
    >
      <ReferenceField
        link='show'
        reference={reference}
        source={source}
        emptyText={defaultValue}
        sx={{
          fontSize: 25,
          '& .MuiTypography-root': {
            fontSize: 25,
          },
        }}
      />
    </CardWithIcon>
  );
};

export default FieldReferenceWiget;
