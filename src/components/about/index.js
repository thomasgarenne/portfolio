import React from 'react'

import styled from 'styled-components'

function About() {
  return (
    <Wrapper>
      <Profile src='./assets/images/profil.png' alt='profil'/>
      <Content>
      Au cours de ma formation chez Studi, j'ai développé une expertise solide en HTML pour la structuration sémantique des pages web. Mes compétences en CSS incluent la création de designs attrayants et adaptatifs.
      J'ai également utilisé Bootstrap pour accélérer le développement avec des composants prédéfinis.<br/>
      La maîtrise du JavaScript m'a permis de rendre les sites web interactifs, manipuler le DOM, et créer des fonctionnalités améliorant l'expérience utilisateur.
      J'ai appris React pour développer des interfaces réactives et modulaires.<br/>
      Côté serveur, j'ai acquis des compétences en PHP pour la création de sites web dynamiques, gestion des bases de données, et développement côté serveur.
      J'ai également exploré Symfony pour concevoir des applications robustes suivant le modèle MVC.<br/>
      Grâce à Studi, je suis désormais un développeur web junior compétent et motivé, prêt à contribuer à des projets passionnants tout en continuant à apprendre et à progresser.<br/>
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