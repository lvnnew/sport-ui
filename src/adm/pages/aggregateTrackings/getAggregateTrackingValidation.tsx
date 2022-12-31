import * as Yup from 'yup';
import GetValidation from '../../../types/GetValidation';
import {Translate} from 'react-admin';

// DO NOT EDIT! THIS IS GENERATED FILE

const getAggregateTrackingValidation: GetValidation = (t: Translate) => Yup.object({
  entityTypeId: Yup.string().required(t('validation.required')).typeError(t('validation.required')),
  entityId: Yup.string().required(t('validation.required')).typeError(t('validation.required')),
  lastAggregatesComputed: Yup.date().required(t('validation.required')).typeError(t('validation.required')),
  lastEntityUpdate: Yup.date().required(t('validation.required')).typeError(t('validation.required')),
  aggregateVersion: Yup.number().required(t('validation.required')).typeError(t('validation.required')),
});

export default getAggregateTrackingValidation;
