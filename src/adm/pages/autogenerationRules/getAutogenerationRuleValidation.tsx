import * as Yup from 'yup';
// DO NOT EDIT! THIS IS GENERATED FILE

const getAutogenerationRuleValidation = () => Yup.object({
  id: Yup.string().required(),
  title: Yup.string().required(),
  originalEntityType: Yup.string().required(),
  generatingEntityType: Yup.string().required(),
  originalEntityFilter: Yup.string().required(),
  generatingEntityConstructionRules: Yup.string().required(),
});

export default getAutogenerationRuleValidation;
