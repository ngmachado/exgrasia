import { DEV_TEST_PRIVATE_KEY } from 'common-types';
import React from 'react';
import { hot } from 'react-hot-loader/root';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import Game from './Game';
import Splash from './Splash';

// const isProd = process.env.NODE_ENV === 'production';

function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Switch>
          <Route path='/' exact component={Splash} />
          <Route path='/game' exact component={Game} />
          <Route path='/game/:privKeyIdx' exact component={Game} />
        </Switch>
      </Router>
    </>
  );
}

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Inconsolata:wght@300,400&display=swap');

body {
  color: "#ffffff";
  width: 100vw;
  min-height: 100vh;
  background-color: "#ffffff";
  font-family: monospace;
  font-weight: 300;
  overflow: hidden;
}
`;

export default hot(App);
