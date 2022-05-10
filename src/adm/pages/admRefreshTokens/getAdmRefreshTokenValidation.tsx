import * as Yup from 'yup';
import GetValidation from '../../../types/GetValidation';
import {Translate} from 'react-admin';

// DO NOT EDIT! THIS IS GENERATED FILE

const getAdmRefreshTokenValidation: GetValidation = (t: Translate) => Yup.object({
  create: Yup.date().required().typeError(t('validation.required')),
  managerId: Yup.number().required().typeError(t('validation.onlyNumbers')),
});

export default getAdmRefreshTokenValidation;
