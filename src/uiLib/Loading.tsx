import React, {FC, PropsWithChildren, ReactElement} from 'react';
import {Loading as LoadingComp} from 'ra-ui-materialui';

type Props = PropsWithChildren & {
  isLoading: boolean;
  children: ReactElement;
};

const Loading: FC<Props> = (props) => {
  if (props.isLoading) {
    return <LoadingComp />;
  }

  return props.children;
};

export default Loading;
