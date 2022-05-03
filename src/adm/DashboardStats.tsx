/* eslint-disable max-len */
import React, {
  FC,
  useCallback,
} from 'react';
import {makeStyles, createStyles} from '@mui/styles';
import {gql, useQuery, useMutation} from '@apollo/client';
import PendingRequestsIcon from '@mui/icons-material/ErrorOutlineOutlined';
import CardWithIcon from '../widgets/CardWithIcon/CardWithIcon';
import {Button, CircularProgress, Grid} from '@mui/material';
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
  const refresh = useRefresh();

  const {data, loading} = useQuery(STATS_QUERY);

  const [recalculateStats, {loading: recalcLoading}] = useMutation(RECALCULATE_STATS);

  const onClick = useCallback(async () => {
    await recalculateStats();
    refresh();
  }, [recalculateStats, refresh]);

  const resultToValue = (result: any) => (String(result) || '0');

  return (
    <>
      {!loading && data && data.Stat && (
        <Grid container>
          <CardWithIcon
            icon={PendingRequestsIcon}
            subtitle={resultToValue(data.Stat.helloCount)}
            title='Hello Count'
          />
        </Grid>
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
