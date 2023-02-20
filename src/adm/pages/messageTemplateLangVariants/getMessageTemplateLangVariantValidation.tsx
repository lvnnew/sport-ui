import * as Yup from 'yup';
// DO NOT EDIT! THIS IS GENERATED FILE

const getMessageTemplateLangVariantValidation = () => Yup.object({
  subjectTemplate: Yup.string().required(),
  bodyTemplate: Yup.string().required(),
  messageTemplateId: Yup.string().required(),
  languageId: Yup.string().required(),
});

export default getMessageTemplateLangVariantValidation;
