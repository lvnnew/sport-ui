import React, {
  FC,
  memo,
} from 'react';
import {Loading} from 'ra-ui-materialui';

const Loader: FC = memo(() => (
  <Loading loadingPrimary='' loadingSecondary='' />
));

export default Loader;
