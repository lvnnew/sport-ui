import * as Yup from 'yup';
// DO NOT EDIT! THIS IS GENERATED FILE

const getMessageTypeValidation = () => Yup.object({
  id: Yup.string().required(),
  title: Yup.string().required(),
});

export default getMessageTypeValidation;
