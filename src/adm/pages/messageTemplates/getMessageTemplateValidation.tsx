import * as Yup from 'yup';
// DO NOT EDIT! THIS IS GENERATED FILE

const getMessageTemplateValidation = () => Yup.object({
  id: Yup.string().required(),
  title: Yup.string().required(),
  messageTypeId: Yup.string().required(),
});

export default getMessageTemplateValidation;
