import React, {
  createContext,
  memo,
  useMemo,
  ReactNode,
  ReactNodeArray,
  useContext,
  useState,
  useEffect,
} from 'react';
import {gql, useLazyQuery} from '@apollo/client';
import useInterval from '../hooks/useInterval';
import {log} from '../utils/log';

export const PERMISSIONS_QUERY = gql`
  query {
    getPermissions
  }
`;

export interface PermissionsContextData {
  permissions: string[];
}

export interface IPermissionsContext extends PermissionsContextData {
  updatePermissions: () => void;
}

interface IProps {
  children: ReactNode | ReactNodeArray;
}

export const PermissionsContext = createContext<IPermissionsContext>(
  {} as IPermissionsContext,
);

export const PermissionsProvider = memo((props: IProps) => {
  const {...rest} = props;
  const [permissionsContextData, setPermissionsContextDataRaw] = useState<PermissionsContextData>({
    permissions: [],
  });

  const [fetch, {data}] = useLazyQuery(
    PERMISSIONS_QUERY,
    {fetchPolicy: 'network-only'},
  );

  log.info('data.getPermissions');
  log.info(data && data.getPermissions);

  useEffect(() => {
    if (data) {
      setPermissionsContextDataRaw({permissions: data.getPermissions});
    }
  }, [data, setPermissionsContextDataRaw]);
  const [updatePermissions] = useInterval(fetch, 600000);

  useEffect(() => {
    updatePermissions();
  }, [updatePermissions]);

  return useMemo(
    () => (
      <PermissionsContext.Provider
        {...rest}
        value={{...permissionsContextData, updatePermissions}}
      />
    ),
    [rest, permissionsContextData, updatePermissions],
  );
});

export const usePermissions = (): IPermissionsContext =>
  useContext(PermissionsContext) as IPermissionsContext;
