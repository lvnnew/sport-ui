import React, {
  FC,
  useState,
  ReactElement,
  useCallback,
} from 'react';
import {DialogTitle, Dialog, DialogActions, DialogContent, Button, IconButton} from '@mui/material';
import {ModalProvider} from './contexts/ModalContext';

interface IconButtonModalProps {
  Icon: ReactElement<any, any>;
  dialogTitleText: string;
  children: React.ReactNode;
}

const IconButtonModal: FC<IconButtonModalProps> = (props) => {
  const {Icon, dialogTitleText, children} = props;

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = useCallback(() => {
    setOpen(false);
  }, [setOpen]);

  return (
    <div>
      <IconButton
        aria-label='settings'
        onClick={handleClickOpen}
      >
        {Icon}
      </IconButton>
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

export default IconButtonModal;
