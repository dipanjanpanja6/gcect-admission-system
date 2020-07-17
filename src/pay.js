import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { Grid, Typography, Paper, List, TextField, ListItem, Divider, Button } from '@material-ui/core';
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
    },
    detail:{
        margin: 12, lineHeight: 3,
        [theme.breakpoints.down('xs')]:{
            margin:0
        }
    },
    c:{
        marginTop: 18,
        [theme.breakpoints.down('xs')]:{
            justifyContent:'left',
            paddingLeft:12
        }
    }
}));

export default function Home() {
    const sty = useStyles();
    const history = useHistory()
    const dnlApplication = () => {
        history.push('/dnlApplication')
    }
    const printApplication = () => {
        history.push('/dnlApplication')
    }
    const upApplication = () => {
        history.push('/upload')
    }
    const payApplication = () => {
        history.push('/pay')
    }


    return (<>
        <div className={sty.banner} />
        <Grid container justify='center' className={sty.root}>
            <Paper className={sty.paper}>
                <Typography variant='h5'>Application No : {12}</Typography>
                <Typography variant='caption' color='error'>Please, deposit application fee to the bank and then update your Payment Status for payment verification. After verification "Application Form Print" option will be activated.</Typography>
                <Divider />
                <Grid container justify='center' className={sty.c}>

                    <div className={sty.detail} >
                        <p>Registration No	:	<b>R200531100951</b></p>
                        <p>	Registration Date	:	<b>31-05-2020</b></p>
                        <p>Course	:	<b>B-Tech/M-Tech</b></p>
                        <p>Bank	:	<b>STATE BANK OF INDIA</b></p>
                        <p>Branch Name	:	<b>Beleghata</b></p>
                        <p>Branch Code		:	<b>001798</b></p>
                    </div>
                    <div className={sty.detail}>
                        <p>Applicant Name	:	<b>DIPANJAN  PANJA</b></p>
                        <p>Total Fees	:<b>15201.00</b></p>
                        <p>A/c No	:	<b>30089300316</b></p>
                        <p>Payment Date :<TextField type='date' /></p>
                        <p>Transaction ID :<TextField type='number' /></p>
                        {/* <p>Payment Date :<TextField type='date'/></p> */}
                        <Button color='primary' variant='contained'>submit</Button>
                    </div>
                </Grid>
            </Paper>
        </Grid>
    </>);
}
