import React,{useEffect} from 'react';
import {BrowserRouter as Router , Route, Switch, Redirect, } from 'react-router-dom'
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

function App(props) {
	useEffect(() => {
		props.checkUser()
		console.log("tiger"); 
  }, [])
  
  const out = () => {
		console.log("auth");
		props.logout();
  }
 console.log( props.auth)
  return (
    <>
    <Router>
    <AppBar auth={props.auth===null?false:props.auth.success} out={out}/>
      <Switch>
      {/* <Route exact path='/' component={Form2}/> */}
      <Route exact path='/' component={Agreement}/>
      <Route exact path='/login' render={() =>(props.auth===null ?<Loading/>:props.auth.success===false?<Login/>: <Redirect to='/dashboard'/>)}/>
      <Route exact path='/form'  render={() =>(props.auth===null ?<Loading/>:<Form auth={props.auth.success}/>)} />
      <Route exact path='/upload' render={() =>(props.auth===null ?<Loading/>:props.auth.success==true?<DD/>: <Redirect to='/login' />)} />
      <Route exact path='/pay' render={() =>(props.auth===null ?<Loading/>:props.auth.success==true?<Pay/>: <Redirect to='/login' />)} />

      {/* <Route exact path='/dashboard' component={Menu}/> */}
      <Route exact path="/dashboard"  render={() =>(props.auth===null ?<Loading/>:props.auth.success===true?<Dashboard id={props.auth.applicantId} />: <Redirect to='/login' />)} />

      </Switch>
    </Router>
    <div>
      
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
})
export default connect(mapToState, mapToProp)(App);