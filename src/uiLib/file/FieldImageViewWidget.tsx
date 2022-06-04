import React, {FC} from 'react';
import AttachFile from '@mui/icons-material/AttachFile';

import CardWithIcon, {CardWithIconProps} from '../../widgets/CardWithIcon/CardWithIcon';
import ImageViewField from './ImageViewField';

export const FieldImageViewWidget: FC<Partial<CardWithIconProps>> = ({
  icon,
  to,
  title,
  subtitle,
}) => (
  <CardWithIcon
    icon={icon || AttachFile}
    {...{to, title, subtitle}}
  >
    <ImageViewField reference='files' source='photoId' />
  </CardWithIcon>
);
