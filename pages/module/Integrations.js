import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { DatePickers } from '../../components/DatePicker'

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

export default function Integrations(){
    const classes = useStyles();

    return(
        <div>
          {/* <DatePickers /> */}
          <a style={{color:'white'}}>integration Page</a>
        </div>
    )
}