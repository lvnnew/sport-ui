import * as Yup from 'yup';
import GetValidation from '../../../types/GetValidation';
import {Translate} from 'react-admin';

// DO NOT EDIT! THIS IS GENERATED FILE

const getDelegationValudation: GetValidation = (t: Translate) => Yup.object({
  fromId: Yup.number().required().typeError(t('validation.onlyNumbers')),
  toId: Yup.number().required().typeError(t('validation.onlyNumbers')),
});

export default getDelegationValudation;
