/* eslint-disable max-len */
import React, {FC, useContext, useMemo, cloneElement} from 'react';
import {
  useListContext,
  TopToolbar,
  sanitizeListRestProps,
  CreateButton,
  useResourceContext,
  ListActionsProps,
  useResourceDefinition,
  FilterContext,
  FilterButton,
} from 'react-admin';
import BackendExporter from '../adm/commonActions/BackendExporter';

const ListActions: FC<ListActionsProps> = (props) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const {className, filters: filtersProp, hasCreate: _, ...rest} = props;
  const {
    sort,
    displayedFilters,
    filterValues,
    exporter,
    showFilter,
    total,
  } = useListContext(props);
  const resource = useResourceContext(props);
  const {hasCreate} = useResourceDefinition(props);
  const filters = useContext(FilterContext) || filtersProp;
  return useMemo(
    () => (
      <TopToolbar className={className} {...sanitizeListRestProps(rest)}>
        {filtersProp ?
          cloneElement(filtersProp, {
            resource,
            showFilter,
            displayedFilters,
            filterValues,
            context: 'button',
          }) :
          filters && <FilterButton />}
        {hasCreate && <CreateButton />}
        {exporter !== false && (
          <BackendExporter />
        )}
      </TopToolbar>
    ),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [
      resource,
      displayedFilters,
      filterValues,
      filtersProp,
      showFilter,
      filters,
      total,
      className,
      sort,
      exporter,
      hasCreate,
    ],
  );
};

export default ListActions;
