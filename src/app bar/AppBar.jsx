import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import {Toolbar,Link, CircularProgress} from '@material-ui/core'; 
import Button from '@material-ui/core/Button'; 
import { Link as RouterLink, useHistory } from 'react-router-dom';
import PropType from 'prop-types'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  grow:{
    flexGrow:1
  },
  title: { 
    color: '#fff',
    fontSize: 'x-large', 

},
}));

function Appbar(props) {
  const classes = useStyles();
  const history=useHistory()

const login=()=>{
  history.push('/login')
}
console.log(props.auth);
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
         
          
          <Link to='/' underline='none' component={RouterLink} className={classes.title} variant="h6" noWrap>
          GCECT Admission Portal
          </Link>
          <div className={classes.grow} />
         {props.auth===true ? <Button onClick={props.out} color="inherit">Logout</Button>
        :props.auth===false ?<Button onClick={login} color="inherit">Login</Button>
        :props.auth===null?<CircularProgress/>:""}
         </Toolbar>
      </AppBar> 
    </div>
  );
}
Appbar.propType = { 
  auth: PropType.bool.isRequired,
}
export default Appbar;