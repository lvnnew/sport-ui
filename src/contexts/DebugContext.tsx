import React, {
  createContext,
  memo,
  useMemo,
  ReactNode,
  useContext,
  useState,
  useCallback,
} from 'react';
import {useHotkeys} from 'react-hotkeys-hook';

export interface IDebugContext {
  debug: boolean;
  setDebug: (debug: boolean) => void;
}

interface IProps {
  children: ReactNode | ReactNode[];
}

export const DebugContext = createContext<IDebugContext>(
  {} as IDebugContext,
);

export const DebugProvider = memo((props: IProps) => {
  const [debug, setDebug] = useState<boolean>(false);

  const toggleDebug = useCallback(() => setDebug(cur => !cur), [setDebug]);

  useHotkeys('Ctrl + Alt + S', toggleDebug, [toggleDebug]);

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
