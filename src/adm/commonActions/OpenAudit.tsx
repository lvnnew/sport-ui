import React, {FC, useCallback, useState} from 'react';
import {Drawer, IconButton, Tooltip} from '@mui/material';
import {makeStyles, createStyles} from '@mui/styles';
import PlaylistAddCheckOutlinedIcon from '@mui/icons-material/PlaylistAddCheckOutlined';
import {
  Datagrid,
  ReferenceManyField,
  TextField,
  SimpleShowLayout,
  useRecordContext,
  Pagination,
  usePermissions,
} from 'react-admin';
import {hasPermission} from '../../utils/permissions';

const useStyles = makeStyles(() => createStyles({
  drawerPaper: {
    width: '30%',
  },
}));

const OpenAudit: FC<{entityTypeId: string}> = ({entityTypeId}) => {
  const classes = useStyles();
  const [drawerOpened, setDrawerOpened] = useState(false);
  const record = useRecordContext();
  const {permissions} = usePermissions<string[]>();

  const openDrawer = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    setDrawerOpened(true);
  }, [setDrawerOpened]);

  if (!record || !hasPermission(permissions, 'auditLogs.all')) {
    return null;
  }

  return (
    <>
      <Tooltip title='Open audit logs'>
        <IconButton
          color='primary'
          onClick={openDrawer}
          style={{alignItems: 'center'}}
        >
          <PlaylistAddCheckOutlinedIcon />
        </IconButton>
      </Tooltip>
      <Drawer
        anchor='right' open={drawerOpened} onClose={() => setDrawerOpened(false)}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <SimpleShowLayout
          record={{...record, id: record.id.toString()}}
        >
          <ReferenceManyField
            label='Audit'
            reference='auditLogs'
            filter={{entityTypeId}}
            source='id'
            target='entityId'
            pagination={<Pagination />}
          >
            <Datagrid>
              <TextField source='title' />
            </Datagrid>
          </ReferenceManyField>
        </SimpleShowLayout>
      </Drawer>
    </>
  );
};

export default OpenAudit;
