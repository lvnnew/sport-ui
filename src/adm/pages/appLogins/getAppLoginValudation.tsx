import * as Yup from 'yup';
import GetValidation from '../../../types/GetValidation';
import {Translate} from 'react-admin';

// DO NOT EDIT! THIS IS GENERATED FILE

const getAppLoginValudation: GetValidation = (t: Translate) => Yup.object({
  userId: Yup.number().required().typeError(t('validation.onlyNumbers')),
});

export default getAppLoginValudation;
