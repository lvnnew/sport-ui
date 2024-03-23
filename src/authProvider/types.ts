import {AuthProvider as RaAuthProvider} from 'react-admin';

export type AuthProvider = RaAuthProvider & {
  getRoles: () => Promise<string[]>;
  getLoginByEmail: (email: string) => Promise<string | null>;
  setPassword: (key: string, password: string) => Promise<void>;
  startResettingPassword: (login: string) => Promise<void>;
}

export type LogoutType = 'internal' | 'silentRedirect' | 'redirect';

export interface AuthProviderOptions {
  backEndpoint: string,
  issuer: string,
  clientId: string,
  loginRedirectUri: string;
  logoutRedirectUri: string;
  logout: LogoutType;
}
