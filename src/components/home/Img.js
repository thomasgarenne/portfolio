import React from 'react'

import styled from 'styled-components'

function Img({ link, image, title, techno, description }) {
  return (
    <Wrapper>
        <a href={link}>
          <img src={ image } alt='Site internet'/>
        </a>
        <h2>{ title }</h2>
        <List>
        {techno.map(t => {
            return <ListItem>{t}</ListItem>
          })}
        </List>
        <p>{ description }</p>
    </Wrapper>
  )
}

const Wrapper = styled.div`
margin: auto;
padding: 5px;
transition: ease-out 0.5s;
&:hover {
  transform: scale(1.2);
  backdrop-filter: blur(5px);
}
`;

const List = styled.ul`
  display: flex;
`;

const ListItem = styled.li`
  padding-right: 5px;
`;

export default Img