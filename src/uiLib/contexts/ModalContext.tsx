import React, {
  createContext,
  memo,
  useMemo,
  ReactNode,
  useContext,
} from 'react';

interface ModalContextData {
  close: () => void;
}

const ModalContext = createContext<ModalContextData>(
  {} as ModalContextData,
);

interface ModalProviderProps extends ModalContextData {
  children: ReactNode | ReactNode[];
}

export const ModalProvider = memo(({close, ...rest}: ModalProviderProps) => {
  const context = useMemo<ModalContextData>(() => ({close}), [close]);

  return <ModalContext.Provider {...rest} value={context} />;
});

export const useModal = (): ModalContextData =>
  useContext(ModalContext) as ModalContextData;

export default ModalContext;
