import * as React from 'react';
import {FC} from 'react';
import {
  ChipField,
  ReferenceManyField,
  SingleFieldList,
  useRecordContext,
} from 'react-admin';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import CardWithIcon, {
  CardWithIconProps,
} from './CardWithIcon/CardWithIcon';

export interface LinkedEntitiesWigetProps extends Omit<CardWithIconProps, 'icon' | 'to'> {
  icon?: FC<any>;
  title?: string;
  reference: string;
  linkField: string;
  titleSource: string;
}

const LinkedEntitiesWiget: FC<LinkedEntitiesWigetProps> = (
  {
    icon,
    reference,
    linkField,
    titleSource,
    ...rest
  },
) => {
  const record = useRecordContext();

  if (!record) {
    return null;
  }

  return (
    <CardWithIcon
      {...rest}
      icon={icon || ArrowForwardIosIcon}
    >

      <ReferenceManyField
        reference={reference}
        target={linkField}
        label={false}
        perPage={1000}
      >
        <SingleFieldList>
          <ChipField source={titleSource} />
        </SingleFieldList>
      </ReferenceManyField>
    </CardWithIcon>
  );
};

export default LinkedEntitiesWiget;
