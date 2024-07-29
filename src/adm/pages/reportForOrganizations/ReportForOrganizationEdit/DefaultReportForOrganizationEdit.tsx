/* eslint-disable max-len */
import React, {FC, useMemo, useCallback} from 'react';
import {
  Edit,
  SimpleForm,
  EditProps,
  ToolbarProps,
  Toolbar,
  SaveButton,
  TextInput,
  ReferenceInput,
  AutocompleteInput,
  BooleanInput,
  DeleteButton,
  usePermissions,
} from 'react-admin';
import DateInput from '../../../../uiLib/DateInput';
import {useDebug} from '../../../../contexts/DebugContext';
import {Grid} from '@mui/material';
import {yupResolver} from '@hookform/resolvers/yup';
import getReportForOrganizationValidation from '../getReportForOrganizationValidation';
import {hasPermission} from '../../../../utils/permissions';
import {LoadingContext} from '../../../../contexts/LoadingContext';
import {Breadcrumbs} from '../../../../raUiLib/Breadcrumbs';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultToolbar = (props: ToolbarProps) => {
  const {permissions} = usePermissions<string[]>();

  return (
    <Toolbar
      {...props}
      sx={{display: 'flex', justifyContent: 'space-between'}}
    >
      <SaveButton />
      {hasPermission(permissions, 'reportForOrganizations.delete') && <DeleteButton mutationMode='pessimistic' />}
    </Toolbar>
  );
};

const defaultValues = {
  paid: false,
};

const DefaultReportForOrganizationEdit: FC<EditProps> = (props: EditProps) => {
  const {debug} = useDebug();
  const resolver = useMemo(() => yupResolver(getReportForOrganizationValidation()), []);

  return (
    <Edit
      redirect='show'
      {...props}
      transform={useCallback((data: any, previousData?: { previousData: any }) => {
        const mergedData = {...defaultValues, ...previousData?.previousData, ...data};
        return mergedData;
      }, [])}
      mutationMode='pessimistic'
      actions={<Breadcrumbs />}
    >
      <LoadingContext>
        <SimpleForm
          defaultValues={defaultValues}
          resolver={resolver}
          toolbar={<DefaultToolbar />}
        >
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={3} lg={2}>
              <TextInput
                fullWidth
                sx={{m: 1}}
                source='title'
                isRequired
                label='catalogs.reportForOrganizations.fields.title'
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={2}>
              <ReferenceInput
                source='competitionId'
                reference='competitions'
                sort={{field: 'id', order: 'DESC'}}
                perPage={100}
                label='catalogs.reportForOrganizations.fields.competitionId'
              >
                <AutocompleteInput
                  fullWidth
                  sx={{m: 1}}
                  size='small'
                  label='catalogs.reportForOrganizations.fields.competitionId'
                  defaultValue={null}
                  parse={val => val || null}
                  isRequired
                  noOptionsText='ra.message.noOptions'
                />
              </ReferenceInput>
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={2}>
              <ReferenceInput
                source='organizatorId'
                reference='organizators'
                sort={{field: 'id', order: 'DESC'}}
                perPage={100}
                label='catalogs.reportForOrganizations.fields.organizatorId'
              >
                <AutocompleteInput
                  fullWidth
                  sx={{m: 1}}
                  size='small'
                  label='catalogs.reportForOrganizations.fields.organizatorId'
                  defaultValue={null}
                  parse={val => val || null}
                  isRequired
                  noOptionsText='ra.message.noOptions'
                />
              </ReferenceInput>
            </Grid>
            {debug && <Grid item xs={12} sm={6} md={3} lg={2}>
              <DateInput
                fullWidth
                sx={{m: 1}}
                source='lastUpdated'
                defaultValue={null}
                label='catalogs.reportForOrganizations.fields.lastUpdated'
              />
            </Grid>}
            <Grid item xs={12} sm={6} md={3} lg={2}>
              <BooleanInput
                fullWidth
                sx={{m: 1}}
                source='paid'
                defaultValue={null}
                label='catalogs.reportForOrganizations.fields.paid'
              />
            </Grid>
          </Grid>
        </SimpleForm>
      </LoadingContext>
    </Edit>
  );
};

export default DefaultReportForOrganizationEdit;
