import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography, Paper, TextField, Divider, Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import PropType from 'prop-types'

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
  inputx:{
      margin:'35px 0 2px'
  },
  input:{
      margin:'5px 12px 12px 0'
  }
}));
Upload.propType = { 
  id: PropType.string.isRequired,
}
export default function Upload() {
  const sty = useStyles();
  const history = useHistory()
  const [state,setState]=React.useState({})
  const handleChange=(e)=>{
      setState({[e.target.name]:e.target.file[0]})
  }
  const x=()=>{
    //   state.x
  }
  const xi=()=>{
    //   state.x
  }
  const jee=()=>{
    //   state.x
  }
  const id=()=>{
    //   state.x
  }
  const income=()=>{
    //   state.x
  }
  const rc=()=>{
    //   state.x
  }
  const caste=()=>{
    //   state.x
  }
  const pwd=()=>{
    //   state.x
  }


  return (<>
    <div className={sty.banner} />
    <Grid container justify='center' className={sty.root}>
      <Paper className={sty.paper}>
        <Typography variant='h5'>Application No : {12}</Typography>
        <Typography variant='caption' color='error'>	Max Size for Both file should be maximum 500 KB	
 	<br/>JPG, JPEG, PDF files are allowed only</Typography>
        <Divider />

        <Typography variant='subtitle1' color='primary' className={sty.inputx}>JEE Rank Card</Typography>
        <TextField type='file' name='jee' onChange={handleChange} className={sty.input}  />
        <Button variant='contained' color='primary' onClick={jee} >Upload</Button>
        
        <Typography variant='subtitle1' color='primary' className={sty.inputx}>10th Result</Typography>
        <TextField type='file'  name='x' className={sty.input}  onChange={handleChange}/>
        <Button variant='contained' color='primary' onClick={x}>Upload</Button>
        
        <Typography variant='subtitle1' color='primary' className={sty.inputx}>12th Result</Typography>
        <TextField type='file'  name='xii' className={sty.input}  onChange={handleChange} />
        <Button variant='contained' color='primary' onClick={xi}>Upload</Button>
        
        <Typography variant='subtitle1' color='primary' className={sty.inputx}>Provisional Allotment Letter From RC</Typography>
        <TextField type='file'  name='rc' onChange={handleChange} className={sty.input} />
        <Button variant='contained' color='primary' onClick={rc}>Upload</Button>
         
        <Typography variant='subtitle1' color='primary' className={sty.inputx}>Identity Proof</Typography>
        <TextField type='file'  name='id' className={sty.input}  onChange={handleChange} />
        <Button variant='contained' color='primary' onClick={id}>Upload</Button>

        <Typography variant='subtitle1' className={sty.inputx}>Cast Certificate (if applicable)</Typography>
        <TextField type='file'  name='cast' className={sty.input}  />
        <Button variant='contained' color='primary' onClick={caste}>Upload</Button>
        
        <Typography variant='subtitle1' className={sty.inputx}>Disability Certificate (if applicable)</Typography>
        <TextField type='file'  name='pwd' className={sty.input}  />
        <Button variant='contained' color='primary' onClick={pwd}>Upload</Button>
        
        <Typography variant='subtitle1' className={sty.inputx}>Income Proof (if applicable)</Typography>
        <TextField type='file'  name='income' className={sty.input}  />
        <Button variant='contained' color='primary' onClick={income}>Upload</Button>
       
      </Paper>
    </Grid>
  </>);
}
