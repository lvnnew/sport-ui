import * as React from 'react';
import {
  FC,
} from 'react';
import Button from '@material-ui/core/Button';
import ThumbUp from '@material-ui/icons/ThumbUp';
import {
  useTranslate, useUpdate, useNotify, useRedirect,
} from 'react-admin';
import {
  Review,
} from '../../types';

/**
 * This custom button demonstrate using useUpdate to update data
 */
const AcceptButton: FC<{ record: Review }> = ({record}) => {
  const translate = useTranslate();
  const notify = useNotify();
  const redirectTo = useRedirect();

  const [approve, {loading}] = useUpdate(
    'reviews',
    record.id,
    {status: 'accepted'},
    record,
    {
      onFailure: () => {
        notify(
          'resources.reviews.notification.approved_error',
          'warning',
        );
      },
      onSuccess: () => {
        notify(
          'resources.reviews.notification.approved_success',
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
      onClick={approve}
      size='small'
      variant='outlined'
    >
      <ThumbUp
        color='primary'
        style={{color: 'green', paddingRight: '0.5em'}}
      />
      {translate('resources.reviews.action.accept')}
    </Button>
  ) : (
    <span />
  );
};

export default AcceptButton;
