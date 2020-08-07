import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import {Toolbar,Link, CircularProgress} from '@material-ui/core'; 
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu'; 
import { Link as RouterLink, useHistory } from 'react-router-dom';

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
         
          {/* <Typography variant="h6" className={classes.title}>
            GCECT Admission Portal
          </Typography> */}
          <Link to='/' underline='none' component={RouterLink} className={classes.title} variant="h6" noWrap>
          GCECT Admission Portal
          </Link>
          <div className={classes.grow} />
        {/* {window.location.pathname!=='/login' &&  <Button onClick={login} color="inherit">Login</Button>} */}
        {props.auth===true ? <Button onClick={props.out} color="inherit">Logout</Button>
        :props.auth===false ?<Button onClick={login} color="inherit">Login</Button>
        :props.auth===null?<CircularProgress/>:""}
        {/* {&& <Button onClick={login} color="inherit">Login</Button>} */}
        </Toolbar>
      </AppBar> 
    </div>
  );
}
export default Appbar;