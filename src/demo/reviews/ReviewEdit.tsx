import * as React from 'react';
import {
  FC,
} from 'react';
import {
  useEditController,
  useTranslate,
  TextInput,
  SimpleForm,
  DateField,
  EditProps,
} from 'react-admin';
import {
  IconButton, Typography,
} from '@material-ui/core';
import {
  makeStyles,
} from '@material-ui/core/styles';
import CloseIcon from '@material-ui/icons/Close';

import ProductReferenceField from '../products/ProductReferenceField';
import CustomerReferenceField from '../visitors/CustomerReferenceField';
import StarRatingField from './StarRatingField';
import ReviewEditToolbar from './ReviewEditToolbar';
import {
  Review,
} from '../../types';

const useStyles = makeStyles(theme => ({
  form: {
    [theme.breakpoints.up('xs')]: {
      width: 400,
    },
    [theme.breakpoints.down('xs')]: {
      marginTop: -30,
      width: '100vw',
    },
  },
  inlineField: {
    display: 'inline-block',
    width: '50%',
  },
  root: {
    paddingTop: 40,
  },
  title: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'space-between',
    margin: '1em',
  },
}));

interface Props extends EditProps {
    onCancel: () => void;
}

const ReviewEdit: FC<Props> = ({onCancel, ...props}) => {
  const classes = useStyles();
  const controllerProps = useEditController<Review>(props);
  const translate = useTranslate();
  if (!controllerProps.record) {
    return null;
  }

  return (
    <div className={classes.root}>
      <div className={classes.title}>
        <Typography variant='h6'>
          {translate('resources.reviews.detail')}
        </Typography>
        <IconButton onClick={onCancel}>
          <CloseIcon />
        </IconButton>
      </div>
      <SimpleForm
        basePath={controllerProps.basePath}
        className={classes.form}
        record={controllerProps.record}
        redirect='list'
        resource='reviews'
        save={controllerProps.save}
        toolbar={<ReviewEditToolbar />}
        version={controllerProps.version}
      >
        <CustomerReferenceField formClassName={classes.inlineField} />
        <ProductReferenceField formClassName={classes.inlineField} />
        <DateField formClassName={classes.inlineField} source='date' />
        <StarRatingField formClassName={classes.inlineField} />
        <TextInput fullWidth multiline rowsMax={15} source='comment' />
      </SimpleForm>
    </div>
  );
};

export default ReviewEdit;
