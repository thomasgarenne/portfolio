import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Helmet } from 'react-helmet';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Mon Portfolio</title>
      <meta name="description" content="Bienvenue sur le portfolio de [Votre Nom], développeur web passionné." />
      <meta name="keywords" content="développeur web, portfolio, compétences, projets, react js" />
      <meta name="author" content="Dieszirae" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="robots" content="index, follow" />
    </Helmet>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
