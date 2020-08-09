import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { Grid, Typography, Paper, List, ListItemText, ListItem, Divider, ListItemSecondaryAction, CircularProgress } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { url } from './config/config';
import PropType from 'prop-types';
import { toast } from 'react-toastify';
import { useState } from 'react';
const FileDownload = require("js-file-download");

const useStyles = makeStyles((theme) => ({
  rootMain: {
    minHeight: 'calc(100vh - 64px)',
    backgroundColor: theme.palette.background.default,
    [theme.breakpoints.down('xs')]: {

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
    backgroundImage: "url(" + require('./component/static/banner.webp') + ")",
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


Dashboard.propType = {
  id: PropType.string.isRequired
}
export default function Dashboard(props) {
  const sty = useStyles();
  const history = useHistory()
  const [loadingA, setLoadingA] = useState(false)
  const [loadingC, setLoadingC] = useState(false)
  const dnlApplication = () => {
    setLoadingA(true)
    fetch(`${url}/api/student/${props.id}/application`, {
      method: 'GET',
      credentials: 'include',
      headers: {
        'Content-Type': 'Application/pdf'
      }
    }).then(response => {
      console.log(response);
      setLoadingA(false)
      if (response.status !== 200) {
        toast.error(response.statusText)
        return
      } else {
        response.blob().then(response => {
          FileDownload(response, `Application${props.id}.pdf`)
        })
      }
    }).catch(err => {
      setLoadingA(false)
      toast.error(err.message)
    })
  }
  const dwnldChallan = () => {
    setLoadingC(true)
    fetch(`${url}/api/student/${props.id}/challan`, {
      method: 'GET',
      credentials: 'include',
      headers: {
        'Content-Type': 'Application/pdf'
      }
    }).then(res => {
      setLoadingC(false)
      if (res.status !== 200) {
        toast.error(res.statusText)
        return
      } else {
        res.blob().then(response => {
          FileDownload(response, `Application${props.id}.pdf`)
        })
      }
    }).catch(err => {
      setLoadingC(false)
      console.error(err)
    });


    // .then(response => { console.log(response); response.blob() }).then(response => {
    //   setLoadingA(false)
    //   console.log(response)
    //   FileDownload(response, `Challan${props.id}.pdf`)
    // }
    // ).catch(err => {
    //   setLoadingA(false)
    //   toast.error(err.message)
    // })
  }
  // const printApplication = () => {
  //   setLoadingA(true)
  //   fetch(`${url}/api/student/${props.id}/challan`, {
  //     method: 'GET',
  //     credentials: 'include',
  //     headers: {
  //       'Content-Type': 'Application/pdf'
  //     }
  //   }).then(res => {
  //     setLoadingC(false)
  //     if (res.status !== 200) {
  //       toast.error(res.statusText)
  //       return
  //     } else {
  //       res.blob()
  //         .then(blob => {
  //           const href = window.URL.createObjectURL(blob);
  //           window.location = href
  //         })
  //     }
  //   }).catch(err => console.error(err));


  //   // .then(response => { console.log(response); response.blob() }).then(response => {
  //   //   setLoadingA(false)
  //   //   console.log(response)
  //   //   FileDownload(response, `Challan${props.id}.pdf`)
  //   // }
  //   // ).catch(err => {
  //   //   setLoadingA(false)
  //   //   toast.error(err.message)
  //   // })
  // }
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
        <Typography variant='caption' color='error'>Please, deposit application fee to the bank and then update your Payment Status for payment verification.<br /> After verification "Application Form Print" option will be activated.</Typography>
        <Divider />
        <List>
          <ListItem disabled={loadingC} onClick={dwnldChallan} button>
            <ListItemText primary='Print Challan' />
            <ListItemSecondaryAction>
              {loadingC && <CircularProgress />}
            </ListItemSecondaryAction>
          </ListItem>
          <ListItem onClick={upApplication} disabled button>
            <ListItemText primary='Upload Documents' />
          </ListItem>
          <ListItem onClick={payApplication} button>
            <ListItemText primary='Update Payment status' />
          </ListItem>
          <ListItem disabled={loadingA} onClick={dnlApplication} button>
            <ListItemText primary='Print Application' />
            <ListItemSecondaryAction>
              {loadingA && <CircularProgress />}
            </ListItemSecondaryAction>
          </ListItem>
        </List>
      </Paper>
    </Grid>
  </div>
  );
}
