import * as React from 'react';
import {
  FC,
} from 'react';
import {
  Avatar,
  Box,
  Button,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from '@material-ui/core';
import {
  makeStyles,
} from '@material-ui/core/styles';
import CommentIcon from '@material-ui/icons/Comment';
import {
  Link,
} from 'react-router-dom';
import {
  useTranslate,
} from 'react-admin';

import CardWithIcon from './CardWithIcon';
import StarRatingField from '../reviews/StarRatingField';
import {
  Customer, Review,
} from '../../types';

interface Props {
    reviews?: Review[];
    customers?: { [key: string]: Customer };
    nb?: number;
}

const PendingReviews: FC<Props> = ({reviews = [], customers = {}, nb}) => {
  const classes = useStyles();
  const translate = useTranslate();

  return (
    <CardWithIcon
      icon={CommentIcon}
      subtitle={nb}
      title={translate('pos.dashboard.pending_reviews')}
      to='/reviews'
    >
      <List>
        {reviews.map((record: Review) => (
          <ListItem
            alignItems='flex-start'
            button
            component={Link}
            key={record.id}
            to={`/reviews/${record.id}`}
          >
            <ListItemAvatar>
              {customers[record.customer_id] ? (
                <Avatar
                  className={classes.avatar}
                  src={`${
                    customers[record.customer_id].avatar
                  }?size=32x32`}
                />
              ) : (
                <Avatar />
              )}
            </ListItemAvatar>

            <ListItemText
              className={classes.listItemText}
              primary={<StarRatingField record={record} />}
              secondary={record.comment}
              style={{paddingRight: 0}}
            />
          </ListItem>
        ))}
      </List>
      <Box flexGrow='1'>&nbsp;</Box>
      <Button
        className={classes.link}
        color='primary'
        component={Link}
        size='small'
        to='/reviews'
      >
        <Box className={classes.linkContent} p={1}>
          {translate('pos.dashboard.all_reviews')}
        </Box>
      </Button>
    </CardWithIcon>
  );
};

const useStyles = makeStyles(theme => ({
  avatar: {
    background: theme.palette.background.paper,
  },
  link: {
    borderRadius: 0,
  },
  linkContent: {
    color: theme.palette.primary.main,
  },
  listItemText: {
    display: '-webkit-box',
    height: '4em',
    overflowY: 'hidden',
    WebkitBoxOrient: 'vertical',
    WebkitLineClamp: 2,
  },
}));

export default PendingReviews;
