/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable unicorn/no-nested-ternary */
import * as React from 'react';
import {Children, isValidElement, cloneElement, ReactNode} from 'react';
import {Record} from 'ra-core';
import {Grid, GridProps} from '@material-ui/core';
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

export interface ShowSimpleWrapperProps {
  basePath?: string;
  className?: string;
  children: ReactNode;
  record?: Record;
  resource?: string;
  version?: number;
}

const ShowSimpleWrapper = ({
  basePath,
  children,
  record,
  resource,
  version,
  ...rest
}: ShowSimpleWrapperProps) => (
  <div key={version} {...sanitizeRestProps(rest)}>
    {Children.map(children, field =>
      (field && isValidElement<any>(field) ? (
        typeof field.type === 'string' ? (
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
  </div>
);

export default ShowSimpleWrapper;
