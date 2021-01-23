import * as React from 'react';
import {
  FC,
} from 'react';
import Button from '@material-ui/core/Button';
import ThumbDown from '@material-ui/icons/ThumbDown';
import {
  useTranslate, useUpdate, useNotify, useRedirect,
} from 'react-admin';
import {
  Review,
} from '../../types';

/**
 * This custom button demonstrate using a custom action to update data
 */
const RejectButton: FC<{ record: Review }> = ({record}) => {
  const translate = useTranslate();
  const notify = useNotify();
  const redirectTo = useRedirect();

  const [reject, {loading}] = useUpdate(
    'reviews',
    record.id,
    {status: 'rejected'},
    record,
    {
      onFailure: () => {
        notify(
          'resources.reviews.notification.rejected_error',
          'warning',
        );
      },
      onSuccess: () => {
        notify(
          'resources.reviews.notification.rejected_success',
          'info',
          {},
          true,
        );
        redirectTo('/reviews');
      },
      undoable: true,
    },
  );

  return record && record.status === 'pending' ? (
    <Button
      color='primary'
      disabled={loading}
      onClick={reject}
      size='small'
      variant='outlined'
    >
      <ThumbDown
        color='primary'
        style={{color: 'red', paddingRight: '0.5em'}}
      />
      {translate('resources.reviews.action.reject')}
    </Button>
  ) : (
    <span />
  );
};

export default RejectButton;
