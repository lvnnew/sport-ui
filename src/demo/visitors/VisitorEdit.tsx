import * as React from 'react';
import {
  FC,
} from 'react';
import {
  DateInput,
  Edit,
  EditProps,
  NullableBooleanInput,
  TextInput,
  PasswordInput,
  Toolbar,
  useTranslate,
  FormWithRedirect,
  required,
  email,
  FieldProps,
} from 'react-admin';
import {
  Box, Card, CardContent, Typography,
} from '@material-ui/core';

import Aside from './Aside';
import FullNameField from './FullNameField';
import SegmentsInput from './SegmentsInput';
import {
  validatePasswords,
} from './VisitorCreate';
import {
  Customer,
} from '../../types';

const VisitorEdit: FC<EditProps> = props => {
  return (
    <Edit
      aside={<Aside />}
      component='div'
      title={<VisitorTitle />}
      {...props}
    >
      <VisitorForm />
    </Edit>
  );
};

const VisitorTitle: FC<FieldProps<Customer>> = ({record}) =>
  (record ? <FullNameField record={record} size='32' /> : null);

const VisitorForm = (props: any) => {
  const translate = useTranslate();

  return (
    <FormWithRedirect
      {...props}
      render={(formProps: any) => (
        <Card>
          <form>
            <CardContent>
              <Box display={{lg: 'flex', md: 'block'}}>
                <Box flex={2} mr={{lg: '1em', md: 0}}>
                  <Typography gutterBottom variant='h6'>
                    {translate(
                      'resources.customers.fieldGroups.identity',
                    )}
                  </Typography>
                  <Box display={{sm: 'flex', xs: 'block'}}>
                    <Box
                      flex={1}
                      mr={{sm: '0.5em', xs: 0}}
                    >
                      <TextInput
                        fullWidth
                        resource='customers'
                        source='first_name'
                        validate={requiredValidate}
                      />
                    </Box>
                    <Box
                      flex={1}
                      ml={{sm: '0.5em', xs: 0}}
                    >
                      <TextInput
                        fullWidth
                        resource='customers'
                        source='last_name'
                        validate={requiredValidate}
                      />
                    </Box>
                  </Box>
                  <TextInput
                    fullWidth
                    resource='customers'
                    source='email'
                    type='email'
                    validate={[email(), required()]}
                  />
                  <Box display={{sm: 'flex', xs: 'block'}}>
                    <Box
                      flex={1}
                      mr={{sm: '0.5em', xs: 0}}
                    >
                      <DateInput
                        fullWidth
                        helperText={false}
                        resource='customers'
                        source='birthday'
                      />
                    </Box>
                    <Box
                      flex={2}
                      ml={{sm: '0.5em', xs: 0}}
                    />
                  </Box>

                  <Box mt='1em' />

                  <Typography gutterBottom variant='h6'>
                    {translate(
                      'resources.customers.fieldGroups.address',
                    )}
                  </Typography>
                  <TextInput
                    fullWidth
                    helperText={false}
                    multiline
                    resource='customers'
                    source='address'
                  />
                  <Box display={{sm: 'flex', xs: 'block'}}>
                    <Box
                      flex={2}
                      mr={{sm: '0.5em', xs: 0}}
                    >
                      <TextInput
                        fullWidth
                        helperText={false}
                        resource='customers'
                        source='city'
                      />
                    </Box>
                    <Box
                      flex={1}
                      mr={{sm: '0.5em', xs: 0}}
                    >
                      <TextInput
                        fullWidth
                        helperText={false}
                        resource='customers'
                        source='stateAbbr'
                      />
                    </Box>
                    <Box flex={2}>
                      <TextInput
                        fullWidth
                        helperText={false}
                        resource='customers'
                        source='zipcode'
                      />
                    </Box>
                  </Box>

                  <Box mt='1em' />

                  <Typography gutterBottom variant='h6'>
                    {translate(
                      'resources.customers.fieldGroups.change_password',
                    )}
                  </Typography>
                  <Box display={{sm: 'flex', xs: 'block'}}>
                    <Box
                      flex={1}
                      mr={{sm: '0.5em', xs: 0}}
                    >
                      <PasswordInput
                        fullWidth
                        resource='customers'
                        source='password'
                      />
                    </Box>
                    <Box
                      flex={1}
                      ml={{sm: '0.5em', xs: 0}}
                    >
                      <PasswordInput
                        fullWidth
                        resource='customers'
                        source='confirm_password'
                      />
                    </Box>
                  </Box>
                </Box>
                <Box
                  flex={1}
                  ml={{lg: '1em', xs: 0}}
                  mt={{lg: 0, xs: '1em'}}
                >
                  <Typography gutterBottom variant='h6'>
                    {translate(
                      'resources.customers.fieldGroups.stats',
                    )}
                  </Typography>
                  <div>
                    <SegmentsInput fullWidth />
                  </div>
                  <div>
                    <NullableBooleanInput
                      resource='customers'
                      source='has_newsletter'
                    />
                  </div>
                </Box>
              </Box>
            </CardContent>
            <Toolbar
              basePath={formProps.basePath}
              // eslint-disable-next-line react/jsx-handler-names
              handleSubmit={formProps.handleSubmit}
              invalid={formProps.invalid}
              record={formProps.record}
              resource='customers'
              saving={formProps.saving}
              undoable={true}
            />
          </form>
        </Card>
      )}
      validate={validatePasswords}
    />
  );
};

const requiredValidate = [required()];

export default VisitorEdit;
