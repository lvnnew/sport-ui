import {
  ThemeName,
} from '../types';

export const CHANGE_THEME = 'CHANGE_THEME';

export const changeTheme = (theme: ThemeName) => ({
  payload: theme,
  type: CHANGE_THEME,
});
