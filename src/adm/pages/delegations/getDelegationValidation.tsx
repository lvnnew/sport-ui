import * as Yup from 'yup';
import GetValidation from '../../../types/GetValidation';
import {Translate} from 'react-admin';

// DO NOT EDIT! THIS IS GENERATED FILE

const getDelegationValidation: GetValidation = (t: Translate) => Yup.object({
  fromId: Yup
    .number()
    .required(t('validation.required'))
    .typeError(t('validation.required')),
  toId: Yup
    .number()
    .required(t('validation.required'))
    .typeError(t('validation.required')),
});

export default getDelegationValidation;
