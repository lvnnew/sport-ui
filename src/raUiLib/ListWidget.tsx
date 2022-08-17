/* eslint-disable max-len */
import React, {FC, ReactElement, ReactNode} from 'react';
import {
  Datagrid,
  List,
  ListProps,
  useRecordContext,
  usePermissions,
} from 'react-admin';
import {Card, CardContent, CardHeader} from '@mui/material';
import {hasPermission} from '../utils/permissions';

export interface ListWidgetProps extends Omit<ListProps, 'children'> {
  title: string;
  reference: string;
  target: string;
  source?: string;
  filters?: ReactElement | ReactElement[];
  children: ReactNode | ReactNode[];
}

const ListWidget: FC<ListWidgetProps> = ({
  title,
  reference,
  target,
  source = 'id',
  filters,
  children,
  ...rest
}) => {
  const record = useRecordContext();
  const {permissions} = usePermissions<string[]>();

  if (!hasPermission(permissions, `${reference}.all`)) {
    return null;
  }

  if (!record) {
    return null;
  }

  return (
    <Card sx={{m: 1}} >
      <CardHeader title={title} sx={{pb: 0.5}} />
      <CardContent sx={{pt: 0.5, '&:last-child': {p: 2}}}>
        <List
          empty={false}
          disableSyncWithLocation={true}
          filter={{
            ...rest.filter,
            [target]: record[source],
          }}
          filters={filters}
          resource={reference}
          sx={{overflow: 'auto'}}
          exporter={false}
          {...rest}
        >
          <Datagrid rowClick='show'>
            {children}
          </Datagrid>
        </List>
      </CardContent>
    </Card>
  );
};

export default ListWidget;
