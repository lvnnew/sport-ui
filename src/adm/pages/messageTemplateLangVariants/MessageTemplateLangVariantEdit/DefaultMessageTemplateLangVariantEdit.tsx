/* eslint-disable max-len */
import React, {FC, useMemo, useCallback} from 'react';
import {
  useTranslate,
  Edit,
  SimpleForm,
  EditProps,
  ToolbarProps,
  Toolbar,
  SaveButton,
  DeleteButton,
  usePermissions,
  TextInput,
  ReferenceInput,
  AutocompleteInput,
} from 'react-admin';
import {Grid} from '@mui/material';
import {yupResolver} from '@hookform/resolvers/yup';
import getMessageTemplateLangVariantValidation from '../getMessageTemplateLangVariantValidation';
import {hasPermission} from '../../../../utils/permissions';
import {LoadingContext} from '../../../../contexts/LoadingContext';

// DO NOT EDIT! THIS IS GENERATED FILE

const CustomToolbar = (props: ToolbarProps) => {
  const {permissions} = usePermissions<string[]>();

  return (
    <Toolbar
      {...props}
      sx={{display: 'flex', justifyContent: 'space-between'}}
    >
      <SaveButton />
      {hasPermission(permissions, 'messageTemplateLangVariants.delete') && <DeleteButton mutationMode='pessimistic' />}
    </Toolbar>
  );
};

const DefaultMessageTemplateLangVariantEdit: FC<EditProps> = (props: EditProps) => {
  const translate = useTranslate();

  const resolver = useMemo(() => yupResolver(getMessageTemplateLangVariantValidation(translate)), [translate]);

  return (
    <Edit
      {...props}
      transform={useCallback((data: any) => ({
        ...data,
      }), [])}
    >
      <LoadingContext>
        <SimpleForm
          defaultValues={{}}
          resolver={resolver}
          toolbar={<CustomToolbar />}
        >
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={3} lg={2}>
              <TextInput
                fullWidth
                sx={{m: 1}}
                source='subjectTemplate'
                label={translate('catalogs.messageTemplateLangVariants.fields.subjectTemplate')}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={2}>
              <TextInput
                fullWidth
                sx={{m: 1}}
                source='bodyTemplate'
                label={translate('catalogs.messageTemplateLangVariants.fields.bodyTemplate')}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={2}>
              <ReferenceInput
                source='messageTemplateId'
                reference='messageTemplates'
                sort={{id: 'id', order: 'DESC'}}
                label={translate('catalogs.messageTemplateLangVariants.fields.messageTemplateId')}
              >
                <AutocompleteInput
                  fullWidth
                  sx={{m: 1}}
                  size='small'
                  label={translate('catalogs.messageTemplateLangVariants.fields.messageTemplateId')}
                  optionText='title'
                  defaultValue={null}
                  parse={val => val || null}
                />
              </ReferenceInput>
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={2}>
              <ReferenceInput
                source='languageId'
                reference='languages'
                sort={{id: 'id', order: 'DESC'}}
                label={translate('catalogs.messageTemplateLangVariants.fields.languageId')}
              >
                <AutocompleteInput
                  fullWidth
                  sx={{m: 1}}
                  size='small'
                  label={translate('catalogs.messageTemplateLangVariants.fields.languageId')}
                  optionText='title'
                  defaultValue={null}
                  parse={val => val || null}
                />
              </ReferenceInput>
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={2}>
              <TextInput
                fullWidth
                sx={{m: 1}}
                source='additionalStyle'
                defaultValue={null}
                label={translate('catalogs.messageTemplateLangVariants.fields.additionalStyle')}
              />
            </Grid>
          </Grid>
        </SimpleForm>
      </LoadingContext>
    </Edit>
  );
};

export default DefaultMessageTemplateLangVariantEdit;
