import React, {ReactElement} from 'react';
import {useTranslate, Filter, FilterProps, useLocaleState} from 'react-admin';

interface LabeledElementProps {
  label: string;
  source?: string;
}

interface LabeledElement extends ReactElement<LabeledElementProps> { }

export const withSortedFilters = (Component: React.ComponentType<FilterProps>) => (props: FilterProps) => {
  const translate = useTranslate();
  const [locale] = useLocaleState();

  const elements = React.Children.toArray(props.children) as LabeledElement[];

  const searchFirst = elements.find(child => child.props.source === 'q');
  const otherFilters = elements.filter(child => child.props.source !== 'q');

  const sortedFilters = otherFilters
    .map(child => React.cloneElement(child, {label: translate(child.props.label)}))
    .sort((a, b) => a.props.label.localeCompare(b.props.label, locale, {sensitivity: 'base'}));

  return (
    <Component {...props}>
      {searchFirst}
      {sortedFilters}
    </Component>
  );
};

export const SortedFilter = withSortedFilters(Filter as React.ComponentType<FilterProps>);
