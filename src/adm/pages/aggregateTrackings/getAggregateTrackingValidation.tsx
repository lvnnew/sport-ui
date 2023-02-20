import * as Yup from 'yup';
// DO NOT EDIT! THIS IS GENERATED FILE

const getAggregateTrackingValidation = () => Yup.object({
  entityTypeId: Yup.string().required(),
  entityId: Yup.string().required(),
  lastAggregatesComputed: Yup.date().required(),
  lastEntityUpdate: Yup.date().required(),
  aggregateVersion: Yup
    .number()
    .required()
    .integer()
    .max(2147483647),
});

export default getAggregateTrackingValidation;
