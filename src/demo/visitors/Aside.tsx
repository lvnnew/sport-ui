/* eslint-_disable_ @typescript-eslint/camelcase */
import * as React from 'react';
import {
  FC,
} from 'react';
import {
  NumberField,
  TextField,
  DateField,
  useTranslate,
  useGetList,
  linkToRecord,
  Record,
  RecordMap,
  Identifier,
} from 'react-admin';
import {
  Tooltip,
  Typography,
  Card,
  CardContent,
  CardHeader,
  Avatar,
  IconButton,
  Box,
} from '@material-ui/core';
import {
  Link,
} from 'react-router-dom';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import ContentCreate from '@material-ui/icons/Create';
import {
  makeStyles,
} from '@material-ui/core/styles';

import order from '../orders';
import review from '../reviews';
import ProductReferenceField from '../products/ProductReferenceField';
import StarRatingField from '../reviews/StarRatingField';
import {
  Order as OrderRecord, Review as ReviewRecord,
} from '../../types';

const useAsideStyles = makeStyles(theme => ({
  root: {
    width: 400,
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
  },
}));

interface AsideProps {
    record?: Record;
    basePath?: string;
}

const Aside: FC<AsideProps> = ({record, basePath}) => {
  const classes = useAsideStyles();

  return (
    <div className={classes.root}>
      {record && <EventList basePath={basePath} record={record} />}
    </div>
  );
};

interface EventListProps {
    record?: Record;
    basePath?: string;
}
const EventList: FC<EventListProps> = ({record, basePath}) => {
  const translate = useTranslate();
  const {data: orders, ids: orderIds} = useGetList<OrderRecord>(
    'commands',
    {page: 0, perPage: 100},
    {field: 'date', order: 'DESC'},
    {customer_id: record && record.id},
  );
  const {data: reviews, ids: reviewIds} = useGetList<ReviewRecord>(
    'reviews',
    {page: 0, perPage: 100},
    {field: 'date', order: 'DESC'},
    {customer_id: record && record.id},
  );
  const events = mixOrdersAndReviews(orders, orderIds, reviews, reviewIds);

  return (
    <>
      <Box m='0 0 1em 1em'>
        <Card>
          <CardContent>
            <Typography gutterBottom variant='h6'>
              {translate(
                'resources.customers.fieldGroups.history',
              )}
            </Typography>
            <Box display='flex'>
              <Box flexGrow={1}>
                <Box display='flex' mb='1em'>
                  <Box mr='1em'>
                    <AccessTimeIcon
                      color='disabled'
                      fontSize='small'
                    />
                  </Box>
                  <Box flexGrow={1}>
                    <Typography>
                      {translate(
                        'resources.customers.fields.first_seen',
                      )}
                    </Typography>
                    <DateField
                      record={record}
                      source='first_seen'
                    />
                  </Box>
                </Box>
                {orderIds && orderIds.length > 0 && (
                  <Box display='flex'>
                    <Box mr='1em'>
                      <order.icon
                        color='disabled'
                        fontSize='small'
                      />
                    </Box>
                    <Box flexGrow={1}>
                      <Typography>
                        {translate(
                          'resources.commands.amount',
                          {
                            smart_count:
                                                            orderIds.length,
                          },
                        )}
                      </Typography>
                    </Box>
                  </Box>
                )}
              </Box>
              <Box flexGrow={1}>
                <Box display='flex' mb='1em'>
                  <Box mr='1em'>
                    <AccessTimeIcon
                      color='disabled'
                      fontSize='small'
                    />
                  </Box>
                  <Box flexGrow={1}>
                    <Typography>
                      {translate(
                        'resources.customers.fields.last_seen',
                      )}
                    </Typography>
                    <DateField
                      record={record}
                      source='last_seen'
                    />
                  </Box>
                </Box>
                {reviewIds && reviewIds.length > 0 && (
                  <Box display='flex'>
                    <Box mr='1em'>
                      <review.icon
                        color='disabled'
                        fontSize='small'
                      />
                    </Box>
                    <Box flexGrow={1}>
                      <Typography>
                        {translate(
                          'resources.reviews.amount',
                          {
                            smart_count:
                                                            reviewIds.length,
                          },
                        )}
                      </Typography>
                    </Box>
                  </Box>
                )}
              </Box>
            </Box>
          </CardContent>
        </Card>
      </Box>

      {events.map(event =>
        (event.type === 'order' ? (
          <Order
            basePath={basePath}
            key={`event_${event.data.id}`}
            record={event.data as OrderRecord}
          />
        ) : (
          <Review
            basePath={basePath}
            key={`review_${event.data.id}`}
            record={event.data as ReviewRecord}
          />
        )),
      )}
    </>
  );
};

