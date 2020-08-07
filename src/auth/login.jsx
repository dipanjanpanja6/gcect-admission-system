import React, { useEffect } from 'react';
import { Card, Grid, CardContent, TextField, Button } from '@material-ui/core';
import { useState } from 'react';

import { connect } from 'react-redux';
import PropType from 'prop-types'
import { login } from '../redux/actions/student'
import { useHistory } from 'react-router-dom';

function Login(props) {
    const history = useHistory()
    const [state, setState] = useState({});

    useEffect(() => {
        if (props.auth) {
            // setLoading(false)
            if (props.auth=== true) {
                history.push('/dashboard')
            } else if (props.auth) {
                // alert(props.auth.message)
                setState({})
                // toast.error(props.auth.message)
                console.log(props.auth);

            }
        }
    }, [history, props])

    const handelChange = (e) => {
        setState({ ...state, [e.target.id]: e.target.value })
    }
    const submit = (e) => {
        e.preventDefault()
        console.log(state);
        props.login(state)
        // setLoading(true)
    }
    return (
        <Grid container justify='center' alignItems='center' style={{ height: 600 }}>
            <Card>
                <CardContent style={{ padding: '20px 10%', textAlign: 'center' }}>
                    <form onSubmit={submit} style={{ maxWidth: 300, }}>
                        <TextField label='User ID'
                            id='id'
                            onChange={handelChange}
                            fullWidth />
                        <TextField label='Password'
                            id='pass'
                            onChange={handelChange}
                            fullWidth />
                        <Button type='submit' variant='contained' color='primary' style={{ margin: '20px 0' }}>Login</Button>
                    </form>
                </CardContent>
            </Card>
        </Grid>

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
