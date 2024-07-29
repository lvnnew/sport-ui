import * as Yup from 'yup';
// DO NOT EDIT! THIS IS GENERATED FILE

const getWscMessageValidation = () => Yup.object({
  externalId: Yup.string().required(),
  dateTimeRaw: Yup.string().required(),
  sender: Yup.string().required(),
  content: Yup.string().required(),
  wscUserId: Yup
    .number()
    .required(),
  wscContactId: Yup
    .number()
    .required(),
});

export default getWscMessageValidation;
