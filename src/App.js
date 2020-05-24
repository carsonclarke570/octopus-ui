import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import { Switch, Route } from "react-router-dom";

import Home from './pages/home/Home';
import Party from './pages/party/Party';

import CssBaseline from '@material-ui/core/CssBaseline';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#f53868",
    },
    secondary: {
      main: "#00FFFF",
    },
  },
});

function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/party/:partyId" component={Party} exact />
          </Switch>
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
