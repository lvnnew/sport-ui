import React, {
  FC,
  useState,
  createContext,
  memo,
  useMemo,
  ReactNode,
  useContext,
  useCallback,
  MouseEvent,
  ComponentProps,
} from 'react';
import {DialogTitle, Dialog, DialogActions, DialogContent, Button} from '@mui/material';

interface ModalContextData {
  close: () => void;
}

const ModalContext = createContext<ModalContextData>(
  {} as ModalContextData,
);

interface ModalProviderProps extends ModalContextData {
  children: ReactNode | ReactNode[];
}

const ModalProvider = memo(({close, ...rest}: ModalProviderProps) => {
  const context = useMemo<ModalContextData>(() => ({close}), [close]);

  return <ModalContext.Provider {...rest} value={context} />;
});

export const useModal = (): ModalContextData =>
  useContext(ModalContext) as ModalContextData;

interface ModalProps extends ComponentProps<typeof Button> {
  dialogTitleText: string;
  children: React.ReactNode;
  buttonText: string;
}

const ButtonModal: FC<ModalProps> = (props: ModalProps) => {
  const {buttonText, dialogTitleText, children, ...rest} = props;

  const [open, setOpen] = useState(false);

  const handleClickOpen = (event: MouseEvent) => {
    event.stopPropagation();
    setOpen(true);
  };

  const handleClose = useCallback(() => {
    setOpen(false);
  }, [setOpen]);

  return (
    <div onClick={useCallback((event: MouseEvent) => event.stopPropagation(), [])}>
      <Button
        aria-label='settings'
        onClick={handleClickOpen}
        {...rest}
      >
        {buttonText}
      </Button>
      <Dialog onClose={handleClose} open={open}>
        <DialogTitle>{dialogTitleText}</DialogTitle>
        <DialogContent>
          <ModalProvider close={handleClose}>
            {children}
          </ModalProvider>
        </DialogContent>
        <DialogActions>
          <Button color='primary' onClick={handleClose}>
            Отменить
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default ButtonModal;
