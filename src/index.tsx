import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './core/reportWebVitals';
import { unregister } from './core';
import { GlobalStyles, theme } from './styles';
import { ThemeProvider } from 'styled-components';

import { Content, Grid, Title, Card } from './components';

ReactDOM.render(
  <React.StrictMode>
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Content>
          <Title>Sudoku</Title>
          <Card>
            <Grid />
          </Card>
        </Content>
      </ThemeProvider>
    </>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
unregister();
