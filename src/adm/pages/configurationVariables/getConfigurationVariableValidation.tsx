import * as Yup from 'yup';
// DO NOT EDIT! THIS IS GENERATED FILE

const getConfigurationVariableValidation = () => Yup.object({
  id: Yup.string().required(),
  value: Yup.string().required(),
});

export default getConfigurationVariableValidation;
