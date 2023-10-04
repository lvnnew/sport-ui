const getConfig = async (): Promise<Record<string, string>> => {
  return fetch('/config.json')
    .then(data => data.json())
    .then(json => ({
      ...json,
      endpoint: import.meta.env.VITE_APP_ENDPOINT || json.endpoint,
    }));
};

export default getConfig;
