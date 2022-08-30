import React, {createContext, FC, PropsWithChildren, useCallback, useContext, useState} from 'react';
import {SaveContextProvider, useSaveContext} from 'react-admin';

let counter = 0;
export const getUniqSaveId = () => counter++;

const Context = createContext<(save: Record<number, boolean>) => void>(() => null);

export const useLoadingContext = () => useContext(Context);

export const LoadingContext: FC<PropsWithChildren> = ({children}) => {
  const saveContext = useSaveContext();
  const [saveField, setSaveField] = useState<Record<number, boolean>>({}); // {[getUniqSaveId()]: boolean}

  const save = useCallback((save: Record<number, boolean>) => {
    setSaveField((value) => ({...value, ...save}));
  }, []);

  const mutationMode = 'pessimistic';
  const saving = Object.values(saveField).find(Boolean); // finding the first true value

  return (
    <SaveContextProvider value={{mutationMode, ...saveContext, saving: saving || saveContext?.saving}}>
      <Context.Provider value={save}>
        {children}
      </Context.Provider>
    </SaveContextProvider>
  );
};
