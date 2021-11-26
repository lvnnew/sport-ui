import {useCallback, useRef, useEffect} from 'react';
import {useEffectOnce, useUnmount, useUpdateEffect} from 'react-use';

const useInterval = (callback: () => void, ms: number) => {
  const timeout = useRef<ReturnType<typeof setTimeout>>();
  const plannedCallFunc = useRef<() => void>();
  const callbackFunc = useRef<() => void>(callback);
  const isLoading = useRef<boolean>(false);

  // this is needed to update the anonymous functions in the hook, please do not pass them
  useUpdateEffect(() => {
    callbackFunc.current = callback;
  }, [callback]);

  const clear = useCallback(() => {
    if (timeout.current) {
      clearTimeout(timeout.current);
    }
  }, []);

  // schedules a function call
  const plannedCall = useCallback(() => {
    if (!isLoading.current) {
      timeout.current = setTimeout(async () => {
        isLoading.current = true;

        if (callbackFunc.current) {
          try {
            await callbackFunc.current();
          } catch (error: any) {
            throw new Error(error);
          }
        }

        isLoading.current = false;

        if (plannedCallFunc.current) {
          plannedCallFunc.current();
        }
      }, ms);
    }
  }, [ms]);

  useEffect(() => {
    plannedCallFunc.current = plannedCall;
  }, [plannedCall]);

  const callNowAndResetTimer = useCallback<() => Promise<void>>(async () => {
    if (!isLoading.current) {
      clear();

      isLoading.current = true;

      if (callbackFunc.current) {
        await callbackFunc.current();
      }

      // eslint-disable-next-line require-atomic-updates
      isLoading.current = false;

      plannedCall();
    }
  }, [clear, plannedCall]);

  useEffectOnce(() => {
    plannedCall();
  });

  useUnmount(clear);

  return [callNowAndResetTimer, plannedCall, clear];
};

export default useInterval;
