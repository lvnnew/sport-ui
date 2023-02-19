import * as Yup from 'yup';
import GetValidation from '../../../types/GetValidation';
import {Translate} from 'react-admin';

// DO NOT EDIT! THIS IS GENERATED FILE

const getTenantValidation: GetValidation = (t: Translate) => Yup.object({
  utcOffset: Yup
    .number()
    .required(t('validation.required'))
    .integer(t('validation.onlyIntegers'))
    .max(2147483647, t('validation.maxValue', {max: 2147483647}))
    .typeError(t('validation.required')),
});

export default getTenantValidation;
