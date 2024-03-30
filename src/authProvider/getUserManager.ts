import {UserManager, Log, WebStorageStateStore} from 'oidc-client-ts';
import log from '../utils/log';
import {AuthProviderOptions} from './types';

const getUserManager = (options: AuthProviderOptions) => {
  log.info(`
    issuer: ${options.issuer}
    clientId: ${options.clientId}
    loginRedirectUri: ${options.loginRedirectUri}
    logoutRedirectUri: ${options.logoutRedirectUri}
  `);

  const userManager = new UserManager({
    authority: options.issuer as string,
    client_id: options.clientId as string,
    redirect_uri: options.loginRedirectUri,
    post_logout_redirect_uri: options.logoutRedirectUri,
    response_type: 'code',
    scope: 'openid email profile', // Allow to retrieve the email and user name later api side
    userStore: new WebStorageStateStore({store: localStorage}),
  });

  Log.setLogger(console);

  userManager.events.addAccessTokenExpiring(() => log.info('AccessTokenExpiring'));
  userManager.events.removeAccessTokenExpiring(() => log.info('removeAccessTokenExpiring'));
  userManager.events.addAccessTokenExpired(() => log.info('addAccessTokenExpired'));
  userManager.events.removeAccessTokenExpired(() => log.info('removeAccessTokenExpired'));

  userManager.events.addUserLoaded(() => log.info('addUserLoaded'));
  userManager.events.removeUserLoaded(() => log.info('removeUserLoaded'));
  userManager.events.addUserUnloaded(() => log.info('addUserUnloaded'));
  userManager.events.removeUserUnloaded(() => log.info('removeUserUnloaded'));
  userManager.events.addSilentRenewError(() => log.info('addSilentRenewError'));
  userManager.events.removeSilentRenewError(() => log.info('removeSilentRenewError'));
  userManager.events.addUserSignedIn(() => log.info('addUserSignedIn'));
  userManager.events.removeUserSignedIn(() => log.info('removeUserSignedIn'));
  userManager.events.addUserSignedOut(() => log.info('addUserSignedOut'));
  userManager.events.removeUserSignedOut(() => log.info('removeUserSignedOut'));
  userManager.events.addUserSessionChanged(() => log.info('addUserSessionChanged'));
  userManager.events.removeUserSessionChanged(() => log.info('removeUserSessionChanged'));

  return userManager;
};

export default getUserManager;
