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
            techno={['HTML', 'CSS', 'JavaScript', 'Media Queries', 'Bootstrap']}
            description="Le projet vise à créer un site web statique interactif et esthétiquement agréable en utilisant des technologies web fondamentales telles que HTML, CSS et JavaScript. L'objectif principal est de fournir une expérience utilisateur fluide et responsive, tout en démontrant la capacité à intégrer des animations et à gérer la mise en page sur différentes tailles d'écrans grâce aux media queries."
            pointFort={
              [
                "Responsive Design : Le site est conçu pour s'adapter de manière fluide à toutes les tailles d'écrans, offrant ainsi une expérience utilisateur cohérente.",
                "Esthétique Visuelle : L'utilisation de CSS pour le style et les animations améliore l'esthétique globale du site, le rendant attrayant pour les visiteurs.",
                "Interactivité : Les fonctionnalités interactives implémentées en JavaScript ajoutent une dimension d'engagement et d'interactivité à l'expérience utilisateur."
              ]
            }
            git='https://github.com/thomasgarenne/TheRidesWorkshop.git'
        />
        <Img 
            id="2"
            link="https://jeu-de-des-studi.netlify.app/"
            image='/assets/images/dès.png'
            title='Jeu de dés' 
            techno={['HTML', 'CSS', 'Javascript', 'Bootstrap']}
            description="Le projet Jeu de Dés est une application web interactive visant à simuler le lancer de deux dés. L'objectif est de créer une expérience ludique et engageante en utilisant les langages HTML, CSS, et Bootstrap pour manipuler le DOM et gérer les événements."
            pointFort={
              [
                "Interactivité : L'application permet aux utilisateurs de lancer les dés en cliquant sur un bouton, offrant ainsi une expérience interactive.",
                "Manipulation du DOM : Le projet démontre la capacité à manipuler le Document Object Model (DOM) à l'aide de JavaScript pour mettre à jour dynamiquement le contenu de la page en fonction des actions de l'utilisateur.",
                "Styling avec Bootstrap : L'utilisation du framework Bootstrap facilite la création d'une interface utilisateur attrayante et responsive."
              ]
            }
            git='https://github.com/thomasgarenne/JS-DE.git'
        />
        <Img 
            id="3"
            link="https://drivescares-cff0b7bf806a.herokuapp.com/"
            image='/assets/images/drivescares.png'
            title='Drivescares' 
            techno={['HTML', 'CSS', 'Javascript', 'Bootstrap', 'Symfony', 'PHP', 'MySQL']}
            description="Le projet Site Vitrine pour un Garage Automobile est une application web fictive dédiée à la promotion et à la vente de véhicules. Cette application met en œuvre plusieurs fonctionnalités clés, notamment la vente de véhicules, des filtres de recherche asynchrone, une gestion de contenu robuste, des mesures de sécurité avec validation et gestion des rôles, des tests fonctionnels, l'utilisation de media queries pour la responsivité, la manipulation du DOM, la gestion d'événements, et le stockage local."
            pointFort={
              [
                "Vente de Véhicules : La fonctionnalité de vente de véhicules, permettant aux utilisateurs de parcourir et d'acheter des véhicules sans délai.",
                "Filtres de Recherche Asynchrones : Les utilisateurs peuvent filtrer les véhicules de manière asynchrone, améliorant ainsi la fluidité de la recherche.",
                "Gestion de Contenu : Le site propose une gestion de contenu efficace permettant d'ajouter, modifier et supprimer des véhicules du catalogue.",
                "Sécurité avec Validation : Des mesures de sécurité, telles que la validation côté serveur, sont mises en place pour garantir l'intégrité des données.",
                "Gestion des Rôles : Différents rôles d'utilisateur (administrateur, client) sont gérés pour un accès différencié aux fonctionnalités.",
                "Tests Fonctionnels : Des tests fonctionnels sont implémentés pour assurer le bon fonctionnement de l'application."
              ]
            }
            git="https://github.com/thomasgarenne/vparrot.git"
        />
        <Img 
            id="4"
            link="https://cook-cf9c7f02faaa.herokuapp.com/index.php"
            image='/assets/images/cook.png'
            title='Cook' 
            techno={['HTML', 'CSS', 'Javascript', 'Fetch', 'PHP', 'SQL']}
            description="Le projet Site de Cuisine en PHP Vanilla est une plateforme dédiée à la découverte et à la gestion de recettes de cuisine. Cette application web utilise le langage de programmation PHP sans framework pour offrir une expérience utilisateur complète. Les principales fonctionnalités incluent la gestion de contenu, la gestion des rôles, l'utilisation de variables de session, et plus encore."
            pointFort={
              [
                "Gestion de Contenu : Le site permet aux utilisateurs d'ajouter, de modifier et de supprimer des recettes de cuisine, offrant ainsi une plateforme dynamique et participative.",
                "Gestion des Rôles : Différents rôles d'utilisateur sont mis en place, tels que administrateur, éditeur, et utilisateur, définissant les droits d'accès et les fonctionnalités disponibles.",
                "Variables de Session : Les variables de session sont utilisées pour suivre l'état de connexion de l'utilisateur et pour personnaliser l'expérience utilisateur."
              ]
            }
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