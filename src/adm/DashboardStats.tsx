/* eslint-disable max-len */
import React, {
  FC,
  useCallback,
  useEffect,
} from 'react';
import {
  makeStyles,
  createStyles,
} from '@mui/styles';
import {gql, useQuery, useMutation} from '@apollo/client';
import PendingRequestsIcon from '@mui/icons-material/ErrorOutlineOutlined';
import CardWithIcon from '../widgets/CardWithIcon/CardWithIcon';
import {Button} from '@mui/material';
import {CircularProgress} from '@mui/material';
import {useVersion} from 'ra-core';
import {useRefresh} from 'react-admin';

const STATS_QUERY = gql`
  query {
    Stat(id: "stats") {
      helloCount
    }
  }
`;

const RECALCULATE_STATS = gql`
  mutation recalculateStat {
    recalculateStat
  }
`;

const useStyles = makeStyles(() => createStyles({
  flex: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  buttonProgress: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: -12,
    marginLeft: -12,
  },
}));

const DashboardStats: FC = () => {
  const classes = useStyles();
  const version = useVersion();
  const refresh = useRefresh();

  const {data, loading, refetch} = useQuery(STATS_QUERY);

  const [recalculateStats, {loading: recalcLoading}] = useMutation(RECALCULATE_STATS);

  useEffect(() => {
    if (!loading) {
      refetch();
    }
  }, [version, refetch, loading]);

  const onClick = useCallback(async () => {
    await recalculateStats();
    refresh();
  }, [recalculateStats, refresh]);

  const resultToValue = (result: any) => (String(result) || '0');

  return (
    <>
      {!loading && data && data.Stat && (
        <div className={classes.flex}>
          <CardWithIcon
            icon={PendingRequestsIcon}
            subtitle={resultToValue(data.Stat.helloCount)}
            title='Hello Count'
          />
        </div>
      )}

      <Button
        style={{marginLeft: 2}}
        size='large'
        variant='contained'
        color='primary'
        onClick={onClick}
        disabled={recalcLoading}
      >
        Recalculate
        {recalcLoading && <CircularProgress size={24} className={classes.buttonProgress} />}
      </Button>
    </>
  );
};

export default DashboardStats;
