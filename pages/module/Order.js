import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import ProductsList from '../../components/order/Sale-Order';
import ProductsChart from '../../components/order/Chart';
const useStyles = makeStyles((theme) => ({
    paper: {
        padding: theme.spacing(2),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
      },
    fixedHeight: {
        height: 680,
      },
  }));

export default function Order(){
    const classes = useStyles();
    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
    return(
        <div>
          <Grid container spacing={3}>
                {/* Product */}
                <Grid item xs={12}>
                    <Paper className={classes.paper}>
                        <ProductsList />
                    </Paper>
                </Grid>
                {/* Chart */}
                <Grid item xs={12}>
                  <Paper className={fixedHeightPaper}>
                      <ProductsChart />
                  </Paper>
                </Grid>
            </Grid>
        </div>
    )
}