import * as Yup from 'yup';
// DO NOT EDIT! THIS IS GENERATED FILE

const getAutogenerationHistoryEntryValidation = () => Yup.object({
  date: Yup.date().required(),
  originalEntityType: Yup.string().required(),
  originalEntityId: Yup.string().required(),
  autogenerationRuleId: Yup.string().required(),
  version: Yup.string().required(),
});

export default getAutogenerationHistoryEntryValidation;
