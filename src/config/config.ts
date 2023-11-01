const getConfig = async (): Promise<Record<string, string>> => {

  return fetch('/config.json')
    .then(data => data.json())
    .then(json => ({
      ...json,
      adminRecaptchaPublicKey: import.meta.env.VITE_APP_ADMIN_RECAPTCHA_PUBLIC_KEY || json.adminRecaptchaPublicKey,
      endpoint: import.meta.env.VITE_APP_ENDPOINT || json.endpoint,
      oidcAdmUrl: import.meta.env.VITE_APP_OIDC_ADM_URL || json.oidcAdmUrl,
      oidcAdmRealm: import.meta.env.VITE_APP_OIDC_ADM_REALM || json.oidcAdmRealm,
      oidcAdmClientId: import.meta.env.VITE_APP_OIDC_ADM_CLIENT_ID || json.oidcAdmClientId,
    }));
};

export default getConfig;
