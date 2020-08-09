import React, { useEffect } from 'react';
import { Card, Grid, CardContent, TextField, Typography, CircularProgress, Fab } from '@material-ui/core';
import { useState } from 'react';

import { connect } from 'react-redux';
import PropType from 'prop-types'
import { login } from '../redux/actions/student'
import { useHistory } from 'react-router-dom';
import Background from '../component/background';
function Login(props) {
    const history = useHistory()
    const [state, setState] = useState({});
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (props.auth) {
            setLoading(false)
            // setLoading(false)
            if (props.auth === true) {

                history.push('/dashboard')
            } else if (props.auth) {
                // alert(props.auth.message)
                setState({})
                // toast.error(props.auth.message)
                // console.log(props.auth);
            }
        }
    }, [history, props])

    const handelChange = (e) => {
        setState({ ...state, [e.target.id]: e.target.value })
    }
    const submit = (e) => {
        e.preventDefault()
        // console.log(state);
        props.login(state)
        setLoading(true)
    }
    return (<>
        <Grid container justify='center' alignItems='center' style={{ minHeight: `calc(100vh - 64px)` }}>
            <Background />
            <Card  style={{ zIndex: 2 }}>
                <CardContent style={{ padding: '20px 10%', textAlign: 'center' }}>
                    <form onSubmit={submit} style={{ maxWidth: 300,display:'inline-grid' }}>
                        <TextField label='User ID'
                            id='id'
                            required
                            type='number'
                            value={state.id} 
                            onChange={handelChange}
                            fullWidth />
                        <TextField label='Password'
                            value={state.pass}
                            id='pass'
                            type='password'
                            required
                            onChange={handelChange}
                            fullWidth />
                        <Fab disabled={loading} type='submit' variant='extended' color='primary' style={{ margin: '20px 0' }}>
                        {loading ? <><p>Processing</p><CircularProgress /> </> : 'Login'}
                            </Fab>
                    <Typography variant='caption' color='error'>
                    use your registered <strong>mobile number (xxxxxxxxxx)</strong> &amp; <strong>Date of Birth (YYYY-MM-DD)</strong> <br />
                          as the <strong>User Id &amp; Password</strong><br/>
                    E.g., if your dob is 09 August 2020 then your password is 
2020-08-09
with hyphen.
                          </Typography>
                    </form>
                </CardContent> 
            </Card>
        </Grid>
    </>
    );
}
Login.prototype = {
    auth: PropType.object.isRequired,
    login: PropType.func.isRequired
}
const mapToProp = {
    login
}
const mapToState = (state) => ({
    auth: state.admin.login
})
export default connect(mapToState, mapToProp)(Login); 
