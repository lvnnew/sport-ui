import * as Yup from 'yup';
// DO NOT EDIT! THIS IS GENERATED FILE

const getMailingCampaignValidation = () => Yup.object({
  title: Yup.string().required(),
  mailingTypeId: Yup.string().required(),
  priority: Yup
    .number()
    .required()
    .integer()
    .max(2147483647),
  messageTemplateId: Yup.string().required(),
});

export default getMailingCampaignValidation;
