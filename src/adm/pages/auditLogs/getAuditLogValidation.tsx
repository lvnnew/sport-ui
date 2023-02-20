import * as Yup from 'yup';
// DO NOT EDIT! THIS IS GENERATED FILE

const getAuditLogValidation = () => Yup.object({
  date: Yup.date().required(),
  title: Yup.string().required(),
  entityTypeId: Yup.string().required(),
  entityId: Yup.string().required(),
  actionTypeId: Yup.string().required(),
});

export default getAuditLogValidation;
