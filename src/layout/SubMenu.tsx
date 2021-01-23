import * as React from 'react';
import {
  FC, ReactElement,
} from 'react';
import ExpandMore from '@material-ui/icons/ExpandMore';
import List from '@material-ui/core/List';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Typography from '@material-ui/core/Typography';
import Collapse from '@material-ui/core/Collapse';
import Tooltip from '@material-ui/core/Tooltip';
import {
  makeStyles,
} from '@material-ui/core/styles';
import {
  useTranslate,
} from 'react-admin';

const useStyles = makeStyles(theme => ({
  icon: {minWidth: theme.spacing(5)},
  sidebarIsClosed: {
    '& a': {
      paddingLeft: theme.spacing(2),
      transition: 'padding-left 195ms cubic-bezier(0.4, 0, 0.6, 1) 0ms',
    },
  },
  sidebarIsOpen: {
    '& a': {
      paddingLeft: theme.spacing(4),
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
    <MenuItem button dense={dense} onClick={handleToggle}>
      <ListItemIcon className={classes.icon}>
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
