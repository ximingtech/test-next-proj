import React from 'react';
import clsx from 'clsx';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Chart from '../../components/customer/Chart';
import RegisterCus from '../../components/customer/RegisterCus';
import CustomerList from '../../components/customer/CustomerList';
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

export default function Customers(){
    const classes = useStyles();
    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
    return(
        <div>
            <Grid container spacing={3}>
                {/* Chart */}
                <Grid item xs={12} md={4} lg={3}>
                    <Paper className={fixedHeightPaper}>
                        <RegisterCus />
                    </Paper>
                </Grid>
                {/* Recent Deposits */}
                <Grid item xs={12} md={8} lg={9}>
                    <Paper className={fixedHeightPaper}>
                        <Chart />
                    </Paper>
                </Grid>
                {/* Recent Orders */}
                <Grid item xs={12}>
                    <Paper className={classes.paper}>
                        <CustomerList />
                    </Paper>
                </Grid>
            </Grid>
        </div>
    )
}