import React from 'react'

import styled from 'styled-components'

function Img({ link, image, title, techno, description }) {
  return (
    <Wrapper className='wrapper'>
        <a href={link}>
          <Picture src={ image } alt='Site internet'/>
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
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  padding: 20px 0;
  transition: ease-out 0.5s;
  &:hover {
    transform: scale(1.2);
    backdrop-filter: blur(5px);
  }
}
`;

const List = styled.ul`
  display: flex;
  padding-bottom: 10px;
`;

const ListItem = styled.li`
  padding-right: 5px;
`;

const Picture = styled.img`
@media screen and (max-width: 900px) {
  width: 300px;
  margin: auto;
}
`;

export default Img