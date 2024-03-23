import {jwtDecode} from 'jwt-decode';
import log from '../utils/log';

const getRolesFromAccessToken = (token: string) => {
  const decoded = jwtDecode(token) as Record<string, any>;
  log.info(`access_token: ${token}`);
  log.info('decoded');
  log.info(decoded);

  const roles = decoded?.realm_access?.roles ?? decoded?.roles ?? [];
  log.info('roles');
  log.info(roles);

  return roles;
};

export default getRolesFromAccessToken;
