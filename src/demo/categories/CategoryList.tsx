import * as React from 'react';
import {
  FC,
} from 'react';
import {
  EditButton, List, ListProps, useListContext,
} from 'react-admin';
import inflection from 'inflection';
import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
} from '@material-ui/core';
import {
  makeStyles,
} from '@material-ui/core/styles';

import LinkToRelatedProducts from './LinkToRelatedProducts';
import {
  Category,
} from '../../types';

const useStyles = makeStyles({
  actionSpacer: {
    display: 'flex',
    justifyContent: 'space-around',
  },
  media: {
    height: 140,
  },
  root: {
    marginTop: '1em',
  },
  title: {
    paddingBottom: '0.5em',
  },
});

const CategoryGrid: FC = props => {
  const classes = useStyles(props);
  const {data, ids} = useListContext<Category>();

  return ids ? (
    <Grid className={classes.root} container spacing={2}>
      {ids.map(id => (
        <Grid item key={id} lg={3} md={4} sm={6} xl={2} xs={12}>
          <Card>
            <CardMedia
              className={classes.media}
              image={`https://marmelab.com/posters/${data[id].name}-1.jpeg`}
            />
            <CardContent className={classes.title}>
              <Typography
                align='center'
                component='h2'
                variant='h5'
              >
                {inflection.humanize(data[id].name)}
              </Typography>
            </CardContent>
            <CardActions
              classes={{spacing: classes.actionSpacer}}
            >
              <LinkToRelatedProducts record={data[id]} />
              <EditButton
                basePath='/categories'
                record={data[id]}
              />
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  ) : null;
};

const CategoryList: FC<ListProps> = props => (
  <List
    {...props}
    actions={false}
    component='div'
    pagination={false}
    perPage={20}
    sort={{field: 'name', order: 'ASC'}}
  >
    <CategoryGrid />
  </List>
);

export default CategoryList;
