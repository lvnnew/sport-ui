import * as Yup from 'yup';
import GetValidation from '../../../types/GetValidation';
import {Translate} from 'react-admin';

// DO NOT EDIT! THIS IS GENERATED FILE

const getAutogenerationHistoryEntryValudation: GetValidation = (t: Translate) => Yup.object({
  date: Yup.date().required().typeError(t('validation.required')),
  version: Yup.date().required().typeError(t('validation.required')),
});

export default getAutogenerationHistoryEntryValudation;
