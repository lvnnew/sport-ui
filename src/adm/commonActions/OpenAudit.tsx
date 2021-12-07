import React, {FC, useCallback, useState} from 'react';
import {Drawer, IconButton, Tooltip} from '@material-ui/core';
import {makeStyles, createStyles} from '@material-ui/core/styles';
import PlaylistAddCheckOutlinedIcon from '@material-ui/icons/PlaylistAddCheckOutlined';
import {
  Datagrid,
  ReferenceManyField,
  TextField,
  SimpleShowLayout,
  useRecordContext,
} from 'react-admin';

const useStyles = makeStyles(() => createStyles({
  drawerPaper: {
    width: '30%',
  },
}));

const OpenAudit: FC<{entityType: string}> = ({entityType}) => {
  const classes = useStyles();
  const [drawer, setOpenDrawer] = useState(false);
  const record = useRecordContext();

  const openDrawer = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    setOpenDrawer(true);
  }, [setOpenDrawer]);

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
        anchor='right' open={drawer} onClose={() => setOpenDrawer(false)}
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
            filter={{entityType}}
            source='id'
            target='entityId'
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
