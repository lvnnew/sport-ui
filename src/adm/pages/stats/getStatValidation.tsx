import * as Yup from 'yup';
import GetValidation from '../../../types/GetValidation';
import {Translate} from 'react-admin';

// DO NOT EDIT! THIS IS GENERATED FILE

const getStatValidation: GetValidation = (t: Translate) => Yup.object({
  id: Yup.string().required(t('validation.required')).typeError(t('validation.required')),
  helloCount: Yup
    .number()
    .integer(t('validation.onlyIntegers'))
    .max(2147483647, t('validation.maxValue', {max: 2147483647}))
    .nullable(),
});

export default getStatValidation;
