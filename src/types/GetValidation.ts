import {Translate} from 'react-admin';
import * as Yup from 'yup';

type GetValidation = (translate: Translate) => Yup.ObjectSchema<any, any, any, any>;

export default GetValidation;
