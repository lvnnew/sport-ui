import React, {useEffect, useState} from 'react';
import {YMInitializer} from 'react-yandex-metrika';
import getConfig from './config/config';

const Trackers = () => {
  const [config, setConfig] = useState<Record<string, any>>();

  useEffect(() => {
    const prepareConfig = async () => {
      const lastConfig = await getConfig();
      setConfig({
        ...lastConfig,
        'ym.accounts': JSON.parse(lastConfig['ym.accounts']),
      });
    };

    prepareConfig();
  }, [setConfig]);

  if (!config) {
    return null;
  }

  return (
    <>
      {config['ym.accounts'].length > 0 && <YMInitializer
        accounts={config['ym.accounts']}
        version='2'
        options={{
          clickmap: true,
          trackLinks: true,
          accurateTrackBounce: true,
          webvisor: true,
          trackHash: true,
        }}
      />}
    </>
  );
};

export default Trackers;
