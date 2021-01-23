const getConfig = async () => {
  return fetch(process.env.PUBLIC_URL + '/config.json')
    .then(data => data.json())
    .then(json => ({
      ...json,
      endpoint: process.env.REACT_APP_ENDPOINT || json.endpoint,
    }));
};

export default getConfig;
