import React, {cloneElement, useState} from 'react';
import {
  useListContext,
  TopToolbar,
  sanitizeListRestProps,
  usePermissions,
} from 'react-admin';
import {Button} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import CreateManagerDialog from './CreateManagerDialog';
import {hasPermission} from '../../../../utils/permissions';

const CustomManagerAction = (props: any) => {
  const [openCreateManagerDialog, setOpenCreateManagerDialog] = useState(false);
  const {
    className,
    filters,
    ...rest
  } = props;
  const {
    resource,
    displayedFilters,
    filterValues,
    showFilter,
  } = useListContext();

  const {permissions} = usePermissions<string[]>();

  const createManagerClick = async () => {
    setOpenCreateManagerDialog(true);
  };

  return (
    <TopToolbar className={className} {...sanitizeListRestProps(rest)}>
      {filters && cloneElement(filters, {
        resource,
        showFilter,
        displayedFilters,
        filterValues,
        context: 'button',
      })}
      {hasPermission(permissions, 'managers.newManager') && <Button
        color='primary'
        onClick={() => createManagerClick()}
        size='small'
      >
        <AddIcon /> Create manager
      </Button>}
      <CreateManagerDialog
        open={openCreateManagerDialog}
        setOpen={setOpenCreateManagerDialog}
      />
    </TopToolbar>
  );
};

export default CustomManagerAction;
