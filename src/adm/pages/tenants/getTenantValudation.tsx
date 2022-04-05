import * as Yup from 'yup';
import GetValidation from '../../../types/GetValidation';
import {Translate} from 'react-admin';

// DO NOT EDIT! THIS IS GENERATED FILE

const getTenantValudation: GetValidation = (t: Translate) => Yup.object({
  utcOffset: Yup.number().required().typeError(t('validation.onlyNumbers')),
});

export default getTenantValudation;
