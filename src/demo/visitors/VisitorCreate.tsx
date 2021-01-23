/* eslint-_disable_ @typescript-eslint/camelcase */
import * as React from 'react';
import {
  FC,
} from 'react';
import {
  Create,
  CreateProps,
  DateInput,
  SimpleForm,
  TextInput,
  useTranslate,
  PasswordInput,
  required,
  email,
} from 'react-admin';
import {
  Typography, Box,
} from '@material-ui/core';
import {
  makeStyles, Theme,
} from '@material-ui/core/styles';
import {
  Styles,
} from '@material-ui/styles/withStyles';

export const styles: Styles<Theme, any> = {
  address: {maxWidth: 544},
  city: {display: 'inline-block', marginLeft: 32},
  comment: {
    maxWidth: '20em',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  },
  confirm_password: {display: 'inline-block', marginLeft: 32},
  email: {width: 544},
  first_name: {display: 'inline-block'},
  last_name: {display: 'inline-block', marginLeft: 32},
  password: {display: 'inline-block'},
  zipcode: {display: 'inline-block'},
};

const useStyles = makeStyles(styles);

export const validatePasswords = ({
  password,
  confirm_password,
}: {
  [key: string]: any;
}) => {
  const errors = {} as any;

  if (password && confirm_password && password !== confirm_password) {
    errors.confirm_password = [
      'resources.customers.errors.password_mismatch',
    ];
  }

  return errors;
};

const VisitorCreate: FC<CreateProps> = props => {
  const classes = useStyles(props);

  return (
    <Create {...props}>
      <SimpleForm validate={validatePasswords}>
        <SectionTitle label='resources.customers.fieldGroups.identity' />
        <TextInput
          autoFocus
          formClassName={classes.first_name}
          source='first_name'
          validate={requiredValidate}
        />
        <TextInput
          formClassName={classes.last_name}
          source='last_name'
          validate={requiredValidate}
        />
        <TextInput
          formClassName={classes.email}
          fullWidth
          source='email'
          type='email'
          validate={[required(), email()]}
          validation={{email: true}}
        />
        <DateInput source='birthday' />
        <Separator />
        <SectionTitle label='resources.customers.fieldGroups.address' />
        <TextInput
          formClassName={classes.address}
          fullWidth
          helperText={false}
          multiline
          source='address'
        />
        <TextInput
          formClassName={classes.zipcode}
          helperText={false}
          source='zipcode'
        />
        <TextInput
          formClassName={classes.city}
          helperText={false}
          source='city'
        />
        <Separator />
        <SectionTitle label='resources.customers.fieldGroups.password' />
        <PasswordInput
          formClassName={classes.password}
          source='password'
        />
        <PasswordInput
          formClassName={classes.confirm_password}
          source='confirm_password'
        />
      </SimpleForm>
    </Create>
  );
};

const requiredValidate = [required()];

const SectionTitle = ({label}: { label: string }) => {
  const translate = useTranslate();

  return (
    <Typography gutterBottom variant='h6'>
      {translate(label)}
    </Typography>
  );
};

const Separator = () => <Box pt='1em' />;

export default VisitorCreate;
