import React, {
  FC,
} from 'react';

import NumberWiget from '../widgets/NumberWiget';
import {
  gql,
} from '@apollo/client';
import {
  makeStyles,
} from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  flex: {
    display: 'flex',
    flexWrap: 'wrap',
  },
}));

const ResourcesPage: FC = () => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.flex}>
        <NumberWiget
          request={gql`
              query {
                _allAgrTagsMeta {
                  count
                }
              }
            `}
          resultToValue={result => result?._allAgrTagsMeta?.count}
          title={'Tags'}
          to='/agrTags' />
      </div>
    </>
  );
};

export default ResourcesPage;
