/* eslint-disable max-len */
import React, {FC, useMemo, useCallback} from 'react';
import {
  useTranslate,
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  AutocompleteInput,
} from 'react-admin';
import {Grid} from '@mui/material';
import {yupResolver} from '@hookform/resolvers/yup';
import getManagersToRoleValidation from '../getManagersToRoleValidation';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultManagersToRoleEdit: FC<EditProps> = (props: EditProps) => {
  const translate = useTranslate();

  const resolver = useMemo(() => yupResolver(getManagersToRoleValidation(translate)), [translate]);

  return (
    <Edit
      {...props}
      transform={useCallback((data: any) => ({
        ...data,
      }), [])}
    >
      <SimpleForm
        defaultValues={{}}
        resolver={resolver}
      >
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={3} lg={2}>
            <ReferenceInput
              source='managerId'
              reference='managers'
              sort={{id: 'id', order: 'DESC'}}
            >
              <AutocompleteInput
                fullWidth
                label={translate('catalogs.managersToRoles.fields.managerId')}
                optionText='title'
                defaultValue={null}
                parse={val => val || null}
              />
            </ReferenceInput>
          </Grid>
          <Grid item xs={12} sm={6} md={3} lg={2}>
            <ReferenceInput
              source='roleId'
              reference='roles'
              sort={{id: 'id', order: 'DESC'}}
            >
              <AutocompleteInput
                fullWidth
                label={translate('catalogs.managersToRoles.fields.roleId')}
                optionText='title'
                defaultValue={null}
                parse={val => val || null}
              />
            </ReferenceInput>
          </Grid>
        </Grid>
      </SimpleForm>
    </Edit>
  );
};

export default DefaultManagersToRoleEdit;
