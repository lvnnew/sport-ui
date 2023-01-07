import React, {
  createContext,
  memo,
  useMemo,
  ReactNode,
  useContext,
  useState,
  useCallback,
  Dispatch,
  SetStateAction,
} from 'react';
import {useHotkeys} from 'react-hotkeys-hook';

export interface DebugContextData {
  debug: boolean;
  setDebug: Dispatch<SetStateAction<boolean>>;
}

interface IProps {
  children: ReactNode | ReactNode[];
}

export const DebugContext = createContext<DebugContextData>(
  {} as DebugContextData,
);

export const DebugProvider = memo((props: IProps) => {
  const [debug, setDebug] = useState<boolean>(false);

  const toggleDebug = useCallback(() => setDebug(cur => !cur), [setDebug]);

  useHotkeys('Ctrl + Alt + S', toggleDebug, [toggleDebug]);

  const context = useMemo<DebugContextData>(
    () => ({
      debug,
      setDebug,
    }),
    [debug, setDebug],
  );

  return <DebugContext.Provider {...props} value={context} />;
});

export const useDebug = (): DebugContextData =>
  useContext(DebugContext) as DebugContextData;
