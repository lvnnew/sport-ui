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
import FormGrid from '../../../../uiLib/FormGrid';
import {yupResolver} from '@hookform/resolvers/yup';
import getRolesToPermissionValidation from '../getRolesToPermissionValidation';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultRolesToPermissionEdit: FC<EditProps> = (props: EditProps) => {
  const translate = useTranslate();

  const resolver = useMemo(() => yupResolver(getRolesToPermissionValidation(translate)), [translate]);

  return (
    <Edit
      {...props}
      transform={useCallback((data) => ({
        ...data,
      }), [])}
    >
      <SimpleForm
        defaultValues={{}}
        resolver={resolver}
      >
        <FormGrid container spacing={2}>
          <FormGrid item xs={12} sm={6} md={3} lg={2}>
            <ReferenceInput
              source='roleId'
              label={translate('catalogs.rolesToPermissions.fields.roleId')}
              reference='roles'
              sort={{id: 'id', order: 'DESC'}}
            >
              <AutocompleteInput fullWidth optionText='title' disableClearable />
            </ReferenceInput>
          </FormGrid>
          <FormGrid item xs={12} sm={6} md={3} lg={2}>
            <ReferenceInput
              source='permissionId'
              label={translate('catalogs.rolesToPermissions.fields.permissionId')}
              reference='permissions'
              sort={{id: 'id', order: 'DESC'}}
            >
              <AutocompleteInput fullWidth optionText='title' disableClearable />
            </ReferenceInput>
          </FormGrid>
        </FormGrid>
      </SimpleForm>
    </Edit>
  );
};

export default DefaultRolesToPermissionEdit;
