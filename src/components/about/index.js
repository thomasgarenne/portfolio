import React from 'react'

import styled from 'styled-components'

function About() {
  return (
    <Wrapper>
      <Profile src='./assets/images/profil.png' alt='profil'/>
      <Content>
      <p>
        Bonjour, je suis Thomas, passionné de sports et d'aventures. Ayant débuté chez Intersport, j'ai évolué vers la gestion d'équipe, perfectionnant mes compétences en service à la clientèle.
      </p><br/>

      <p>
        Durant ma formation, j'ai développé une passion pour le développement web avec PHP et Symfony. J'ai créé un site vitrine interactif pour une association sportive,
        démontrant ma maîtrise des fonctionnalités avancées. J'ai également conçu un site pour un garage automobile, intégrant des notions essentielles de PHP et Symfony,
        assurant la sécurité des utilisateurs par des mesures telles que l'authentification.
      </p><br/>

      <p>
        Actuellement à la recherche d'une opportunité d'alternance pour un Bachelor en Développement d'Applications, mon objectif est d'appliquer mes compétences polyvalentes
        et mon expérience opérationnelle dans le commerce, tout en acquérant de nouvelles compétences en développement d'applications.
      </p><br/>
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