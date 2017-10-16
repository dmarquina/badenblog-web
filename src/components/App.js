import React, { Component } from 'react';
import Header from './Global/Header';
import Content from './Global/Content';

import {purple300,greenA700,white,darkBlack} from 'material-ui/styles/colors';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: purple300,
    accent1Color: greenA700,
  },
  appBar: {
    color: white,
    textColor: darkBlack
  }
});


class App extends Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div>
          <Header />
          <Content />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
