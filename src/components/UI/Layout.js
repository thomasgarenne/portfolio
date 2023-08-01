import React from 'react'

import styled, { ThemeProvider } from 'styled-components'
import { useState } from 'react';

import light from './themes/light.json'
import dark from './themes/dark.json'

import Header from '../header';
import Footer from '../footer';
import GlobalStyle from './GlobalStyle';

function Layout({ children }) {
    const [isLight, setIsLight] = useState(true);

    function handleToggleTheme() {
        setIsLight(!isLight);
    }

  return (
    <ThemeProvider theme={isLight ? light : dark}>
        <Wrapper>
            <GlobalStyle />
            <Header />
            <Main>
                { children }
            </Main>
            <Footer  isLight={isLight} handleToggleTheme={handleToggleTheme}/>
        </Wrapper>
    </ThemeProvider>
  )
}

const Wrapper = styled.div``;

const Main = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: calc(100vh - 180px);
    width: 90%;
    margin: auto;
`;

export default Layout