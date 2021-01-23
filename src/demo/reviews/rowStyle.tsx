import green from '@material-ui/core/colors/green';
import orange from '@material-ui/core/colors/orange';
import red from '@material-ui/core/colors/red';
import {
  useTheme,
} from '@material-ui/core/styles';
import {
  Identifier,
} from 'react-admin';

import {
  Review,
} from '../../types';

const rowStyle = (selectedRow?: Identifier) => (record: Review) => {
  const theme = useTheme();
  let style = {};
  if (!record) {
    return style;
  }
  if (selectedRow && selectedRow === record.id) {
    style = {
      ...style,
      backgroundColor: theme.palette.action.selected,
    };
  }
  if (record.status === 'accepted') {
    return {
      ...style,
      borderLeftColor: green[500],
      borderLeftStyle: 'solid',
      borderLeftWidth: 5,
    };
  }
  if (record.status === 'pending') {
    return {
      ...style,
      borderLeftColor: orange[500],
      borderLeftStyle: 'solid',
      borderLeftWidth: 5,
    };
  }
  if (record.status === 'rejected') {
    return {
      ...style,
      borderLeftColor: red[500],
      borderLeftStyle: 'solid',
      borderLeftWidth: 5,
    };
  }

  return style;
};

export default rowStyle;
