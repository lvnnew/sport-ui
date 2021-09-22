import * as React from 'react';
import {
  useState, useEffect,
} from 'react';
import {
  Admin, AuthProvider,
} from 'react-admin';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  ApolloLink,
  from,
  NormalizedCacheObject,
} from '@apollo/client';
import polyglotI18nProvider from 'ra-i18n-polyglot';
import './App.css';
import themeReducer from './themeReducer';
import {
  Layout,
  Login,
} from './layout';
import customRoutes from './routes';
import enMessages from './i18n/en';
import dataProviderFactory from './dataProvider';
import getConfig from './config/config';
import log from 'loglevel';
import LoadingPage from './shared/LoadingPage';
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
import getAuthProvider, {getJwtToken} from './authProvider/getAuthProvider';
import {RetryLink} from '@apollo/client/link/retry';
import {createUploadLink} from 'apollo-upload-client';
import './utils/polyfills/BigInt';

// DO NOT EDIT! THIS IS GENERATED FILE

const history = createHistory();

log.setDefaultLevel(log.levels.INFO);

const i18nProvider = polyglotI18nProvider(locale => {
  if (locale === 'ru') {
    return import('./i18n/ru').then(messages => messages.default);
  }

  // Always fallback on english
  return enMessages;
}, 'en');

const App = () => {
  const [dataProvider, setDataProvider] = useState<any | null>(null);
  const [authProvider, setAuthProvider] = useState<AuthProvider | null>(null);
  const [client, setClient] = useState<ApolloClient<NormalizedCacheObject> | null>(null);
  const [authVersion, setAuthVersion] = useState(0);

  useEffect(() => {
    const fetchDataProvider = async () => {
      const config = await getConfig();
      setAuthProvider(getAuthProvider(config.endpoint, () => setAuthVersion(prev => prev + 1)));

      const link = from([
        new RetryLink(),
        createUploadLink({
          headers: {
            authorization: `Bearer ${getJwtToken()}`,
          },
          uri: `${config.endpoint}/graph`,
        }) as unknown as ApolloLink,
      ]);

      const client = new ApolloClient({
        cache: new InMemoryCache(),
        defaultOptions: {
          query: {fetchPolicy: 'network-only'},
        },
        link,
      });
      setClient(client);
      const dataProviderInstance = await dataProviderFactory(client);
      setDataProvider(() => dataProviderInstance);
    };

    fetchDataProvider();
  }, [authVersion]);

  log.info('dataProvider');
  log.info(dataProvider);

  if (!dataProvider || !client || !authProvider) {
    return (
      <div className='loader-container'>
        <div className='loader'>Loading...</div>
      </div>
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
          loading={LoadingPage}
          loginPage={Login}
          authProvider={authProvider}
          title=''
        >
          {permissions => getResources(permissions)}
        </Admin>
      </DebugProvider>
    </ApolloProvider>
  );
};

export default App;
