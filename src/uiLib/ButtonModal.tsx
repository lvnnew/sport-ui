import React, {
  FC,
  useState,
  useCallback,
  MouseEvent,
  ComponentProps,
} from 'react';
import {DialogTitle, Dialog, DialogActions, DialogContent, Button} from '@mui/material';
import {ModalProvider} from './contexts/ModalContext';

interface ButtonModalProps extends ComponentProps<typeof Button> {
  dialogTitleText: string;
  children: React.ReactNode;
  buttonText: string;
}

const ButtonModal: FC<ButtonModalProps> = (props) => {
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
