import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { Grid, Typography, Paper, List, TextField, ListItem, Divider, Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import transitions from '@material-ui/core/styles/transitions';
import { url } from './config/config';
import { toast } from 'react-toastify';

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
    detail: {
        margin: 12, lineHeight: 3,
        [theme.breakpoints.down('xs')]: {
            margin: 0
        }
    },
    c: {
        marginTop: 18,
        [theme.breakpoints.down('xs')]: {
            justifyContent: 'left',
            paddingLeft: 12
        }
    }
}));

export default function Pay(props) {
    const sty = useStyles();
    const [state, setState] = useState({})
    const handleChange = (e) => {
        setState({ ...state, [e.target.name]: e.target.value })
    }
    const submit = (e) => {
        e.preventDefault()
        fetch(`${url}/api/student/${props.id}/transactionId`, {
            method: 'POST',
            credentials: 'include',
            headers: { 'Content-type': 'Application/json' },
            body: JSON.stringify(state)
        }).then(res => {
            res.json().then(resp => {
                console.log(resp);
                if (resp.success === true) {
                    toast.success('Success')
                }
                if (resp.error === true) {
                    toast.error(resp.message)
                }
            })
        }
        ).catch(r => console.log(r))
    }

    return (<>
        <div className={sty.banner} />
        <Grid container justify='center' className={sty.root}>
            <Paper className={sty.paper}>
                <Typography variant='h5'>Application No : {props.id}</Typography>
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
                    <form onSubmit={submit}>
                        <div className={sty.detail}>
                            <p>Applicant Name	:	<b>DIPANJAN  PANJA</b></p>
                            <p>Total Fees	:<b>15201.00</b></p>
                            <p>A/c No	:	<b>30089300316</b></p>
                            <p>Payment Date :<TextField required type='date' name='transactionDate' onChange={handleChange} /></p>
                            <p>Transaction ID :<TextField required type='number' name='transactionId' onChange={handleChange} /></p>
                            <Button color='primary' type='submit' variant='contained'>submit</Button>
                        </div>
                    </form>
                </Grid>
            </Paper>
        </Grid>
    </>);
}
