import React from 'react';
import DefaultLoadable, {Options} from 'react-loadable';
import Loader from './Loader';
import {Optional} from 'utility-types';

// eslint-disable-next-line @typescript-eslint/ban-types
const Loadable = <Props, Exports extends object>(
  options: Optional<Options<Props, Exports>, 'loading'>,
) => DefaultLoadable({
  ...options,
  loading: () => <Loader />,
} as Options<Props, Exports>);

export default Loadable;
