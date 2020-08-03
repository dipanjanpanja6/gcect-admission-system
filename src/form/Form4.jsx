import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TextField, Paper, Grid, MenuItem, Typography, Divider, Fab, InputAdornment, InputBase, Checkbox } from '@material-ui/core';
import { Form, Field, useFormikContext, Formik } from 'formik';
import * as Yup from 'yup';
import { useHistory } from 'react-router-dom';



const useStyles = makeStyles((theme) => ({
    root: {
        padding: 50,
        // lineHeight:1
        backgroundColor: '#eee',
        [theme.breakpoints.down('sm')]: {
            // width: 'inherit',
            padding: 3
            // overflowX:'auto'
        }
    },
    paper: {
        padding: 15,
        marginBottom: 12,
        [theme.breakpoints.down('sm')]: {
            width: 'inherit',
            padding: 0
            // overflowX:'auto'
        }

    },
    textField: {
        marginBottom: theme.spacing(5),
        margin: theme.spacing(1),
        width: '30ch',
    },

}));



function Form4() {
    const sty = useStyles();
    const history = useHistory()
    const [state, setState] = React.useState({ sigData: '', picData: '' })
    const upload = () => {
        console.log(state);
        if (state.sigData !== '' && state.picData !== '') {
            // history.push('/dashboard')
        } else {
            alert('please select both image first !!!')
        }

    }
    const handleChange = (e) => {
        if (e.target.files && e.target.files[0]) {
            let file = e.target.files[0];
            if (file.size / 1000 > 100) { return alert('size must not exceed 100kb') } else {
                let reader = new FileReader();
                if (e.target.name === 'picture') {
                    reader.onloadend = () => {
                        setState({
                            ...state,
                            picData: file,
                            pic: reader.result,
                        })
                    }
                }
                if (e.target.name === 'signature') {
                    reader.onloadend = () => {
                        setState({
                            ...state,
                            sigData: file,
                            sig: reader.result,
                        });
                    };
                }
                reader.readAsDataURL(e.target.files[0]);
            }
        }
    }

    return (
        // <Paper className={sty.paper}>
        <>
            <Typography variant='h5'>Upload Photo & Signature</Typography><br />
            <div style={{ display: 'flex', flexDirection: 'column', paddingLeft: 16 }}>
                <img src={state.pic} alt=" " style={{
                    width: '99px',
                    height: '105px',
                    border: 'solid 1px', 
                }} />
                <Typography variant='subtitle1'>Upload Photo</Typography>
                <TextField name='picture' inputProps={{ accept: "image/*" }} onChange={handleChange} className={sty.textField} helperText='size must not exceed 100kb' type='file' />
                <img src={state.sig} alt="signature" style={{
                    width: '150px',
                    height: '67px',
                    border: 'solid 1px',
                }} />
                <Typography variant='subtitle1'>Upload Signature</Typography>
                <TextField name='signature' inputProps={{ accept: "image/*" }} className={sty.textField} type='file' onChange={handleChange} helperText='size must not exceed 100kb' />
            </div>
            <Fab style={{ margin: '20px 0' }} color="primary" variant='extended' onClick={upload} >submit & Download Challan</Fab>
            {/* // </Paper> */}
        </>

    )
}
export default Form4