import {Translate} from 'react-admin';
import * as Yup from 'yup';

type GetValidation = (translate: Translate) => Yup.AnySchema;

export default GetValidation;
