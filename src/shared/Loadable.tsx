import React, {lazy, Suspense} from 'react';
import Loader from './Loader';

const Loadable = (factory: Parameters<typeof lazy>[0]) => () => {
  const Component = lazy(factory);

  return (
    <Suspense fallback={<Loader />}>
      <Component />
    </Suspense>
  );
};

export default Loadable;
