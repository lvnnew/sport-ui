import * as Yup from 'yup';
import GetValidation from '../../../types/GetValidation';
import {Translate} from 'react-admin';

// DO NOT EDIT! THIS IS GENERATED FILE

const getFileValudation: GetValidation = (t: Translate) => Yup.object({
  originalName: Yup.string().required().typeError(t('validation.required')),
  url: Yup.string().required().typeError(t('validation.required')),
  mimetype: Yup.string().required().typeError(t('validation.required')),
  s3Key: Yup.string().required().typeError(t('validation.required')),
  eTag: Yup.string().required().typeError(t('validation.required')),
});

export default getFileValudation;
