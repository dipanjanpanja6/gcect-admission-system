import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect, } from 'react-router-dom'

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Form from './form/Form'
import Form2 from './form/Form4'
import Agreement from './agrement'
import Dashboard from './complete'
import AppBar from './app bar/AppBar'
import DD from './upload'
import Pay from './pay'
import Login from './auth/login'
import Loading from './component/loading'

// import Test from './main'

import { connect } from 'react-redux';
import { checkUser, logout } from './redux/actions/student'
import PropType from 'prop-types'
import { Typography, Link, Divider, Tooltip } from '@material-ui/core';

function App(props) {
  useEffect(() => {
    props.checkUser()
    console.log("tiger");
  }, [])

  const out = () => {
    console.log("auth");
    props.logout();
  }
  console.log(props.auth)
  console.log(props.user)
  return (
    <>
      <Router>
        <AppBar auth={props.auth} out={out} />
        <Switch>
          {/* <Route exact path='/' component={Form2}/> */}
          <Route exact path='/' component={Agreement} />
          <Route exact path='/login' render={() => (props.auth === null ? <Loading /> : props.auth === false ? <Login /> : <Redirect to='/dashboard' />)} />
          <Route exact path='/form' render={() => (props.auth === null ? <Loading /> : <Form auth={props.auth} />)} />
          <Route exact path='/upload' render={() => (props.auth === null ? <Loading /> : props.auth === true ? <DD id={props.user ? props.user.applicantId : ''} /> : <Redirect to='/login' />)} />
          <Route exact path='/pay' render={() => (props.auth === null ? <Loading /> : props.auth === true ? <Pay id={props.user ? props.user.applicantId : ''} /> : <Redirect to='/login' />)} />

          {/* <Route exact path='/dashboard' component={Menu}/> */}
          <Route exact path="/dashboard" render={() => (props.auth === null ? <Loading /> : props.auth === true ? <Dashboard id={props.user ? props.user.applicantId : ''} /> : <Redirect to='/login' />)} />

        </Switch>
      </Router>

      <ToastContainer />
      <div style={{
        position: "fixed",
        bottom: 0,
        left: 2
      }}>
        <Divider />
        <Typography variant="body2" color="textSecondary" style={{
          fontSize: 'small',
          fontFamily: 'monospace'
        }}>
          {'  Made with 😊 by '}
  <Tooltip arrow title="Hello, I'm Dipanjan Panja from 2017-21,CSE Batch">
          <Link color='textPrimary' href="https://facebook.com/dipanjanpanja6">
            Dipanjan Panja
  </Link></Tooltip>{' & '}
  <Tooltip arrow title="Hello, I'm Aditya from 2017-21,CSE Batch">
  <Link color='textPrimary' href="https://github.com/Adityashaw">
            Aditya Shaw. 

  </Link></Tooltip>
          {' © '}
          {new Date().getFullYear()}{' '}
          <Link color='textPrimary' href="https://gcect.ac.in">
            GCECT

  </Link>
          {'. All rights reserved.'}
        </Typography>
      </div>
    </>

  );
}

App.prototype = {
  auth: PropType.object.isRequired,
  checkUser: PropType.func.isRequired,
  logout: PropType.func.isRequired,
}
const mapToProp = {
  logout, checkUser
}
const mapToState = (state) => ({
  auth: state.admin.auth,
  user: state.admin.user,
})
export default connect(mapToState, mapToProp)(App);