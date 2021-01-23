import * as React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import {
  makeStyles,
} from '@material-ui/core/styles';
import {
  Link,
} from 'react-router-dom';
import {
  linkToRecord,
  ReferenceField,
  FunctionField,
  TextField,
  useListContext,
  Record,
} from 'react-admin';

import AvatarField from '../visitors/AvatarField';
import {
  Review, Customer,
} from '../../types';

const useStyles = makeStyles({
  inline: {
    display: 'inline',
  },
  link: {
    color: 'inherit',
    textDecoration: 'none',
  },
  root: {
    width: '100vw',
  },
});

const ReviewListMobile = () => {
  const classes = useStyles();
  const {basePath, data, ids, loaded, total} = useListContext<Review>();

  return loaded || Number(total) > 0 ? (
    <List className={classes.root}>
      {(ids as Exclude<typeof ids, undefined>).map(id => {
        const item = (data as Exclude<typeof data, undefined>)[id];
        if (!item) {
          return null;
        }

        return (
          <Link
            className={classes.link}
            key={id}
            to={linkToRecord(basePath, id)}
          >
            <ListItem button>
              <ListItemAvatar>
                <ReferenceField
                  basePath={basePath}
                  link={false}
                  record={item}
                  reference='customers'
                  source='customer_id'
                >
                  <AvatarField size='40' />
                </ReferenceField>
              </ListItemAvatar>
              <ListItemText
                primary={
                  <>
                    <ReferenceField
                      basePath={basePath}
                      link={false}
                      record={item}
                      reference='customers'
                      source='customer_id'
                    >
                      <FunctionField
                        className={classes.inline}
                        render={(record?: Record) =>
                          (record ?
                            `${
                              (record as Customer)
                                .first_name
                            } ${
                              (record as Customer)
                                .last_name
                            }` :
                            '')}
                        variant='subtitle1'
                      />
                    </ReferenceField>{' '}
                    on{' '}
                    <ReferenceField
                      basePath={basePath}
                      link={false}
                      record={item}
                      reference='products'
                      source='product_id'
                    >
                      <TextField
                        className={classes.inline}
                        source='reference'
                        variant='subtitle1'
                      />
                    </ReferenceField>
                  </>
                }
                secondary={item.comment}
                secondaryTypographyProps={{noWrap: true}}
              />
            </ListItem>
          </Link>
        );
      })}
    </List>
  ) : null;
};

ReviewListMobile.defaultProps = {
  hasBulkActions: false,
  selectedIds: [],
};

export default ReviewListMobile;
