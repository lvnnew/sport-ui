const getConfig = async (): Promise<Record<string, string>> => {
  return fetch('/config.json')
    .then(data => data.json())
    .then(json => ({
      ...json,
      adminRecaptchaPublicKey: import.meta.env.VITE_APP_ADMIN_RECAPTCHA_PUBLIC_KEY || json.adminRecaptchaPublicKey,
      endpoint: import.meta.env.VITE_APP_ENDPOINT || json.endpoint,
      oidcAdmUrl: import.meta.env.VITE_APP_OIDC_ADM_URL || json.oidcAdmUrl,
      oidcAdmIssuer: import.meta.env.VITE_APP_OIDC_ADM_ISSUER || json.oidcAdmIssuer,
      oidcAdmLogoutType: import.meta.env.VITE_APP_OIDC_ADM_LOGOUT_TYPE || json.oidcAdmLogoutType,
      oidcAdmRealm: import.meta.env.VITE_APP_OIDC_ADM_REALM || json.oidcAdmRealm,
      oidcAdmClientId: import.meta.env.VITE_APP_OIDC_ADM_CLIENT_ID || json.oidcAdmClientId,
      checkLoginIframe: import.meta.env.VITE_APP_CHECK_LOGIN_IFRAME || json.oidcAdmClientId,
    }));
};

export default getConfig;
