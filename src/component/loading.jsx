import React from 'react'
import {Grid, makeStyles} from '@material-ui/core'
import CircularProgress from '@material-ui/core/CircularProgress';
const styles=makeStyles(theme=>({
root:{
    height:'calc(100vh - 64px)',
    background:theme.palette.background.default
}
}))

const Loading = () => {
    const sty=styles()
     return (
        <Grid className={sty.root} container justify='center' alignItems='center' > <CircularProgress /></Grid>
    )
}
export default Loading