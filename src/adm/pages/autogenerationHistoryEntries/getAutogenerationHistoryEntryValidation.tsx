import * as Yup from 'yup';
import GetValidation from '../../../types/GetValidation';
import {Translate} from 'react-admin';

// DO NOT EDIT! THIS IS GENERATED FILE

const getAutogenerationHistoryEntryValidation: GetValidation = (t: Translate) => Yup.object({
  version: Yup.date().required().typeError(t('validation.required')),
});

export default getAutogenerationHistoryEntryValidation;
