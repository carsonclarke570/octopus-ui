import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

import Logo from './Logo';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  button: {
    maxWidth: '100px',
    maxHeight: '45px',
    minWidth: '100px',
    minHeight: '45px',
  }
}));

export default function Home() {

  const classes = useStyles();

  return(
    <div>
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
        style={{ minHeight: '100vh' }}
        className={classes.root}
      >
        <Grid item>
          <Logo />
        </Grid>
        <Grid item>
          <Paper elevation={3} />
        </Grid>
        <Grid item>
          <Button variant="contained" color="primary" className={classes.button}>
            Host
          </Button>
        </Grid>
        <Grid item>
          <Button variant="contained" color="primary" className={classes.button}>
            Join
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

