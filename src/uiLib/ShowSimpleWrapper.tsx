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

export interface ShowSimpleWrapperProps {
  className?: string;
  children: ReactNode;
  record?: RaRecord;
  resource?: string;
  version?: number;
}

const ShowSimpleWrapper = ({
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
          })
        )
      ) : null),
    )}
  </div>
);

export default ShowSimpleWrapper;
