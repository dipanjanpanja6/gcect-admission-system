import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { Grid, Typography, Paper, List, ListItemText, ListItem } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: ' 12px 50px',
    // lineHeight:1
    backgroundColor: '#eee',
    // minHeight: 'calc(100vh - )',
    [theme.breakpoints.down('sm')]: {
      // width: 'inherit',
      padding: 3
      // overflowX:'auto'
    }
  },
  paper: {
    padding: 15,
    marginBottom: 12,
    minWidth: '50%',
    [theme.breakpoints.down('xs')]: {
      width: 'inherit',
      padding: '12px 3px'
      // overflowX:'auto'
    }

  },
  banner: {
    backgroundImage: "url(" + require('./banner.jpg') + ")",
    width: '100%',
    height: '267px',
    backgroundPositionX: 'right',
    backgroundPositionY: 'bottom',

    background: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    [theme.breakpoints.down('xs')]: {
      height: '155px',
    }
  }
}));

export default function Home() {
  const sty = useStyles();
  const history = useHistory()
  const dnlApplication = () => {
    history.push('/dnlApplication')
  }


  return (<>
    <div className={sty.banner} />
    <Grid container justify='center' className={sty.root}>
      <Paper className={sty.paper}>
        <Typography variant='h5'>Application No : {12}</Typography>
        <Typography variant='subtitle1'>Application No : {12}</Typography>
        
      </Paper>
    </Grid>
  </>);
}
