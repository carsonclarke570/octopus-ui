import React from 'react';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';

import Logo from './Logo';
import Button from '@material-ui/core/Button';

class Home extends React.Component {

  render(){
    return(
      <div>
        <Grid
          item
          container
          direction="column"
          justify="center"
          alignItems="center"
          style={{ minHeight: '100vh' }}
        >

          <Logo />

          <Button variant="contained" color="primary" size="large">
            Host
          </Button>

          <Button variant="contained" color="primary" size="large">
            Join
          </Button>

        </Grid>
      </div>
    );
  }
};

export default Home;
