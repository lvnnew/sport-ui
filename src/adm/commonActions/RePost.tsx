import React, {FC, useCallback} from 'react';
import {IconButton, Tooltip} from '@mui/material';
import CachedOutlinedIcon from '@mui/icons-material/CachedOutlined';
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
  const record = useRecordContext();

  const [rePost, {loading}] = useMutation(getRepostQuery(serviceName), {
    variables: {
      id: record?.id,
    },
  });

  const onClick = useCallback(async () => {
    await rePost();
  }, [rePost]);

  if (!record) {
    return null;
  }

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
