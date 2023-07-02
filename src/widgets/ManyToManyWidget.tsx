import * as React from 'react';
import {FC} from 'react';
import {
  ChipField,
  ReferenceField,
  ReferenceManyField,
  SingleFieldList,
  useRecordContext,
} from 'react-admin';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import CardWithIcon, {
  CardWithIconProps,
} from './CardWithIcon/CardWithIcon';

export interface ManyToManyWidgetProps extends Omit<CardWithIconProps, 'icon' | 'to'> {
  icon?: FC<any>;
  title?: string;
  linkResource: string;
  linkLeftField: string;
  linkRightField: string;
  linkedResource: string;
  linkedResourceTitleField: string;
}

const ManyToManyWidget: FC<ManyToManyWidgetProps> = (
  {
    icon,
    linkResource,
    linkLeftField,
    linkRightField,
    linkedResource,
    linkedResourceTitleField,
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
        reference={linkResource}
        target={linkLeftField}
        label={false}
        perPage={1000}
      >
        <SingleFieldList>
          <ReferenceField
            source={linkRightField}
            reference={linkedResource}
            link='show'
          >
            <ChipField source={linkedResourceTitleField} />
          </ReferenceField>
        </SingleFieldList>
      </ReferenceManyField>
    </CardWithIcon>
  );
};

export default ManyToManyWidget;
