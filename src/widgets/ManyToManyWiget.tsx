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

export interface ManyToManyWigetProps extends Omit<CardWithIconProps, 'icon' | 'to'> {
  icon?: FC<any>;
  title?: string;
  linkResource: string;
  linkLeftField: string;
  linkRightField: string;
  linkedResource: string;
  linkedResourceTitleField: string;
}

const ManyToManyWiget: FC<ManyToManyWigetProps> = (
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
      {/* <Paper>
        <SimpleShowLayout
          record={record}
        >
          <ReferenceManyField
            reference='tagsToPartners' linkResource
            target='partnerId' linkLeftField
            label='Динамические сегменты'
            perPage={1000}
          >
            <SingleFieldList>
              <ReferenceField
                source='tagId' linkRightField
                reference='partnerTags' linkedResource
                link='show'
              >
                <ChipField source='title' />
              </ReferenceField>
            </SingleFieldList>
          </ReferenceManyField>
        </SimpleShowLayout>
      </Paper> */}
    </CardWithIcon>
  );
};

export default ManyToManyWiget;
