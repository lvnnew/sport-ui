import React from 'react';
import {usePermissions} from 'react-admin';
import {hasAllPermissions, hasAnyPermission, hasPermission} from '../utils/permissions';

interface GuardProps {
  children: React.ReactNode,
  shouldHave?: string,
  shouldHaveAll?: string[],
  shouldHaveAny?: string[],
}

const Guard = React.memo(({
  shouldHave,
  shouldHaveAll = [],
  shouldHaveAny = [],
  children,
}: GuardProps) => {
  const {permissions} = usePermissions<string[]>();

  return (
    <>
      {(shouldHave && hasPermission(permissions, shouldHave)) &&
        hasAllPermissions(permissions, shouldHaveAll) &&
        hasAnyPermission(permissions, shouldHaveAny) &&
        children}
    </>
  );
});

export default Guard;
