import * as React from 'react';
import {
  FC,
} from 'react';
import {
  Create,
  FormTab,
  NumberInput,
  ReferenceInput,
  SelectInput,
  TabbedForm,
  TextInput,
  required,
  CreateProps,
} from 'react-admin';
import {
  InputAdornment,
} from '@material-ui/core';
import {
  makeStyles,
} from '@material-ui/core/styles';
import RichTextInput from 'ra-input-rich-text';

export const styles = {
  height: {width: '7em'},
  heightFormGroup: {display: 'inline-block', marginLeft: 32},
  price: {width: '7em'},
  stock: {width: '7em'},
  width: {width: '7em'},
  widthFormGroup: {display: 'inline-block'},
};

const useStyles = makeStyles(styles);

const ProductCreate: FC<CreateProps> = props => {
  const classes = useStyles();

  return (
    <Create {...props}>
      <TabbedForm>
        <FormTab label='resources.products.tabs.image'>
          <TextInput
            autoFocus
            fullWidth
            source='image'
            validate={required()}
          />
          <TextInput
            fullWidth
            source='thumbnail'
            validate={required()}
          />
        </FormTab>
        <FormTab label='resources.products.tabs.details' path='details'>
          <TextInput source='reference' validate={required()} />
          <NumberInput
            className={classes.price}
            InputProps={{
              startAdornment: (
                <InputAdornment position='start'>
                  €
                </InputAdornment>
              ),
            }}
            source='price'
            validate={required()}
          />
          <NumberInput
            className={classes.width}
            formClassName={classes.widthFormGroup}
            InputProps={{
              endAdornment: (
                <InputAdornment position='start'>
                  cm
                </InputAdornment>
              ),
            }}
            source='width'
            validate={required()}
          />
          <NumberInput
            className={classes.height}
            formClassName={classes.heightFormGroup}
            InputProps={{
              endAdornment: (
                <InputAdornment position='start'>
                  cm
                </InputAdornment>
              ),
            }}
            source='height'
            validate={required()}
          />
          <ReferenceInput
            allowEmpty
            reference='categories'
            source='category_id'
          >
            <SelectInput source='name' />
          </ReferenceInput>
          <NumberInput
            className={classes.stock}
            source='stock'
            validate={required()}
          />
        </FormTab>
        <FormTab
          label='resources.products.tabs.description'
          path='description'
        >
          <RichTextInput label='' source='description' />
        </FormTab>
      </TabbedForm>
    </Create>
  );
};

export default ProductCreate;
