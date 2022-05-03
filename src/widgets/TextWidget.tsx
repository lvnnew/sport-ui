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
