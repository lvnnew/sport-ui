import React, {FC, memo, PropsWithChildren, useState, useEffect} from 'react';
import {Typography, Breadcrumbs as MUIBreadcrumbs, styled, Grid} from '@mui/material';
import {Link, useResourceContext, useRecordContext, useTranslate, useResourceDefinitionContext, useDataProvider} from 'react-admin';
import {useUpdateEffect} from 'react-use';

type RecordOption = {
  resource: string;
  id?: string | number;
  loaded?: true;
};

type Option = Partial<RecordOption> & {
  url?: string;
  title: string;
  isRecord?: boolean;
};

const isRecordOption = (opt: Option | RecordOption): opt is RecordOption => !('title' in opt);

type O = Option | RecordOption;

export type GetOpts = (record: Record<string, any>) => O[] | O;

type BreadcrumbsProps = {
  opts?: O[] | O | GetOpts;
};

const StyledBreadcrumbs = styled(MUIBreadcrumbs)({
  padding: '16px 8px 0',
});

export const BreadcrumbsComp: FC<BreadcrumbsProps> = memo(({
  opts = [],
}) => {
  const t = useTranslate();
  const resource = useResourceContext();
  const record = useRecordContext();
  const resourceDefinition = useResourceDefinitionContext();
  const dataProvider = useDataProvider();

  const prepareOpts = () => {
    let localOpts: O[] = [];

    if (typeof opts === 'function') {
      const res = opts(record);
      localOpts = Array.isArray(res) ? res : [res];
    } else if (Array.isArray(opts)) {
      localOpts = opts;
    } else {
      localOpts = [opts];
    }

    localOpts = localOpts.flatMap((lo): Option | Option[] => {
      if (isRecordOption(lo)) {
        const opt = {url: `/${lo.resource}`, title: `catalogs.${lo.resource}.title.plural`};
        if (lo.id) {
          return [opt, {title: lo.id.toString(), url: `/${lo.resource}/${lo.id}/show`, ...lo}];
        }

        return opt;
      }

      return lo;
    });

    if (resource) {
      localOpts.push({url: `/${resource}`, title: `catalogs.${resource}.title.plural`});

      if (record) {
        const definition = resourceDefinition.definitions?.[resource];

        if (typeof definition?.recordRepresentation === 'string' && record[definition.recordRepresentation]) {
          localOpts.push({title: record[definition?.recordRepresentation], isRecord: true});
        }
      }
    }

    return localOpts as Option[];
  };

  const [optionsList, setOptionsList] = useState(prepareOpts);

  useUpdateEffect(() => {
    setOptionsList(prepareOpts());
  }, [opts]);

  useUpdateEffect(() => {
    if (record && !optionsList?.find((o) => o.isRecord)) {
      const definition = resourceDefinition.definitions?.[resource];

      const title = typeof definition?.recordRepresentation === 'string' && record[definition.recordRepresentation];
      if (title) {
        setOptionsList(opts => [...opts, {title, isRecord: true}]);
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
          {t(opt.title)}
        </Link>
      );
    } else {
      return (
        <Typography
          key={idx}
          color='text.primary'
        >
          {t(opt.title)}
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
