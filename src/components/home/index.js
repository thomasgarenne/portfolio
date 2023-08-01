import React from 'react'

import styled from 'styled-components'

import Pres from './Pres'
import Project from './Project'

function Home() {
  return (
    <Wrapper>
      <Pres />
      <Project />
    </Wrapper>
  )
}

const Wrapper = styled.div`
`;



export default Home