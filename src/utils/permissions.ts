export const hasPermission = (allPermissions: string[] | undefined, permission: string) => {
  if (!allPermissions || allPermissions.length === 0) {
    return false;
  }

  return allPermissions.includes(permission);
};

export const hasAnyOfPermissions = (allPermissions: string[] | undefined, permissions: string[]) => {
  if (!allPermissions || allPermissions.length === 0) {
    return false;
  }
  if (permissions.length === 0) {
    return true;
  }

  return allPermissions.some(permission => permissions.includes(permission));
};
