import VisitorIcon from '@material-ui/icons/People';

import VisitorList from './VisitorList';
import VisitorCreate from './VisitorCreate';
import VisitorEdit from './VisitorEdit';

const resource = {
  create: VisitorCreate,
  edit: VisitorEdit,
  icon: VisitorIcon,
  list: VisitorList,
};

export default resource;
