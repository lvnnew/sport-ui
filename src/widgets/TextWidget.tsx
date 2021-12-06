import * as React from 'react';
import {
  FC,
} from 'react';
import {
  Box,
  Card,
  Typography,
} from '@mui/material';
import {makeStyles, createStyles} from '@mui/styles';

interface TextWidgetProps {
  text: string;
}

const useStyles = makeStyles(() => createStyles({
  root: {
    // background:
    //         (theme as any).palette.mode === 'dark' ?
    //           '#535353' :
    //           // eslint-disable-next-line max-len
    //           'linear-gradient(to right, #8975fb 0%, #746be7 35%), linear-gradient(to bottom, #8975fb 0%, #6f4ceb 50%), #6f4ceb',

    color: '#fff',
    padding: 20,
  },
}));

const TextWidget: FC<TextWidgetProps> = ({text}) => {
  const classes = useStyles();

  return (
    <Card className={classes.root} style={{margin: 8}}>
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
