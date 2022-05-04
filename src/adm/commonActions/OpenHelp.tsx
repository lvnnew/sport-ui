import React, {FC, useCallback, useState} from 'react';
import {Drawer, IconButton, Tooltip} from '@mui/material';
import {makeStyles, createStyles} from '@mui/styles';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import {gql, useLazyQuery} from '@apollo/client';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import {hasPermission} from '../../utils/permissions';
import {usePermissions} from 'react-admin';

const useStyles = makeStyles(() => createStyles({
  drawerPaper: {
    width: '30%',
    paddingInline: '10px',
  },
}));

export const GET_ENTITY_HELP = gql`
  query getHelp(
    $entityType: EntityType!,
    ) {
      getHelp(
        entityType: $entityType,
      )
    }
`;

const OpenHelp: FC<{entityType: string}> = ({entityType}) => {
  const classes = useStyles();
  const [drawer, setOpenDrawer] = useState(false);
  const {permissions} = usePermissions<string[]>();

  const [getHelp, {loading, data}] = useLazyQuery(
    GET_ENTITY_HELP,
    {
      fetchPolicy: 'network-only',
    },
  );

  const openDrawer = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    setOpenDrawer(true);
    getHelp({
      variables: {
        entityType,
      },
    });
  }, [setOpenDrawer, getHelp, entityType]);

  if (!hasPermission(permissions, 'help.getHelp')) {
    return null;
  }

  return (
    <>
      <Tooltip title='Get help'>
        <IconButton
          color='primary'
          onClick={openDrawer}
          style={{alignItems: 'center'}}
        >
          <HelpOutlineIcon />
        </IconButton>
      </Tooltip>
      <Drawer
        anchor='right' open={drawer} onClose={() => setOpenDrawer(false)}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        {!loading && data && (<ReactMarkdown remarkPlugins={[remarkGfm]}>{data.getHelp}</ReactMarkdown>)}
      </Drawer>
    </>
  );
};

export default OpenHelp;
