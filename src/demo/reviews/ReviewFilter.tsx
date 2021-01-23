import * as React from 'react';
import {
  FC,
} from 'react';
import {
  AutocompleteInput,
  DateInput,
  Filter,
  ReferenceInput,
  SearchInput,
  SelectInput,
  FilterProps,
} from 'react-admin';
import {
  makeStyles,
} from '@material-ui/core/styles';
import {
  Customer,
} from '../../types';

const useFilterStyles = makeStyles({
  status: {width: 150},
});

const ReviewFilter: FC<Omit<FilterProps, 'children'>> = props => {
  const classes = useFilterStyles();

  return (
    <Filter {...props}>
      <SearchInput alwaysOn source='q' />
      <SelectInput
        choices={[
          {id: 'accepted', name: 'Accepted'},
          {id: 'pending', name: 'Pending'},
          {id: 'rejected', name: 'Rejected'},
        ]}
        className={classes.status}
        source='status'
      />
      <ReferenceInput reference='customers' source='customer_id'>
        <AutocompleteInput
          optionText={(choice?: Customer) =>
            (choice?.id ? // the empty choice is { id: '' }
              `${choice.first_name} ${choice.last_name}` :
              '')}
        />
      </ReferenceInput>
      <ReferenceInput reference='products' source='product_id'>
        <AutocompleteInput optionText='reference' />
      </ReferenceInput>
      <DateInput source='date_gte' />
      <DateInput source='date_lte' />
    </Filter>
  );
};

export default ReviewFilter;
