import React from 'react';
import Home from './pages/home/Home';

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
        <Home/>
      </ThemeProvider>
    </div>
  );
}

export default App;
