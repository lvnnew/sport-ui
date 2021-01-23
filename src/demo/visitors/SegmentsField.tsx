import * as React from 'react';
import {
  FC,
} from 'react';
import Chip from '@material-ui/core/Chip';
import {
  useTranslate, FieldProps,
} from 'react-admin';
import segments from '../segments/data';
import {
  Customer,
} from '../../types';
import {
  makeStyles,
} from '@material-ui/core/styles';

const useStyles = makeStyles({
  chip: {margin: 4},
  main: {
    display: 'flex',
    flexWrap: 'wrap',
    marginBottom: -8,
    marginTop: -8,
  },
});

const SegmentsField: FC<FieldProps<Customer>> = ({record}) => {
  const translate = useTranslate();
  const classes = useStyles();

  return record ? (
    <span className={classes.main}>
      {record.groups &&
                record.groups.map(segmentId => {
                  const segment = segments.find(s => s.id === segmentId);

                  return segment ? (
                    <Chip
                      className={classes.chip}
                      key={segment.id}
                      label={translate(segment.name)}
                      size='small'
                    />
                  ) : null;
                })}
    </span>
  ) : null;
};

SegmentsField.defaultProps = {
  addLabel: true,
  source: 'groups',
};

export default SegmentsField;
