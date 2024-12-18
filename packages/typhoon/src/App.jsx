import React, { useState, useEffect } from 'react';
import {
  Button,
  Frame,
  Window,
  WindowContent,
  WindowHeader, styleReset
} from 'react95';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import original from 'react95/dist/themes/original';
import ms_sans_serif from 'react95/dist/fonts/ms_sans_serif.woff2';
import ms_sans_serif_bold from 'react95/dist/fonts/ms_sans_serif_bold.woff2';
import Bar from './components/AppBar';
import List from './components/List';
import { GlobalProvider } from './context/GlobalContext';
import { list } from './libs/index.js';

const GlobalStyles = createGlobalStyle`
  ${styleReset}
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${ms_sans_serif}') format('woff2');
    font-weight: 400;
    font-style: normal
  }
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${ms_sans_serif_bold}') format('woff2');
    font-weight: bold;
    font-style: normal
  }
  body, input, select, textarea {
    font-family: 'ms_sans_serif';
  }
`;

const App = () => {
  return (
    <GlobalProvider>
      <div className='content'>
        <GlobalStyles />
        <ThemeProvider theme={original}>
          <Window style={{ width: '100%', height: '100%' }}>
            <WindowHeader style={{ height: 'auto', padding: '0' }}><Bar /></WindowHeader>
            {/* <Bar /> */}
            <WindowContent>
              <List />
            </WindowContent>
          </Window>
        </ThemeProvider>
      </div>
    </GlobalProvider>
  )
}

export default App;