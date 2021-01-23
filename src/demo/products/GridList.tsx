import * as React from 'react';
import {
  FC,
} from 'react';
import MuiGridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import {
  makeStyles,
} from '@material-ui/core/styles';
import withWidth, {
  WithWidth,
} from '@material-ui/core/withWidth';
import {
  linkToRecord,
  NumberField,
  useListContext,
  DatagridProps,
  Identifier,
} from 'react-admin';
import {
  Link,
} from 'react-router-dom';
import {
  Breakpoint,
} from '@material-ui/core/styles/createBreakpoints';

const useStyles = makeStyles(theme => ({
  gridList: {
    margin: 0,
  },
  link: {
    color: '#fff',
  },
  placeholder: {
    backgroundColor: theme.palette.grey[300],
    height: '100%',
  },
  price: {
    display: 'inline',
    fontSize: '1em',
  },
  tileBar: {
    background:
            'linear-gradient(to top, rgba(0,0,0,0.8) 0%,rgba(0,0,0,0.4) 70%,rgba(0,0,0,0) 100%)',
  },
}));

const getColsForWidth = (width: Breakpoint) => {
  if (width === 'xs') {
    return 2;
  }
  if (width === 'sm') {
    return 3;
  }
  if (width === 'md') {
    return 4;
  }
  if (width === 'lg') {
    return 5;
  }

  return 6;
};

const times = (nbChildren: number, fn: (key: number) => any) =>
  Array.from({length: nbChildren}, (_, key) => fn(key));

const LoadingGridList: FC<GridProps & { nbItems?: number }> = ({
  width,
  nbItems = 20,
}) => {
  const classes = useStyles();

  return (
    <MuiGridList
      cellHeight={180}
      className={classes.gridList}
      cols={getColsForWidth(width)}
    >
      {' '}
      {times(nbItems, key => (
        <GridListTile key={key}>
          <div className={classes.placeholder} />
        </GridListTile>
      ))}
    </MuiGridList>
  );
};

const LoadedGridList: FC<GridProps> = ({width}) => {
  const {ids, data, basePath} = useListContext();
  const classes = useStyles();

  if (!ids || !data) {
    return null;
  }

  return (
    <MuiGridList
      cellHeight={180}
      className={classes.gridList}
      cols={getColsForWidth(width)}
    >
      {ids.map((id: Identifier) => (
        <GridListTile

          // @ts-ignore
          component={Link}
          key={id}
          to={linkToRecord(basePath, data[id].id)}
        >
          <img alt='' src={data[id].thumbnail} />
          <GridListTileBar
            className={classes.tileBar}
            subtitle={
              <span>
                {data[id].width}x{data[id].height},{' '}
                <NumberField
                  className={classes.price}
                  color='inherit'
                  options={{
                    currency: 'USD',
                    style: 'currency',
                  }}
                  record={data[id]}
                  source='price'
                />
              </span>
            }
            title={data[id].reference}
          />
        </GridListTile>
      ))}
    </MuiGridList>
  );
};

interface GridProps extends Omit<DatagridProps, 'width'>, WithWidth {}

const GridList: FC<WithWidth> = ({width}) => {
  const {loaded} = useListContext();

  return loaded ? (
    <LoadedGridList width={width} />
  ) : (
    <LoadingGridList width={width} />
  );
};

export default withWidth()(GridList);
