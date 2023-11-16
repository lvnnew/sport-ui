import React, {FC, PropsWithChildren} from 'react';
import {useSidebarState} from 'react-admin';
import {useTheme} from '@mui/styles';
import {Theme} from '@mui/system';

type DataGridWidthProps = PropsWithChildren & {
  rows?: number;
  spacing?: number;
}

const DataGridWidth: FC<DataGridWidthProps> = ({
  children,
  rows = 1,
  spacing = 4,
}) => {
  const theme = useTheme<Theme>();
  const [isMenuOpen] = useSidebarState();

  return (
    <div
      style={{
        marginLeft: theme.spacing(spacing / 2),
        marginRight: theme.spacing(spacing / 2),
        height: 600,
        width: '100%',
        maxWidth: `calc((100vw - ${isMenuOpen ? 260 : 75}px) / ${rows} - 32px - ${theme.spacing(spacing)})`,
      }}
    >
      {children}
    </div>
  );
};

export default DataGridWidth;
