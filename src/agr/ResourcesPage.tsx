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

// DO NOT EDIT! THIS IS GENERATED FILE

const ResourcesPage: FC = () => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.flex}>
        <NumberWiget
          request={gql`
              query {
                _allFilesMeta {
                  count
                }
              }
            `}
          resultToValue={result => result?._allFilesMeta?.count}
          title={'Files'}
          to='/files' />
        <NumberWiget
          request={gql`
              query {
                _allUsersMeta {
                  count
                }
              }
            `}
          resultToValue={result => result?._allUsersMeta?.count}
          title={'Users'}
          to='/users' />
        <NumberWiget
          request={gql`
              query {
                _allAdminsMeta {
                  count
                }
              }
            `}
          resultToValue={result => result?._allAdminsMeta?.count}
          title={'Admins'}
          to='/admins' />
        <NumberWiget
          request={gql`
              query {
                _allAppLoginsMeta {
                  count
                }
              }
            `}
          resultToValue={result => result?._allAppLoginsMeta?.count}
          title={'Logins of usual (not admins) users'}
          to='/appLogins' />
        <NumberWiget
          request={gql`
              query {
                _allManagersMeta {
                  count
                }
              }
            `}
          resultToValue={result => result?._allManagersMeta?.count}
          title={'Manager'}
          to='/managers' />
        <NumberWiget
          request={gql`
              query {
                _allManagerLoginsMeta {
                  count
                }
              }
            `}
          resultToValue={result => result?._allManagerLoginsMeta?.count}
          title={'Manager logins'}
          to='/managerLogins' />
        <NumberWiget
          request={gql`
              query {
                _allStatsMeta {
                  count
                }
              }
            `}
          resultToValue={result => result?._allStatsMeta?.count}
          title={'Stats'}
          to='/stats' />
        <NumberWiget
          request={gql`
              query {
                _allTagsMeta {
                  count
                }
              }
            `}
          resultToValue={result => result?._allTagsMeta?.count}
          title={'Tags'}
          to='/tags' />
      </div>
    </>
  );
};

export default ResourcesPage;
