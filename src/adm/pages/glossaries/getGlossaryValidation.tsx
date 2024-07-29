import * as Yup from 'yup';
// DO NOT EDIT! THIS IS GENERATED FILE

const getGlossaryValidation = () => Yup.object({
  title: Yup.string().required(),
  description: Yup.string().required(),
  periodTypeId: Yup.string().required(),
});

export default getGlossaryValidation;
