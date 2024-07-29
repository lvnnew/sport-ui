import * as Yup from 'yup';
// DO NOT EDIT! THIS IS GENERATED FILE

const getEntitiesTrackingValidation = () => Yup.object({
  entityTypeId: Yup.string().required(),
  entityId: Yup.string().required(),
  lastEntityComputed: Yup.date().required(),
  lastEntityUpdate: Yup.date().required(),
});

export default getEntitiesTrackingValidation;
