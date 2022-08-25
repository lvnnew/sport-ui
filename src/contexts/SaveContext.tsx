import React, {FC, PropsWithChildren, useState} from 'react';
import {SaveContextProvider} from 'react-admin';

let counter = 0;
export const getUniqSaveId = () => counter++;

export const SaveContext: FC<PropsWithChildren> = ({children}) => {
  const [saveField, setSaveField] = useState<Record<number, boolean>>({}); // {[getUniqSaveId()]: boolean}

  const save = (save: Record<number, boolean>) => setSaveField((value) => ({...value, ...save}));

  const mutationMode = 'pessimistic';
  const saving = Object.values(saveField).find(Boolean); // finding the first true value

  return (
    <SaveContextProvider value={{save, saving, mutationMode}}>
      {children}
    </SaveContextProvider>
  );
};
