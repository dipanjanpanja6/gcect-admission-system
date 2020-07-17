import React from 'react';
import {BrowserRouter as Router , Route, Switch, } from 'react-router-dom'
import Form from './Form'
import Form2 from './Form4'
import Agreement from './agrement'
import Menu from './complete'
import AppBar from './app bar/AppBar'
import DD from './upload'
import Pay from './pay'

// import Test from './main'

function App() {
  return (
    <>
    <AppBar/>
    <Router>
      <Switch>
      {/* <Route exact path='/' component={Form2}/> */}
      <Route exact path='/' component={Agreement}/>
      <Route exact path='/form' component={Form}/>
      <Route exact path='/upload' component={DD}/>
      <Route exact path='/pay' component={Pay}/>

      <Route exact path='/dashboard' component={Menu}/>
      </Switch>
    </Router>
</>
    
  );
}

export default App;
