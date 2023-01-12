import React, {FC} from 'react';
import {
  useGetRecordRepresentation,
  useRecordContext,
  useResourceContext,
  useTranslate,
} from 'react-admin';

interface ResourceTitleProps {
  resourceType: 'catalogs' | 'documents' | 'sumRegistries' | 'infoRegistries';
}

const ResourceTitle: FC<ResourceTitleProps> = ({resourceType}) => {
  const record = useRecordContext();
  const resource = useResourceContext();
  const getRecordRepresentation = useGetRecordRepresentation(resource);
  const recordRepresentation = getRecordRepresentation(record);
  const translate = useTranslate();

  if (!record) {
    return null;
  }

  return (
    <span>
      {translate(`${resourceType}.${resource}.title.singular`)} {recordRepresentation}
    </span>
  );
};

export default ResourceTitle;
