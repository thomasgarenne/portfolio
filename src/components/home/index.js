import React from 'react'

import styled from 'styled-components'

import Pres from './Pres'
import Project from './Project'
import ScrollBarProgess from '../UI/ScrollBarProgess'

function Home() {
  return (
    <Wrapper>
      <ScrollBarProgess />
      <Pres />
      <Project />
    </Wrapper>
  )
}

const Wrapper = styled.div`
`;



export default Home