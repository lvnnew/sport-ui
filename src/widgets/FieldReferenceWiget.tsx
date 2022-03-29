import * as React from 'react';
import {
  FC,
} from 'react';
import {
  ChipField,
  ReferenceField,
} from 'react-admin';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import CardWithIcon, {CardWithIconProps} from './CardWithIcon/CardWithIcon';

export interface FieldReferenceWigetProps extends Omit<CardWithIconProps, 'icon'> {
  icon?: FC<any>;
  title?: string;
  source: string;
  reference: string;
  representationSource: string;
}

const FieldReferenceWiget: FC<FieldReferenceWigetProps> = (
  {
    source,
    reference,
    representationSource,
    icon,
    ...rest
  },
) => {
  return (
    <CardWithIcon
      {...rest}
      icon={icon || ArrowForwardIosIcon}
    >
      <ReferenceField link='show' reference={reference} source={source}>
        <ChipField source={representationSource} />
      </ReferenceField>
    </CardWithIcon>
  );
};

export default FieldReferenceWiget;
