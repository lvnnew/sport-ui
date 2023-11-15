import React, {FC, ComponentProps} from 'react';
import {Button as MuiButton, CircularProgress} from '@mui/material';

interface ButtonProps extends ComponentProps<typeof MuiButton> {
  loading: boolean;
}

const Button: FC<ButtonProps> = ({
  loading,
  children,
  ...rest
}) => (
  <MuiButton
    disabled={loading}
    {...rest}
  >
    {children}
    {loading && <CircularProgress
      size={24}
      sx={{
        left: '50%',
        marginLeft: '-12px',
        marginTop: '-12px',
        position: 'absolute',
        top: '50%',
      }}
    />}
  </MuiButton>
);

export default Button;
