import React, {FC} from 'react';
import {
  useRecordContext,
  PublicFieldProps,
  ReferenceField,
} from 'react-admin';
import pluralize from 'pluralize';

const RegistrarField: FC<PublicFieldProps> = ({label}) => {
  const record = useRecordContext();

  if (!record) {
    return null;
  }

  return (
    record ?
      (
        <ReferenceField
          source='registrarId'
          label={label}
          reference={pluralize(record.registrarTypeId)}
          link='show'
        />
      ) :
      null);
};

export default RegistrarField;
