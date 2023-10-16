import React, {FC, useCallback, useState, useEffect} from 'react';
import {
  BooleanInput,
  Form,
  useAuthProvider,
} from 'react-admin';
import {useDebug} from '../../contexts/DebugContext';
import {AuthProvider} from '../../authProvider/getAuthProvider';

const DebugPage: FC = () => {
  const {debug, setDebug} = useDebug();
  const authProvider = useAuthProvider() as AuthProvider;

  const [roles, setRoles] = useState<string[]>([]);
  const [permissions, setPermissions] = useState<string[]>([]);

  useEffect(() => {
    authProvider.getRoles().then(roles => setRoles(roles));
  }, [authProvider]);

  useEffect(() => {
    authProvider.getPermissions({}).then(roles => setPermissions(roles));
  }, [authProvider]);

  const onClick = useCallback(() => {
    setDebug((debug) => !debug);
  }, [setDebug]);

  return (
    <Form>
      <BooleanInput label='Debug' source='debug' onClick={onClick} checked={debug} />
      {debug && (
        <>
          <div>
            Roles
            <pre>
              <code>
                {JSON.stringify(roles, null, 1)}
              </code>
            </pre>
          </div>
          <div>
            Permissions
            <pre>
              <code>
                {JSON.stringify(permissions, null, 1)}
              </code>
            </pre>
          </div>
        </>
      )}
    </Form>
  );
};

export default DebugPage;
