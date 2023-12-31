import React, { useEffect } from 'react'

import styled from 'styled-components'

import Img from './Img';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

function Project() {

  const slide = () => {
    gsap.fromTo(
      ".grid", 
      {
        opacity: 0,
        y: +200,
      },
      {
       opacity: 1,
       y: 0,
       duration: 1,
       scrollTrigger: {
        trigger: ".grid",
        start: "top center",
        end: "bottom center"
       }
      }
    );
  }

  useEffect(() => {
    slide();
  }, []);

  return (
    <Wrapper className='wrapper'>
        <h2>Mes projets</h2>
        <Grid className='grid'>
        <Img 
            id="1"
            link="https://theridersworkshop.netlify.app/"
            image='/assets/images/theridersworkshop.png'
            title='The riders Workshop' 
            techno={['HTML', 'CSS', 'BOOTSTRAP']}
            description='Site vitrine pour une associations de sport, réalisé avec HTML, CSS et Bootstrap'
            git='https://github.com/thomasgarenne/TheRidesWorkshop.git'
        />
        <Img 
            id="2"
            link="https://jeu-de-des-studi.netlify.app/"
            image='/assets/images/dès.png'
            title='Jeu de dés' 
            techno={['HTML', 'CSS', 'JS']}
            description="Jeu de dès réalisé à l'aide de Javascript. Utilisation des events et manipulation du DOM."
            git='https://github.com/thomasgarenne/JS-DE.git'
        />
        <Img 
            id="3"
            link="https://drivescares-cff0b7bf806a.herokuapp.com/"
            image='/assets/images/drivescares.png'
            title='Drivescares' 
            techno={['HTML', 'CSS', 'JS', 'BOOTSTRAP', 'SYMFONY']}
            description="Site web pour un garage automobile avec gestion de contenu, réaliser avec Symfony. Intégration d'API, réalisation  de tests fonctionnels"
            git="https://github.com/thomasgarenne/vparrot.git"
        />
        <Img 
            id="4"
            link="https://cook-cf9c7f02faaa.herokuapp.com/index.php"
            image='/assets/images/cook.png'
            title='Cook' 
            techno={['HTML', 'CSS', 'JS', 'Fetch']}
            description='Site web pour ajouter, modifier et supprimer des recettes de cuisine.'
            git="https://github.com/thomasgarenne/portfolio.git"
        />
        </Grid>
    </Wrapper >
  )
}

const Wrapper = styled.div`
  min-height: calc(100vh - 100px);
  border-top: 1px solid;
  padding: 50px 0;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, auto);
  gap: 40px;
  @media screen and (max-width: 730px) {
    grid-template-columns: 1fr;
  }
`;

export default Project