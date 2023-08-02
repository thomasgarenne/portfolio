import React from 'react'

import styled from 'styled-components'

function About() {
  return (
    <Wrapper>
      <Profile src='./assets/images/profil.png' alt='profil'/>
      <Content>
        Au cours de ma formation, j'ai pu acquérir une solide base en HTML, qui m'a permis de structurer et de présenter le contenu d'une page web de manière logique et sémantique.
        En ce qui concerne le CSS, l'école Studi m'a enseigné comment donner vie aux pages web en contrôlant leur apparence et leur mise en page. J'ai développé des compétences pour créer des designs attrayants, adaptatifs et esthétiques.
        L'école Studi m'a également introduit au framework Bootstrap, qui m'a permis d'accélérer le processus de développement en utilisant des composants prédéfinis et des mises en page réactives.
        Le JavaScript a été une partie essentielle de ma formation à l'école Studi. J'ai appris à utiliser ce langage pour rendre les sites web interactifs et dynamiques. J'ai développé des compétences pour manipuler le DOM et créer des fonctionnalités interactives pour offrir une meilleure expérience utilisateur.
        Ensuite, j'ai eu la chance d'apprendre React, une bibliothèque JavaScript très répandue pour créer des interfaces utilisateur réactives et modulaires.
        Quant au côté serveur, l'école Studi m'a enseigné le langage PHP, qui est largement utilisé pour créer des sites web dynamiques. J'ai acquis des compétences pour interagir avec les bases de données, gérer les formulaires et développer des fonctionnalités du côté serveur.
        Enfin, j'ai eu l'opportunité d'apprendre le framework Symfony, qui suit le modèle de conception MVC. Cette formation m'a permis de développer des applications web robustes, évolutives et bien structurées, tout en appliquant les meilleures pratiques du développement web.
        Grâce à l'école Studi, j'ai acquis les compétences nécessaires pour devenir un développeur web junior compétent et motivé. Mon objectif est maintenant de continuer à apprendre et à grandir dans ce domaine passionnant tout en contribuant à des projets stimulants.
      </Content>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  padding: 50px 20px;
  display: flex;
  align-items: center;
  gap: 50px;
  @media screen and (max-width: 900px) {
    flex-direction: column;
  }
`;

const Profile = styled.img`
  width: 400px;
  border-radius: 5px;
  @media screen and (max-width: 1200px) {
    width: 300px;
  }
`;

const Content = styled.p`
  max-width: 800px;
  font-size: 1.2rem;
`;

export default About