import * as React from 'react';
import {
  FC,
} from 'react';
import {
  Box, Card, Typography,
} from '@material-ui/core';
import {
  makeStyles,
  createStyles,
} from '@material-ui/core/styles';

interface TextWidgetProps {
  text: string;
}

const useStyles = makeStyles(theme => createStyles({
  root: {
    background:
            theme.palette.type === 'dark' ?
              '#535353' :
              // eslint-disable-next-line max-len
              'linear-gradient(to right, #8975fb 0%, #746be7 35%), linear-gradient(to bottom, #8975fb 0%, #6f4ceb 50%), #6f4ceb',

    color: '#fff',
    margin: theme.spacing(1),
    padding: 20,
  },
}));

const TextWidget: FC<TextWidgetProps> = ({text}) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <Box display='flex'>
        <Box flex='1'>
          <Typography component='h2' gutterBottom variant='h5'>
            {text}
          </Typography>
        </Box>
      </Box>
    </Card>
  );
};

export default TextWidget;
