/* eslint-disable max-len */
import * as React from 'react';
import {
  useCallback, FC,
} from 'react';
import classnames from 'classnames';
import {
  BulkDeleteButton,
  List,
  ListProps,
  BulkActionProps,
} from 'react-admin';
import {
  Route, RouteChildrenProps, useHistory,
} from 'react-router-dom';
import {
  Drawer, useMediaQuery, Theme,
} from '@material-ui/core';
import {
  makeStyles,
} from '@material-ui/core/styles';

import BulkAcceptButton from './BulkAcceptButton';
import BulkRejectButton from './BulkRejectButton';
import ReviewListMobile from './ReviewListMobile';
import ReviewListDesktop from './ReviewListDesktop';
import ReviewFilter from './ReviewFilter';
import ReviewEdit from './ReviewEdit';

const ReviewsBulkActionButtons = (props: BulkActionProps) => (
  <>
    <BulkAcceptButton {...props} />
    <BulkRejectButton {...props} />
    <BulkDeleteButton {...props} />
  </>
);

const useStyles = makeStyles(theme => ({
  drawerPaper: {
    zIndex: 100,
  },
  list: {
    flexGrow: 1,
    marginRight: 0,
    transition: theme.transitions.create(['all'], {
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  listWithDrawer: {
    marginRight: 400,
  },
  root: {
    display: 'flex',
  },
}));

const ReviewList: FC<ListProps> = props => {
  const classes = useStyles();
  const isXSmall = useMediaQuery<Theme>(theme =>
    theme.breakpoints.down('xs'),
  );
  const history = useHistory();

  const handleClose = useCallback(() => {
    history.push('/reviews');
  }, [history]);

  return (
    <div className={classes.root}>
      <Route path='/reviews/:id'>
        {({match}: RouteChildrenProps<{ id: string }>) => {
          const isMatch = Boolean(match &&
                        match.params &&
                        match.params.id !== 'create');

          return (
            <>
              <List
                {...props}
                bulkActionButtons={<ReviewsBulkActionButtons />}
                className={classnames(classes.list, {
                  [classes.listWithDrawer]: isMatch,
                })}
                filters={<ReviewFilter />}
                perPage={25}
                sort={{field: 'date', order: 'DESC'}}
              >
                {isXSmall ? (
                  <ReviewListMobile />
                ) : (
                  <ReviewListDesktop
                    selectedRow={
                      isMatch ?
                        Number.parseInt(
                          (match as any).params.id,
                          10,
                        ) :
                        undefined
                    }
                  />
                )}
              </List>
              <Drawer
                anchor='right'
                classes={{
                  paper: classes.drawerPaper,
                }}
                onClose={handleClose}
                open={isMatch}
                variant='persistent'
              >
                {/* To avoid any errors if the route does not match, we don't render at all the component in this case */}
                {isMatch ? (
                  <ReviewEdit
                    id={(match as any).params.id}
                    onCancel={handleClose}
                    {...props}
                  />
                ) : null}
              </Drawer>
            </>
          );
        }}
      </Route>
    </div>
  );
};

export default ReviewList;
