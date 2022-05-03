import {ThemeOptions} from '@mui/material';

export const darkTheme = {
  overrides: {
    MuiAppBar: {
      colorSecondary: {
        backgroundColor: '#616161e6',
        color: '#ffffffb3',
      },
    },
  },
  typography: {
    fontFamily: '"Google Sans", "Nunito", "Helvetica Neue", Helvetica, Arial, sans-serif',
    button: {
      textTransform: 'none',
    },
  },
  palette: {
    primary: {
      main: '#90caf9',
    },
    secondary: {
      main: '#FBBA72',
    },
    mode: 'dark', // Switching the dark mode on is a single property value change.
  },
} as ThemeOptions;

export const lightTheme = {
  overrides: {
    MuiAppBar: {
      styleOverrides: {
        colorSecondary: {
          backgroundColor: '#fff',
          color: '#808080',
        },
      },
    },
    MuiButton: {
      contained: {
        backgroundColor: '#fff',
        boxShadow: 'none',
        color: '#4f3cc9',
      },
    },
    MuiFilledInput: {
      root: {
        '&$disabled': {
          backgroundColor: 'rgba(0, 0, 0, 0.04)',
        },
        backgroundColor: 'rgba(0, 0, 0, 0.04)',
      },
    },
    MuiLinearProgress: {
      barColorPrimary: {
        backgroundColor: '#d7d7d7',
      },
      colorPrimary: {
        backgroundColor: '#f5f5f5',
      },
    },
    MuiPaper: {
      elevation1: {
        boxShadow: 'none',
      },
      root: {
        backgroundClip: 'padding-box',
        border: '1px solid #e0e0e3',
      },
    },
    RaMenuItemLink: {
      active: {
        borderLeft: '3px solid #4f3cc9',
      },
      root: {
        borderLeft: '3px solid #fff',
      },
    },
  },
  typography: {
    fontFamily: '"Google Sans", "Nunito", "Helvetica Neue", Helvetica, Arial, sans-serif',
    button: {
      textTransform: 'none',
    },
  },
  palette: {
    background: {
      default: '#fcfcfe',
    },
    primary: {
      main: '#4f3cc9',
    },
    secondary: {
      contrastText: '#fff',
      dark: '#001064',
      light: '#5f5fc4',
      main: '#283593',
    },
  },
  shape: {
    borderRadius: 10,
  },
} as ThemeOptions;
