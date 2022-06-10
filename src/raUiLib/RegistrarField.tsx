import React, {FC} from 'react';
import {
  useRecordContext,
  PublicFieldProps,
} from 'react-admin';
import pluralize from 'pluralize';

const stopPropagation = (e: any) => e.stopPropagation();

const RegistrarField: FC<PublicFieldProps> = () => {
  const record = useRecordContext();

  if (!record) {
    return null;
  }

  return (
    record ?
      <a
        href={`/${pluralize(record.registrarTypeId)}/${record.registrarId}/show`}
        onClick={stopPropagation}
      >
        Registrar</a> :
      null);
};

export default RegistrarField;
