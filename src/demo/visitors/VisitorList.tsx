/* eslint-_disable_ @typescript-eslint/camelcase */
import * as React from 'react';
import {
  FC,
} from 'react';
import {
  BooleanField,
  Datagrid,
  DateField,
  DateInput,
  Filter,
  FilterProps,
  List,
  ListProps,
  NullableBooleanInput,
  NumberField,
  SearchInput,
} from 'react-admin';
import {
  useMediaQuery, Theme,
} from '@material-ui/core';
import {
  makeStyles,
} from '@material-ui/core/styles';

import SegmentsField from './SegmentsField';
import SegmentInput from './SegmentInput';
import CustomerLinkField from './CustomerLinkField';
import ColoredNumberField from './ColoredNumberField';
import MobileGrid from './MobileGrid';
import VisitorListAside from './VisitorListAside';

const VisitorFilter = (props: Omit<FilterProps, 'children'>) => (
  <Filter {...props}>
    <SearchInput alwaysOn source='q' />
    <DateInput source='last_seen_gte' />
    <NullableBooleanInput source='has_ordered' />
    <NullableBooleanInput defaultValue source='has_newsletter' />
    <SegmentInput />
  </Filter>
);

const useStyles = makeStyles({
  nb_commands: {color: 'purple'},
});

const VisitorList: FC<ListProps> = (props: any) => {
  const classes = useStyles();
  const isXsmall = useMediaQuery<Theme>(theme =>
    theme.breakpoints.down('xs'),
  );
  const isSmall = useMediaQuery<Theme>(theme => theme.breakpoints.down('sm'));

  return (
    <List
      {...props}
      aside={<VisitorListAside />}
      filters={isSmall ? <VisitorFilter /> : null}
      perPage={25}
      sort={{field: 'last_seen', order: 'DESC'}}
    >
      {isXsmall ? (
        <MobileGrid />
      ) : (
        <Datagrid optimized rowClick='edit'>
          <CustomerLinkField />
          <DateField source='last_seen' />
          <NumberField
            className={classes.nb_commands}
            label='resources.customers.fields.commands'
            source='nb_commands'
          />
          <ColoredNumberField
            options={{currency: 'USD', style: 'currency'}}
            source='total_spent'
          />
          <DateField showTime source='latest_purchase' />
          <BooleanField label='News.' source='has_newsletter' />
          <SegmentsField />
        </Datagrid>
      )}
    </List>
  );
};

export default VisitorList;
