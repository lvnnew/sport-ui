import React, {
  createContext,
  memo,
  useMemo,
  ReactNode,
  ReactNodeArray,
  useContext,
  useState,
} from 'react';

export interface IDebugContext {
  debug: boolean;
  setDebug: (debug: boolean) => void;
}

interface IProps {
  children: ReactNode | ReactNodeArray;
}

export const DebugContext = createContext<IDebugContext>(
  {} as IDebugContext,
);

export const DebugProvider = memo((props: IProps) => {
  const [debug, setDebug] = useState<boolean>(false);

  const context = useMemo<IDebugContext>(
    () => ({
      debug,
      setDebug,
    }),
    [debug, setDebug],
  );

  return <DebugContext.Provider {...props} value={context} />;
});

export const useDebug = (): IDebugContext =>
  useContext(DebugContext) as IDebugContext;
