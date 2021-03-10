import * as React from 'react';
import {
  useState, useEffect,
} from 'react';
import {
  Admin,
} from 'react-admin';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  from,
} from '@apollo/client';
import polyglotI18nProvider from 'ra-i18n-polyglot';
import './App.css';
import themeReducer from './themeReducer';
import {
  Layout,
  LoginAuth0,
} from './layout';
import customRoutes from './routes';
import englishMessages from './i18n/en';
import dataProviderFactory from './dataProvider';
import getConfig from './config/config';
import log from 'loglevel';
import LoadingPage from './shared/LoadingPage';
import {
  createBrowserHistory as createHistory,
} from 'history';
import {
  dmResources,
} from './demo/resources';
import {
  agrResources,
} from './agr/resources';
import {
  AgrDashboard,
} from './agr/dashboard';
import {
  envConfig,
} from './config/envConfig';
// DO NOT EDIT! THIS IS GENERATED FILE


const history = createHistory();

log.setDefaultLevel(log.levels.INFO);

const i18nProvider = polyglotI18nProvider(locale => {
  if (locale === 'ru') {
    return import('./i18n/ru').then(messages => messages.default);
  }

  // Always fallback on english
  return englishMessages;
}, 'en');

const App = () => {
  const [dataProvider, setDataProvider] = useState<any | null>(null);
  const [client, setClient] = useState<any | null>(null);

  useEffect(() => {
    const fetchDataProvider = async () => {
      const config = await getConfig();

      log.info(config);
      log.info(envConfig);

      const link = from([
        new HttpLink({
          headers: {Token: envConfig.token},
          uri: config.endpoint,
        }),
      ]);

      const client = new ApolloClient({
        cache: new InMemoryCache(),
        defaultOptions: {
          query: {fetchPolicy: 'cache-only'},
        },
        link,
      });
      setClient(client);
      const dataProviderInstance = await dataProviderFactory(client);
      setDataProvider(
        () => dataProviderInstance,
      );
    };

    fetchDataProvider();
  }, []);

  log.info('dataProvider');
  log.info(dataProvider);

  if (!dataProvider) {
    return (
      <div className='loader-container'>
        <div className='loader'>Loading...</div>
      </div>
    );
  }

  if (!client) {
    return (
      <div className='loader-container'>
        <div className='loader'>Loading...</div>
      </div>
    );
  }

  return (

    <ApolloProvider client={client}>
      <Admin
        customReducers={{theme: themeReducer}}
        customRoutes={customRoutes}
        dashboard={AgrDashboard}
        dataProvider={dataProvider}
        history={history}
        i18nProvider={i18nProvider}
        layout={Layout}
        loading={LoadingPage}
        loginPage={LoginAuth0}
        title=''
      >
        {[
          ...dmResources,
          ...agrResources,
        ]}
      </Admin>

    </ApolloProvider>
  );
};

export default App;
