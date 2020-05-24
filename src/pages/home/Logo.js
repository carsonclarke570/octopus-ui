import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';

import Logopng from './../../img/octopus_logo.png';

const useStyles = makeStyles({
  root: {
    pointerEvents: 'none',
    backgroundColor: 'transparent',
    boxShadow: 'none',
    maxWidth: 345,
  },
});

export default function Logo() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Octopus!"
          image={Logopng}
          title="Octupus!"
        />
      </CardActionArea>
    </Card>
  );
}