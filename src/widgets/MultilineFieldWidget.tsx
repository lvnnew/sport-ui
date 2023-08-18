import * as React from 'react';
import {
  FC, useMemo,
} from 'react';
import {
  useRecordContext,
  useTranslate,
} from 'react-admin';
import MultilineCardWithIcon, {
  MultilineCardWithIconProps,
} from './CardWithIcon/MultilineCardWithIcon';

export interface MultilineFieldWidgetProps extends Omit<MultilineCardWithIconProps, 'icon' | 'to'> {
  // icon?: FC<any>;
  title?: string;
  measuring?: string;
  source: string;
  defaultValue?: string;
  prepare?: (val: any) => string;
  to?: string | ((field: string) => string);
  hideIfNoValue?: boolean;
}

const MultilineFieldWidget: FC<MultilineFieldWidgetProps> = (
  {
    source,
    measuring = '',
    defaultValue,
    // icon,
    prepare,
    to,
    hideIfNoValue,
    ...rest
  },
) => {
  const translate = useTranslate();
  const record = useRecordContext();
  const val = useMemo(() => (record ? record[source] ?? defaultValue : defaultValue), [record, source, defaultValue]);
  const prepared = useMemo(() => (prepare ? prepare(val) : val), [prepare, val]);
  const toValue = useMemo(() => (typeof to === 'function' ? to(prepared) : to), [to, prepared]);

  if (!record) {
    return null;
  }

  return val || !hideIfNoValue ? (
    <MultilineCardWithIcon
      {...rest}
      to={toValue}
      // icon={icon || ArrowForwardIosIcon}
      subtitle={prepared ? String(prepared) + ' ' + measuring : translate('app.notDefined')}
    />
  ) : null;
};

export default MultilineFieldWidget;