interface AsideEvent {
    type: string;
    date: Date;
    data: OrderRecord | ReviewRecord;
}

const mixOrdersAndReviews = (
  orders?: RecordMap<OrderRecord>,
  orderIds?: Identifier[],
  reviews?: RecordMap<ReviewRecord>,
  reviewIds?: Identifier[],
): AsideEvent[] => {
  const eventsFromOrders =
        orderIds && orders ?
          orderIds.map<AsideEvent>(id => ({
            data: orders[id],
            date: orders[id].date,
            type: 'order',
          })) :
          [];
  const eventsFromReviews =
        reviewIds && reviews ?
          reviewIds.map<AsideEvent>(id => ({
            data: reviews[id],
            date: reviews[id].date,
            type: 'review',
          })) :
          [];
  const events = eventsFromOrders.concat(eventsFromReviews);
  events.sort(
    (e1, e2) => new Date(e1.date).getTime() - new Date(e2.date).getTime(),
  );

  return events;
};

const useEventStyles = makeStyles({
  card: {
    margin: '0 0 1em 1em',
  },
  cardHeader: {
    alignItems: 'flex-start',
  },
  clamp: {
    '-webkit-box-orient': 'vertical',
    '-webkit-line-clamp': 3,
    display: '-webkit-box',
    overflow: 'hidden',
  },
});

interface OrderProps {
    record?: OrderRecord;
    basePath?: string;
}

const Order: FC<OrderProps> = ({record, basePath}) => {
  const translate = useTranslate();
  const classes = useEventStyles();

  return record ? (
    <Card className={classes.card}>
      <CardHeader
        action={<EditButton basePath='/commands' record={record} />}
        avatar={
          <Avatar
            aria-label={translate('resources.commands.name', {
              smart_count: 1,
            })}
          >
            <order.icon />
          </Avatar>
        }
        className={classes.cardHeader}
        subheader={
          <>
            <Typography variant='body2'>{record.date}</Typography>
            <Typography color='textSecondary' variant='body2'>
              {translate('resources.commands.nb_items', {
                _: '1 item |||| %{smart_count} items',
                smart_count: record.basket.length,
              })}
              &nbsp;-&nbsp;
              <NumberField
                basePath={basePath}
                options={{
                  currency: 'USD',
                  style: 'currency',
                }}
                record={record}
                source='total'
              />
              &nbsp;-&nbsp;
              <TextField
                basePath={basePath}
                record={record}
                source='status'
              />
            </Typography>
          </>
        }
        title={`${translate('resources.commands.name', {
          smart_count: 1,
        })} #${record.reference}`}
      />
    </Card>
  ) : null;
};

interface ReviewProps {
    record?: ReviewRecord;
    basePath?: string;
}

const Review: FC<ReviewProps> = ({record, basePath}) => {
  const translate = useTranslate();
  const classes = useEventStyles();

  return record ? (
    <Card className={classes.card}>
      <CardHeader
        action={<EditButton basePath='/reviews' record={record} />}
        avatar={
          <Avatar
            aria-label={translate('resources.reviews.name', {
              smart_count: 1,
            })}
          >
            <review.icon />
          </Avatar>
        }
        className={classes.cardHeader}
        subheader={
          <>
            <Typography variant='body2'>{record.date}</Typography>
            <StarRatingField record={record} />
            <Typography className={classes.clamp} variant='inherit'>
              {record.comment}
            </Typography>
          </>
        }
        title={
          <span>
            {translate('resources.reviews.relative_to_poster')}{' '}
            <ProductReferenceField
              basePath={basePath}
              record={record}
              resource='reviews'
            />
          </span>
        }
      />
    </Card>
  ) : null;
};

interface EditButtonProps {
    record?: Record;
    basePath?: string;
}

const EditButton: FC<EditButtonProps> = ({record, basePath}) => {
  const translate = useTranslate();

  return (
    <Tooltip title={translate('ra.action.edit')}>
      <IconButton
        aria-label={translate('ra.action.edit')}
        component={Link}
        to={linkToRecord(basePath, record && record.id)}
      >
        <ContentCreate />
      </IconButton>
    </Tooltip>
  );
};

export default Aside;
