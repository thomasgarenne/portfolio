import React from 'react'
import { Link } from 'react-router-dom'

import styled from 'styled-components'

function Img({ id, link, image, title, techno, description, pointFort, git }) {  
  return (
    <Wrapper className='wrapper'>
        <a href={link}>
          <Picture src={ image } alt='Site internet'/>
        </a>
        <h2>{ title }</h2>
        <div>
          <a href={ git }><button>Github</button></a>             
          <Link to={`/detail/${id}`} state={{ id, image, title, description, techno, pointFort }}><button>Plus d'infos</button></Link>          
        </div>
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
    transform: scale(1.1);
    backdrop-filter: blur(5px);
  }
}
`;

const Picture = styled.img`
width: 400px;

@media screen and (max-width: 900px) {
  width: 300px;
  margin: auto;
}
`;

export default Img