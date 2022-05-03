/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable unicorn/no-nested-ternary */
import * as React from 'react';
import {Children, isValidElement, cloneElement, ReactNode} from 'react';
import {RaRecord} from 'ra-core';
import {Grid, GridProps} from '@mui/material';
import {Labeled} from 'react-admin';

const sanitizeRestProps = ({
  className,
  children,
  record,
  resource,
  version,
  ...rest
}: any) => rest;

export interface FormGridProps extends GridProps {
  className?: string;
  children: ReactNode;
  record?: RaRecord;
  resource?: string;
  version?: number;
}

const FormGrid = ({
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
            fullWidth={field.props.fullWidth}
            label={field.props.label}
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
          })
        )
      ) : null),
    )}
  </Grid>
);

export default FormGrid;
