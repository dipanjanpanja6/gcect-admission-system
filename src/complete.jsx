import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { Grid, Typography, Paper, List, ListItemText, ListItem, Divider } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { url } from './config/config';
import PropType from 'prop-type';
import { toast } from 'react-toastify';
const FileDownload = require("js-file-download");
const useStyles = makeStyles((theme) => ({
  rootMain:{
    minHeight:'calc(100vh - 64px)',
    backgroundColor: '#eee',
    [theme.breakpoints.down('xs')]:{

    }
  },
  root: {
    padding: ' 12px 50px', 
    [theme.breakpoints.down('sm')]: { 
      padding: 3 
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
Home.propType={
  // id:PropType.toString.isRequ
}

export default function Home(props) {
  const sty = useStyles();
  const history = useHistory()
  const dnlApplication = () => {
    // window.location=`${url}/api/student/${props.id}/challan` 
    fetch(`${url}/api/student/${props.id}/application`,{
      method: 'GET',
      credentials: 'include',
      headers:{
        'Content-Type':'Application/pdf'
      }
  }).then(response => response.blob()).then(response =>
    FileDownload(response,`Application${props.id}.pdf`) 
    ).catch(err=>{
      toast.error(err.message)
    })
  }
  const printApplication = () => { 
    fetch(`${url}/api/student/${props.id}/challan`,{
      method: 'GET',
      credentials: 'include',
      headers:{
        'Content-Type':'Application/pdf'
      }
  }).then(response => response.blob()).then(response =>
    FileDownload(response,`Challan${props.id}.pdf`) 
    ).catch(err=>{
      toast.error(err.message)
    })
  }
  const upApplication = () => {
    history.push('/upload')
  }
  const payApplication = () => {
    history.push('/pay')
  }


  return (<div className={sty.rootMain}>
    <div className={sty.banner} />
    <Grid container justify='center' className={sty.root}>
      <Paper className={sty.paper}>
        <Typography variant='h5'>Application No : {props.id}</Typography>
        <Typography variant='caption' color='error'>Please, deposit application fee to the bank and then update your Payment Status for payment verification.<br/> After verification "Application Form Print" option will be activated.</Typography>
        <Divider/>
        <List>
          <ListItem onClick={printApplication} button>
            <ListItemText primary='Print Application Challan' />
          </ListItem>
          <ListItem onClick={upApplication} disabled button>
            <ListItemText primary='Upload Documents' />
          </ListItem>
          <ListItem onClick={payApplication} button>
            <ListItemText primary='Update Payment status' />
          </ListItem>
          <ListItem onClick={dnlApplication} button>
            <ListItemText primary='Print Application Application' />
          </ListItem>
        </List>
      </Paper>
    </Grid>
  </div>);
}
