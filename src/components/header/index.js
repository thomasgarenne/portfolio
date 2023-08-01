import React from 'react'

import styled from 'styled-components'
import { Link, useLocation } from 'react-router-dom'

function Header() {
  const location = useLocation();

  return (
    <Wrapper>
        <h1>Portfolio</h1>
        <Nav>
            <Link to={"/"}><MenuEl $isCurrentPage={location.pathname === "/"}>Home</MenuEl></Link>
            <Link to={"/about"}><MenuEl $isCurrentPage={location.pathname === "/about"}>About</MenuEl></Link>
            <Link to={"/contact"}><MenuEl $isCurrentPage={location.pathname === "/contact"}>Contact</MenuEl></Link>
        </Nav>
    </Wrapper>
  )
}

const Wrapper = styled.div`
    height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid;
    padding: 0 25px;
    & a {
      text-decoration: none;
      color: inherit;
      padding: 0 10px;
    }
`;

const Nav = styled.div`
    display: flex;
`;

const MenuEl = styled.p`
    border-bottom: 2px solid ${props => props.$isCurrentPage ? '' : 'transparent'};
    &:hover {
      border-bottom: 2px solid;
    }
`;

export default Header