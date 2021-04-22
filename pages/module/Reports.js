import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import clsx from 'clsx';
import CardReport from '../../components/report/cardReport';
import ChartReport from '../../components/report/Chart';

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

    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

    return(
        <div>
          <Grid container spacing={3}>
            <Grid item xs={12}> 
              <Grid container spacing={3}>
                <Grid item xs={3}>
                  <Paper className={fixedHeightPaper}>
                      <CardReport title="Data Report 1" value="123" />
                  </Paper>
                </Grid>
                <Grid item xs={3}>
                  <Paper className={fixedHeightPaper}>
                      <CardReport title="Data Report 2" value="321" />
                  </Paper>
                </Grid>
                <Grid item xs={3}>
                  <Paper className={fixedHeightPaper}>
                      <CardReport title="Data Report 3" value="567" />
                  </Paper>
                </Grid>
                <Grid item xs={3}>
                  <Paper className={fixedHeightPaper}>
                      <CardReport title="Data Report 4" value="890" />
                  </Paper>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Grid container spacing={3}>
                <Grid item xs={6}>
                  <Paper className={fixedHeightPaper}>
                    <ChartReport title="Graph Report 1" />
                  </Paper>
                </Grid>
                <Grid item xs={6}>
                  <Paper className={fixedHeightPaper}>
                    <ChartReport title="Graph Report 2" />
                  </Paper>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <Paper className={fixedHeightPaper}>
                    <ChartReport title="Graph Report 3" />
                  </Paper>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Grid container spacing={3}>
                <Grid item xs={6}>
                  <Paper className={fixedHeightPaper}>
                    <ChartReport title="Graph Report 4" />
                  </Paper>
                </Grid>
                <Grid item xs={6}>
                  <Paper className={fixedHeightPaper}>
                    <ChartReport title="Graph Report 5" />
                  </Paper>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </div>
    )
}