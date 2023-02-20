import * as Yup from 'yup';
// DO NOT EDIT! THIS IS GENERATED FILE

const getMailingMessageValidation = () => Yup.object({
  mailingCampaignId: Yup
    .number()
    .required(),
  templateId: Yup.string().required(),
  languageId: Yup.string().required(),
  to: Yup.string().required(),
  locals: Yup.string().required(),
  localsHash: Yup.string().required(),
  priority: Yup
    .number()
    .required()
    .integer()
    .max(2147483647),
  dateCreated: Yup.date().required(),
  mailingMessageStatusId: Yup.string().required(),
  messageTemplateLangVariantId: Yup
    .number()
    .required(),
});

export default getMailingMessageValidation;
