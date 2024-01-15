import React from 'react'

import styled from 'styled-components'

function Footer({ isLight, handleToggleTheme }) {
  return (
    <Wrapper>
        <button onClick={handleToggleTheme}>
          {isLight ? 'Switch to dark theme' : 'Switch to light theme'}
        </button>
        <span>© 2024 Dieszirae. Tous droits réservés.</span>
    </Wrapper>
  )
}

const Wrapper = styled.div`
    height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-top: 1px solid;
    padding: 0 25px;
    margin-top: 10px;
    & a {
      text-decoration: none;
      color: inherit;
      padding: 0 10px;
    }
`;

export default Footer