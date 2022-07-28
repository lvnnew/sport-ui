import React, {FC} from 'react';
import ReactMarkdown from 'react-markdown';
import {InputProps, useRecordContext} from 'react-admin';
import remarkGfm from 'remark-gfm';
import {InputLabel} from '@mui/material';

type ReactMarkdownFieldProps = Pick<InputProps, 'name' | 'source'> & {label: string};

const ReactMarkdownField: FC<ReactMarkdownFieldProps> = (props) => {
  const record = useRecordContext(props);
  const finalName = props.name || props.source;

  if (record[finalName]) {
    return (
      <div>
        <InputLabel>{props.label}</InputLabel>
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{record[finalName]}</ReactMarkdown>
      </div>
    );
  }

  return null;
};

export default ReactMarkdownField;
