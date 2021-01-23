import React, {
  useCallback,
  useState,
  ChangeEvent,
} from 'react';
import {
  Typography,
} from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import SendIcon from '@material-ui/icons/SendOutlined';

import {
  gql, useMutation,
} from '@apollo/client';

const HELLO = gql`
  mutation agrExtractDomain($name: String!) {
    agrUtilsHello(name: $name)
  }
`;

export default () => {
  const [name, setName] = useState('');

  const onNameChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setName(e.target.value);
    },
    [setName],
  );

  const [hello, {data}] = useMutation(HELLO);

  const onClick = useCallback(() => hello({variables: {name}}), [hello, name]);

  return (
    <div>
      <div style={{height: '7em'}}>
        <Typography >
          Hello
        </Typography>
        <TextField
          label='Name'
          onChange={onNameChange}
          value={name}
        />
        <IconButton
          onClick={onClick}
        >
          <SendIcon />
        </IconButton>
        data: {JSON.stringify(data, undefined, ' ')}
      </div>
    </div>
  );
};
