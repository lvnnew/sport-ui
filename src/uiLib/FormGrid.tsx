import * as React from 'react';
import {Children, isValidElement, cloneElement, ReactNode} from 'react';
import {Record} from 'ra-core';
import {Grid, GridProps} from '@material-ui/core';
import { Labeled } from 'react-admin';
import classnames from 'classnames';

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
  className,
  children,
  record,
  resource,
  version,
  ...rest
}: FormGridProps) => (
  <Grid key={version} {...sanitizeRestProps(rest)}>
    {Children.map(children, field =>
      field && isValidElement<any>(field) ? (
        field.props.addLabel ? (
          <Labeled
            record={record}
            resource={resource}
            basePath={basePath}
            label={field.props.label}
            source={field.props.source}
            disabled={false}
            fullWidth={field.props.fullWidth}
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
    ) : null
    )}
  </Grid>
);

export default FormGrid;
