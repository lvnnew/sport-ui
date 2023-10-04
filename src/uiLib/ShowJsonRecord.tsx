import React, {FC} from 'react';
import {useRecordContext} from 'react-admin';

const ShowJsonRecord: FC = () => {
  const record = useRecordContext();

  if (!record) {
    return null;
  }

  return (
    <div>
      <pre>
        <code>
          {JSON.stringify(record, null, 1)}
        </code>
      </pre>
    </div>
  );
};

export default ShowJsonRecord;
