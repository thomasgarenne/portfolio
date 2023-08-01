import React from 'react'

import styled from 'styled-components'
import { Link } from 'react-router-dom'

function Pres() {
  return (
    <Wrapper>
    <div>
      <h1>Hi ! Je suis Thomas</h1>
      <h3>Etudiant développeur web full stack</h3>
      <Link to={"/about"}><button>Plus à propos de moi</button></Link>
    </div>
    <Profile src='./assets/images/profil.png' alt='profile' />
  </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const Profile = styled.img`
  width: 300px;
  border-radius: 50%;
`;

export default Pres