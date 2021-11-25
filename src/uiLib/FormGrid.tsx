/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable unicorn/no-nested-ternary */
import * as React from 'react';
import {Children, isValidElement, cloneElement, ReactNode} from 'react';
import {Record} from 'ra-core';
import {Grid, GridProps} from '@mui/base';
import {Labeled} from 'react-admin';

const sanitizeRestProps = ({
  basePath,
  className,
  children,
  record,
  resource,
  version,
  ...rest
}: any) => rest;

export interface FormGridProps extends GridProps {
  basePath?: string;
  className?: string;
  children: ReactNode;
  record?: Record;
  resource?: string;
  version?: number;
}

const FormGrid = ({
  basePath,
  children,
  record,
  resource,
  version,
  ...rest
}: FormGridProps) => (
  <Grid key={version} {...sanitizeRestProps(rest)}>
    {Children.map(children, field =>
      (field && isValidElement<any>(field) ? (
        field.props.addLabel ? (
          <Labeled
            basePath={basePath}
            disabled={false}
            fullWidth={field.props.fullWidth}
            label={field.props.label}
            record={record}
            resource={resource}
            source={field.props.source}
          >
            {field}
          </Labeled>
        ) : typeof field.type === 'string' ? (
          field
        ) : (
          cloneElement(field, {
            record,
            resource,
            basePath,
          })
        )
      ) : null),
    )}
  </Grid>
);

export default FormGrid;
