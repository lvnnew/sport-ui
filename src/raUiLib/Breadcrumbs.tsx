import React, {FC, memo, PropsWithChildren, useState, useEffect, ReactNode} from 'react';
import {Typography, Breadcrumbs as MUIBreadcrumbs, styled, Grid} from '@mui/material';
import {Link, useResourceContext, useRecordContext, useTranslate, useResourceDefinitionContext, useDataProvider, useGetRecordRepresentation} from 'react-admin';
import {useUpdateEffect} from 'react-use';

type RecordOption = {
  resource: string;
  id?: string | number;
};

type Option = Partial<RecordOption> & {
  url?: string;
  title: string;
};

type OptionState = Option & {
  title: ReactNode;
  isRecord?: boolean;
  loaded?: true;
}
const isRecordOption = (opt: Option | RecordOption): opt is RecordOption => !('title' in opt);

type O = Option | RecordOption;

export type GetOpts = (record: Record<string, any>) => O[] | O;

type BreadcrumbsProps = {
  opts?: O[] | O | GetOpts;
};

export const getTitle = (resource: string) => `entities.${resource}.title.singular`;

const StyledBreadcrumbs = styled(MUIBreadcrumbs)({
  padding: '16px 8px 0',
});

const defArray: any[] = [];

export const BreadcrumbsComp: FC<BreadcrumbsProps> = memo(({
  opts = defArray,
}) => {
  const t = useTranslate();
  const resource = useResourceContext();
  const record = useRecordContext();
  const resourceDefinition = useResourceDefinitionContext();
  const dataProvider = useDataProvider();
  const getRecordRepresentation = useGetRecordRepresentation(resource);

  const prepareOpts = () => {
    let prepareOpts: O[] = [];

    if (typeof opts === 'function') {
      const res = opts(record);
      prepareOpts = Array.isArray(res) ? res : [res];
    } else if (Array.isArray(opts)) {
      prepareOpts = opts;
    } else {
      prepareOpts = [opts];
    }

    const localOpts: OptionState[] = prepareOpts.flatMap((lo): Option | Option[] => {
      if (isRecordOption(lo)) {
        const opt = {url: `/${lo.resource}`, title: t(`entities.${lo.resource}.title.plural`)};
        if (lo.id) {
          return [opt, {title: lo.id.toString(), url: `/${lo.resource}/${lo.id}/show`, ...lo}];
        }

        return opt;
      }

      return {...lo, title: t(lo.title)};
    });

    if (resource) {
      localOpts.push({url: `/${resource}`, title: t(`entities.${resource}.title.plural`)});

      if (record) {
        const recordRepresentation = getRecordRepresentation(record) as string;
        if (recordRepresentation) {
          const option = {title: <>{t(getTitle(resource))} {recordRepresentation}</>, isRecord: true} as OptionState;
          localOpts.push(option);
        }
      }
    }

    return localOpts;
  };

  const [optionsList, setOptionsList] = useState<OptionState[]>(prepareOpts);

  useUpdateEffect(() => {
    setOptionsList(prepareOpts());
  }, [opts]);

  useUpdateEffect(() => {
    if (record && !optionsList?.find((o) => o.isRecord)) {
      const recordRepresentation = getRecordRepresentation(record);
      if (recordRepresentation) {
        const option = {title: <>{t(getTitle(resource))} {recordRepresentation}</>, isRecord: true} as OptionState;
        setOptionsList(opts => [...opts, option]);
      }
    }
  }, [record]);

  useEffect(() => {
    let mounted = true;

    const listToDownload = optionsList.filter((opt) => opt.resource && opt.id && !opt.loaded) as RecordOption[];

    listToDownload.forEach((opt) => {
      dataProvider.getOne(opt.resource, {id: opt.id}).then((data) => {
        const definition = resourceDefinition.definitions?.[opt.resource];

        const record = data.data;

        const title = typeof definition?.recordRepresentation === 'string' && record[definition.recordRepresentation];

        if (mounted && title) {
          setOptionsList((opts) => opts.map(o => {
            if (o?.resource === opt.resource && o?.id === opt.id) {
              return {...o, title, loaded: true};
            }

            return o;
          }));
        }
      });
    });

    return () => {
      mounted = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [optionsList]); // only when optionsList is updated

  const list = optionsList.map((opt, idx) => {
    if (opt.url) {
      return (
        <Link
          key={idx}
          underline='hover'
          color='inherit'
          href={opt.url}
          to={opt.url}
        >
          {opt.title}
        </Link>
      );
    } else {
      return (
        <Typography
          key={idx}
          color='text.primary'
        >
          {opt.title}
        </Typography>
      );
    }
  });

  return (
    <StyledBreadcrumbs>
      {list}
    </StyledBreadcrumbs>
  );
});

export const Breadcrumbs: FC<BreadcrumbsProps & PropsWithChildren> = (props) => {
  return (
    <>
      <Grid>
        <BreadcrumbsComp opts={props.opts} />
      </Grid>
      {props.children}
    </>
  );
};
