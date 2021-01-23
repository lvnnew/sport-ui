import * as React from 'react';
import {
  FC,
} from 'react';
import {
  Datagrid,
  DateField,
  Edit,
  EditButton,
  EditProps,
  FormTab,
  NumberInput,
  Pagination,
  ReferenceInput,
  ReferenceManyField,
  required,
  SelectInput,
  TabbedForm,
  TextField,
  TextInput,
} from 'react-admin';
import {
  InputAdornment,
} from '@material-ui/core';
import {
  makeStyles,
} from '@material-ui/core/styles';
import RichTextInput from 'ra-input-rich-text';

import CustomerReferenceField from '../visitors/CustomerReferenceField';
import StarRatingField from '../reviews/StarRatingField';
import Poster from './Poster';
import {
  styles as createStyles,
} from './ProductCreate';
import {
  Product,
} from '../../types';

interface ProductTitleProps {
    record?: Product;
}

const ProductTitle: FC<ProductTitleProps> = ({record}) =>
  (record ? <span>Poster #{record.reference}</span> : null);

const useStyles = makeStyles({
  ...createStyles,
  comment: {
    maxWidth: '20em',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  },
  tab: {
    display: 'block',
    maxWidth: '40em',
  },
});

const ProductEdit: FC<EditProps> = props => {
  const classes = useStyles();

  return (
    <Edit {...props} title={<ProductTitle />}>
      <TabbedForm>
        <FormTab
          contentClassName={classes.tab}
          label='resources.products.tabs.image'
        >
          <Poster />
          <TextInput
            fullWidth
            source='image'
            validate={requiredValidate}
          />
          <TextInput
            fullWidth
            source='thumbnail'
            validate={requiredValidate}
          />
        </FormTab>
        <FormTab
          contentClassName={classes.tab}
          label='resources.products.tabs.details'
          path='details'
        >
          <TextInput source='reference' validate={requiredValidate} />
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
            validate={requiredValidate}
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
            validate={requiredValidate}
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
            validate={requiredValidate}
          />
          <ReferenceInput
            reference='categories'
            source='category_id'
            validate={requiredValidate}
          >
            <SelectInput source='name' />
          </ReferenceInput>
          <NumberInput
            className={classes.stock}
            source='stock'
            validate={requiredValidate}
          />
          <NumberInput
            className={classes.stock}
            source='sales'
            validate={requiredValidate}
          />
        </FormTab>
        <FormTab
          contentClassName={classes.tab}
          label='resources.products.tabs.description'
          path='description'
        >
          <RichTextInput
            label=''
            source='description'
            validate={requiredValidate}
          />
        </FormTab>
        <FormTab label='resources.products.tabs.reviews' path='reviews'>
          <ReferenceManyField
            addLabel={false}
            fullWidth
            pagination={<Pagination />}
            reference='reviews'
            target='product_id'
          >
            <Datagrid>
              <DateField source='date' />
              <CustomerReferenceField />
              <StarRatingField />
              <TextField
                cellClassName={classes.comment}
                source='comment'
              />
              <TextField source='status' />
              <EditButton />
            </Datagrid>
          </ReferenceManyField>
        </FormTab>
      </TabbedForm>
    </Edit>
  );
};

const requiredValidate = [required()];

export default ProductEdit;
