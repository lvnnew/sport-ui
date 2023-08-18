import * as React from 'react';
import {
  FC,
} from 'react';
import {
  ReferenceField, useTranslate,
} from 'react-admin';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import CardWithIcon, {CardWithIconProps} from './CardWithIcon/CardWithIcon';

export interface FieldReferenceWidgetProps extends Omit<CardWithIconProps, 'icon'> {
  icon?: FC<any>;
  title?: string;
  source: string;
  reference: string;
  defaultValue?: string;
}

const FieldReferenceWidget: FC<FieldReferenceWidgetProps> = (
  {
    source,
    reference,
    icon,
    defaultValue,
    ...rest
  },
) => {
  const translate = useTranslate();

  return (
    <CardWithIcon
      {...rest}
      icon={icon || ArrowForwardIosIcon}
    >
      <ReferenceField
        link='show'
        reference={reference}
        source={source}
        emptyText={defaultValue || translate('app.notDefined')}
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

export default FieldReferenceWidget;
