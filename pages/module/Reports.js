import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    paper: {
        padding: theme.spacing(2),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
      },
    fixedHeight: {
        height: 240,
      },
  }));

export default function Reports(){
    const classes = useStyles();

    return(
        <div>
          <a style={{color:'white'}}>report Page</a>
        </div>
    )
}