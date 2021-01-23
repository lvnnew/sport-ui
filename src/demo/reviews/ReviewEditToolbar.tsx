import * as React from 'react';
import {
  FC,
} from 'react';
import MuiToolbar from '@material-ui/core/Toolbar';
import {
  makeStyles,
} from '@material-ui/core/styles';

import {
  SaveButton, DeleteButton, ToolbarProps,
} from 'react-admin';
import AcceptButton from './AcceptButton';
import RejectButton from './RejectButton';
import {
  Review,
} from '../../types';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    justifyContent: 'space-between',
  },
}));

const ReviewEditToolbar: FC<ToolbarProps<Review>> = ({
  basePath,
  handleSubmitWithRedirect,
  invalid,
  record,
  resource,
  saving,
}) => {
  const classes = useStyles();

  if (!record) {
    return null;
  }

  return (
    <MuiToolbar className={classes.root}>
      {record.status === 'pending' ? (
        <>
          <AcceptButton record={record} />
          <RejectButton record={record} />
        </>
      ) : (
        <>
          <SaveButton
            handleSubmitWithRedirect={handleSubmitWithRedirect}
            invalid={invalid}
            redirect='list'
            saving={saving}
            submitOnEnter={true}
          />
          <DeleteButton
            basePath={basePath}
            record={record}
            resource={resource}
          />
        </>
      )}
    </MuiToolbar>
  );
};

export default ReviewEditToolbar;
