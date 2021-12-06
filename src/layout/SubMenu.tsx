import * as React from 'react';
import {
  FC, ReactElement,
} from 'react';
import ExpandMore from '@material-ui/icons/ExpandMore';
import {List, MenuItem, ListItemIcon, Typography, Collapse, Tooltip} from '@material-ui/core';
import {makeStyles, createStyles} from '@material-ui/core/styles';
import {
  useTranslate,
} from 'react-admin';

const useStyles = makeStyles(() => createStyles({
  sidebarIsClosed: {
    '& a': {
      paddingLeft: 16,
      transition: 'padding-left 195ms cubic-bezier(0.4, 0, 0.6, 1) 0ms',
    },
  },
  sidebarIsOpen: {
    '& a': {
      paddingLeft: 32,
      transition: 'padding-left 195ms cubic-bezier(0.4, 0, 0.6, 1) 0ms',
    },
  },
}));

interface Props {
    dense: boolean;
    handleToggle: () => void;
    icon: ReactElement;
    isOpen: boolean;
    name: string;
    sidebarIsOpen: boolean;
}

const SubMenu: FC<Props> = ({
  handleToggle,
  sidebarIsOpen,
  isOpen,
  name,
  icon,
  children,
  dense,
}) => {
  const translate = useTranslate();
  const classes = useStyles();

  const header = (
    <MenuItem dense={dense} onClick={handleToggle}>
      <ListItemIcon>
        {/* sx={{pr: 1}} */}
        {isOpen ? <ExpandMore /> : icon}
      </ListItemIcon>
      <Typography color='textSecondary' variant='inherit'>
        {translate(name)}
      </Typography>
    </MenuItem>
  );

  return (
    <>
      {sidebarIsOpen || isOpen ? (
        header
      ) : (
        <Tooltip placement='right' title={translate(name)}>
          {header}
        </Tooltip>
      )}
      <Collapse in={isOpen} timeout='auto' unmountOnExit>
        <List
          className={
            sidebarIsOpen ?
              classes.sidebarIsOpen :
              classes.sidebarIsClosed
          }
          component='div'
          dense={dense}
          disablePadding
        >
          {children}
        </List>
      </Collapse>
    </>
  );
};

export default SubMenu;
