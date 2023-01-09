/* eslint-disable max-len */
import React, {FC, useMemo, useCallback} from 'react';
import {
  useTranslate,
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  AutocompleteInput,
} from 'react-admin';
import {Grid} from '@mui/material';
import {yupResolver} from '@hookform/resolvers/yup';
import getMessageTemplateLangVariantValidation from '../getMessageTemplateLangVariantValidation';
import {LoadingContext} from '../../../../contexts/LoadingContext';

// DO NOT EDIT! THIS IS GENERATED FILE

const DefaultMessageTemplateLangVariantCreate: FC<CreateProps> = (props: CreateProps) => {
  const translate = useTranslate();

  const resolver = useMemo(() => yupResolver(getMessageTemplateLangVariantValidation(translate)), [translate]);

  return (
    <Create
      redirect='show'
      {...props}
      transform={useCallback((data: any) => ({
        ...data,
      }), [])}
    >
      <LoadingContext>
        <SimpleForm
          defaultValues={{}}
          resolver={resolver}
        >
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={3} lg={2}>
              <TextInput
                fullWidth
                sx={{m: 1}}
                source='title'
                defaultValue={null}
                label={translate('catalogs.messageTemplateLangVariants.fields.title')}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={2}>
              <TextInput
                fullWidth
                sx={{m: 1}}
                source='subjectTemplate'
                required
                label={translate('catalogs.messageTemplateLangVariants.fields.subjectTemplate')}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={2}>
              <TextInput
                fullWidth
                sx={{m: 1}}
                source='bodyTemplate'
                required
                label={translate('catalogs.messageTemplateLangVariants.fields.bodyTemplate')}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={2}>
              <ReferenceInput
                source='messageTemplateId'
                reference='messageTemplates'
                sort={{field: 'id', order: 'DESC'}}
                label={translate('catalogs.messageTemplateLangVariants.fields.messageTemplateId')}
              >
                <AutocompleteInput
                  fullWidth
                  sx={{m: 1}}
                  size='small'
                  label={translate('catalogs.messageTemplateLangVariants.fields.messageTemplateId')}
                  defaultValue={null}
                  parse={val => val || null}
                  isRequired
                />
              </ReferenceInput>
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={2}>
              <ReferenceInput
                source='languageId'
                reference='languages'
                sort={{field: 'id', order: 'DESC'}}
                label={translate('catalogs.messageTemplateLangVariants.fields.languageId')}
              >
                <AutocompleteInput
                  fullWidth
                  sx={{m: 1}}
                  size='small'
                  label={translate('catalogs.messageTemplateLangVariants.fields.languageId')}
                  defaultValue={null}
                  parse={val => val || null}
                  isRequired
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
    </Create>
  );
};

export default DefaultMessageTemplateLangVariantCreate;
