import React from 'react';
import Typing from 'react-typing-animation';
import { Grid, Typography, Paper } from '@material-ui/core';

export default function Error() {
    return (<Paper elevation={0}>
        <Grid style={{ minHeight: 'calc(100vh - 64px)',flexDirection:'column' }} container justify='center' alignItems='center' >
            <Typography variant='h1'>
                <Typing startDelay={12} speed={60}>
                    Error 404 !
                 </Typing>
            </Typography>
            <Typography variant='subtitle1' color="textSecondary">
                <Typing startDelay={2000} speed={100} loop>
                    Page not Found...
              <Typing.Backspace count={18} />
              </Typing>
            </Typography>
        </Grid>
        </Paper>
    )
}