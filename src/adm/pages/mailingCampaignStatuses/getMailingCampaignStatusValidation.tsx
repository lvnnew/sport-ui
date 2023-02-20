import * as Yup from 'yup';
// DO NOT EDIT! THIS IS GENERATED FILE

const getMailingCampaignStatusValidation = () => Yup.object({
  id: Yup.string().required(),
  title: Yup.string().required(),
});

export default getMailingCampaignStatusValidation;
