import React, {FC, useCallback} from 'react';
import {IconButton, Tooltip} from '@material-ui/core';
import CachedOutlinedIcon from '@material-ui/icons/CachedOutlined';
import {
  useRecordContext,
} from 'react-admin';
import {gql, useMutation} from '@apollo/client';

const getRepostQuery = (serviceName: string) => gql`
  mutation rePost($id: Int!) {
    rePost${serviceName}(id: $id) 
  }
`;

const RePost: FC<{serviceName: string}> = ({serviceName}) => {
  const {id} = useRecordContext();

  const [rePost, {loading}] = useMutation(getRepostQuery(serviceName), {
    variables: {
      id,
    },
  });

  const onClick = useCallback(async () => {
    await rePost();
  }, [rePost]);

  return (
    <Tooltip title='Repost document'>
      <IconButton
        color='primary'
        onClick={onClick}
        style={{alignItems: 'center'}}
        disabled={loading}
      >
        <CachedOutlinedIcon />
      </IconButton>
    </Tooltip>
  );
};

export default RePost;
