import * as Yup from 'yup';
import GetValidation from '../../../types/GetValidation';
import {Translate} from 'react-admin';

// DO NOT EDIT! THIS IS GENERATED FILE

const getManagerValudation: GetValidation = (t: Translate) => Yup.object({
  lastName: Yup.string().required().typeError(t('validation.required')),
  firstName: Yup.string().required().typeError(t('validation.required')),
});

export default getManagerValudation;
