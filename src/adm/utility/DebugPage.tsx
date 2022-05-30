import React, {FC, useCallback} from 'react';
import {
  BooleanInput,
  Form,
} from 'react-admin';
import {useDebug} from '../../contexts/DebugContext';

const DebugPage: FC = () => {
  const {debug, setDebug} = useDebug();

  const onClick = useCallback(() => {
    setDebug((debug) => !debug);
  }, [setDebug]);

  return (
    <Form>
      <BooleanInput label='Debug' source='debug' onClick={onClick} checked={debug} />
    </Form>
  );
};

export default DebugPage;
