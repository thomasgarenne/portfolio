import React from 'react'

import styled from 'styled-components'

import Img from './Img';

function Project() {
  return (
    <>
        <h2>Mes projets</h2>
        <Grid>
        <Img 
            link="https://rad-chaja-3eee9a.netlify.app/index.html#aventure"
            image='./assets/images/theridersworkshop.png'
            title='The riders Workshop' 
            techno={['HTML', 'CSS', 'BOOTSTRAP']}
            description='Site vitrine pour une associations de sport, réalisé en HTML/CSS'
        />
        <Img 
            link="https://dulcet-gnome-2952a6.netlify.app/"
            image='./assets/images/dès.png'
            title='Jeu de dés' 
            techno={['HTML', 'CSS', 'JS']}
            description='Jeu de dès réalisé en Javascript'
        />
        <Img 
            link="https://drivescares-cff0b7bf806a.herokuapp.com/"
            image='./assets/images/drivescares.png'
            title='Drivescares' 
            techno={['HTML', 'CSS', 'JS', 'BOOTSTRAP', 'SYMFONY']}
            description='Site web pour un garage automobile avec gestion de contenu, réaliser avec Symfony'
        />
        <Img 
            link="#"
            image='./assets/images/sampler.png'
            title='Sampler' 
            techno={['HTML', 'CSS', 'REACT']}
            description='Application de musique réalisé avec le framework React'
        />
        </Grid>
    </>
  )
}

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 20px;
`;

export default Project