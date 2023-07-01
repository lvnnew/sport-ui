/* eslint-disable no-console */
import * as React from 'react';
import {
  FC,
} from 'react';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import CardWithIcon, {CardWithIconProps} from './CardWithIcon/CardWithIcon';
import {Typography} from '@mui/material';
import {
  useGetOne, useRecordContext,
} from 'react-admin';

export interface FileWidgetProps extends Omit<CardWithIconProps, 'icon'> {
  icon?: FC<any>;
  title?: string;
  reference: string;
  source: string;
}

const FileWidget: FC<FileWidgetProps> = (
  {
    reference,
    source,
    icon,
    ...rest
  },
) => {
  const record = useRecordContext();

  const {data} = useGetOne(
    reference,
    {id: record[source]},
    {enabled: Boolean(record[source])},
  );

  console.log(data);

  return (
    <CardWithIcon
      {...rest}
      icon={icon || ArrowForwardIosIcon}
    >
      <a download href={data?.url} onClick={(e: any) => e.stopPropagation()} >
        <Typography sx={{
          fontSize: 25,
          color: theme => theme.palette.primary.main,
        }}
        >{data?.originalName}
        </Typography>
      </a>
    </CardWithIcon>
  );
};

export default FileWidget;
