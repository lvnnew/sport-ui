import {useCallback, useRef, useEffect} from 'react';
import {useEffectOnce, useUnmount, useUpdateEffect} from 'react-use';

const useInterval = (callback: () => void, ms: number) => {
  const timeout = useRef<ReturnType<typeof setTimeout>>();
  const planCallFunc = useRef<() => void>();
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
  const planCall = useCallback(() => {
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

        if (planCallFunc.current) {
          planCallFunc.current();
        }
      }, ms);
    }
  }, [ms]);

  useEffect(() => {
    planCallFunc.current = planCall;
  }, [planCall]);

  const callNowAndResetTimer = useCallback<() => Promise<void>>(async () => {
    if (!isLoading.current) {
      clear();

      isLoading.current = true;

      if (callbackFunc.current) {
        await callbackFunc.current();
      }

      isLoading.current = false;

      planCall();
    }
  }, [clear, planCall]);

  useEffectOnce(() => {
    planCall();
  });

  useUnmount(clear);

  return [callNowAndResetTimer, planCall, clear];
};

export default useInterval;
