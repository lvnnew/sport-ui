import * as React from 'react';
import {
  useState, useEffect,
} from 'react';
import {Admin, AuthProvider, useTranslate} from 'react-admin';
import {
  ApolloClient,
  ApolloProvider,
  NormalizedCacheObject,
} from '@apollo/client';
import polyglotI18nProvider from 'ra-i18n-polyglot';
import './App.css';
import themeReducer from './themeReducer';
import Layout from './layout/Layout';
import Login from './layout/Login';
import customRoutes from './routes';
import defaultMessages from './i18n/ru';
import dataProviderFactory from './dataProvider';
import getConfig from './config/config';
import {
  createBrowserHistory as createHistory,
} from 'history';
import {
  getResources,
} from './adm/resources';
import {
  Dashboard,
} from './adm/dashboard';
import {DebugProvider} from './contexts/DebugContext';
import getAuthProvider from './authProvider/getAuthProvider';
import {onStart} from './systemHooks';
import getApollo from './apollo/getApollo';
import Loader from './shared/Loader';
import log from './utils/log';

// DO NOT EDIT! THIS IS GENERATED FILE

onStart();

const history = createHistory();

const i18nProvider = polyglotI18nProvider(locale => {
  switch (locale) {
  case 'en':
    return import('./i18n/en').then(messages => messages.default);
  case 'ru':
    return defaultMessages;
  default:
    log.error(`Unknown locale: "${locale}"`);
    return defaultMessages;
  }
}, 'ru');

const App = () => {
  const [dataProvider, setDataProvider] = useState<any | null>(null);
  const [authProvider, setAuthProvider] = useState<AuthProvider | null>(null);
  const [client, setClient] = useState<ApolloClient<NormalizedCacheObject> | null>(null);
  const [authVersion, setAuthVersion] = useState(0);
  const translate = useTranslate();

  useEffect(() => {
    const fetchDataProvider = async () => {
      const config = await getConfig();
      setAuthProvider(getAuthProvider(config.endpoint, () => setAuthVersion(prev => prev + 1)));

      const client = getApollo(config.endpoint);
      setClient(client);
      const dataProviderInstance = await dataProviderFactory(client);
      setDataProvider(() => dataProviderInstance);
    };

    fetchDataProvider();
  }, [authVersion]);

  if (!dataProvider || !client || !authProvider) {
    return (
      <Loader />
    );
  }

  return (
    <ApolloProvider client={client}>
      <DebugProvider>
        <Admin
          customReducers={{theme: themeReducer}}
          customRoutes={customRoutes}
          dashboard={Dashboard}
          dataProvider={dataProvider}
          history={history}
          i18nProvider={i18nProvider}
          layout={Layout}
          loading={Loader}
          loginPage={Login}
          authProvider={authProvider}
          title=''
        >
          {permissions => getResources(translate, permissions)}
        </Admin>
      </DebugProvider>
    </ApolloProvider>
  );
};

export default App;
