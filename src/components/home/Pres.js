import React, {  useLayoutEffect, useRef } from 'react'

import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'

function Pres() {
  const wrapper = useRef();

  useLayoutEffect(() => {
      const ctx = gsap
      .timeline()
      .to(".un", { duration: 1.5, x: 200, opacity: 1 }, 1)
      .to(".deux", { duration: 1.5, x: 200, opacity: 1 }, "-=1")
      .to(".trois", { duration: 1, x: 200, opacity: 1 }, "-=1")
      .to(".profile", { duration: 1.5, scale: 1 }, "-=2");
    return () => ctx.revert();
  }, []);

  return (
    <Wrapper ref={wrapper}>
    <div>
      <Title className='un'>Hi ! Je suis Thomas</Title>
      <Desc className='deux'>Développeur Web Junior</Desc>
      <Link to={"/about"}><Btn className='trois'>Plus à propos de moi</Btn></Link>
    </div>
    <Profile src='./assets/images/profil.png' alt='profile' className='profile' />
  </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
  align-items: center;
  min-height: calc(100vh - 80px);
  @media screen and (max-width: 900px) {
    flex-direction: column-reverse;
  }
`;

const Profile = styled.img`
  width: 300px;
  border-radius: 50%;
  transform: scale(0);
`;

const Title = styled.h1`
  opacity: 0;
  margin-left: -200px;
  @media screen and (max-width: 900px) {
    margin-left: -340px;
  }
`;

const Desc = styled.h3`
  opacity: 0;
  margin-left: -200px;
  @media screen and (max-width: 900px) {
    margin-left: -340px;
  }
`;

const Btn = styled.button`
  opacity: 0;
  margin-left: -200px;
  @media screen and (max-width: 900px) {
    margin-left: -340px;
  }
  `;

export default Pres