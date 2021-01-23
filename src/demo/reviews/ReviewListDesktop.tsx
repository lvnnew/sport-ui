import * as React from 'react';
import {
  FC,
} from 'react';
import {
  Identifier,
  Datagrid,
  DateField,
  TextField,
  DatagridProps,
} from 'react-admin';
import {
  makeStyles,
} from '@material-ui/core/styles';

import ProductReferenceField from '../products/ProductReferenceField';
import CustomerReferenceField from '../visitors/CustomerReferenceField';
import StarRatingField from './StarRatingField';
import rowStyle from './rowStyle';

const useListStyles = makeStyles({
  comment: {
    maxWidth: '18em',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  },
  headerCell: {
    padding: '6px 8px 6px 8px',
  },
  headerRow: {
    borderLeftColor: 'white',
    borderLeftStyle: 'solid',
    borderLeftWidth: 5,
  },
  rowCell: {
    padding: '6px 8px 6px 8px',
  },
});

export interface ReviewListDesktopProps extends DatagridProps {
    selectedRow?: Identifier;
}

const ReviewListDesktop: FC<ReviewListDesktopProps> = ({
  selectedRow,
  ...props
}) => {
  const classes = useListStyles();

  return (
    <Datagrid
      classes={{
        headerCell: classes.headerCell,
        headerRow: classes.headerRow,
        rowCell: classes.rowCell,
      }}

      // @ts-ignore
      optimized
      rowClick='edit'
      rowStyle={rowStyle(selectedRow) as any}
      {...props}
    >
      <DateField source='date' />
      <CustomerReferenceField link={false} />
      <ProductReferenceField link={false} />
      <StarRatingField size='small' />
      <TextField cellClassName={classes.comment} source='comment' />
      <TextField source='status' />
    </Datagrid>
  );
};

export default ReviewListDesktop;
