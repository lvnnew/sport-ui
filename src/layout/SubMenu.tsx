import * as React from 'react';
import {FC, ReactElement, ReactNode, useCallback, useState} from 'react';
import {
  List,
  MenuItem,
  ListItemIcon,
  Typography,
  Collapse,
  Tooltip,
  Box,
} from '@mui/material';
import ExpandMore from '@mui/icons-material/ExpandMore';
import {useTranslate, useSidebarState} from 'react-admin';

interface SubMenuProps {
  dense?: boolean;
  icon: ReactElement;
  name: string;
  children: ReactNode;
}

const SubMenu: FC<SubMenuProps> = (props) => {
  const {name, icon, children, dense} = props;
  const translate = useTranslate();

  const [sidebarIsOpen] = useSidebarState();
  const [open, setOpen] = useState(false);
  const handleToggle = useCallback(() => setOpen(open => !open), [setOpen]);

  const header = (
    <MenuItem dense={dense} onClick={handleToggle}>
      <ListItemIcon>
        <Box sx={{minWidth: theme => theme.spacing(5)}}>
          {open ? <ExpandMore /> : icon}
        </Box>
      </ListItemIcon>
      <Typography variant='inherit' color='textSecondary'>
        {translate(name)}
      </Typography>
    </MenuItem>
  );

  return (
    <div>
      {sidebarIsOpen || open ? (
        header
      ) : (
        <Tooltip title={translate(name)} placement='right'>
          {header}
        </Tooltip>
      )}
      <Collapse in={open} timeout='auto' unmountOnExit>
        <List
          dense={dense}
          component='div'
          disablePadding
          sx={{
            '& > *': {
              transition:
                  'margin-left 195ms cubic-bezier(0.4, 0, 0.6, 1) 0ms',
              marginLeft: sidebarIsOpen ? 4 : 0,
            },
          }}
        >
          {children}
        </List>
      </Collapse>
    </div>
  );
};

export default SubMenu;
