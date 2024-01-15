import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    body {
        transition: linear 0.25s;
        color: ${(props) => props.theme.mainColor};
        background-color: ${(props) => props.theme.backgroundColor};
        font-family: Montserrat;
    }

    button {
        font-family: Montserrat;
        padding: 10px 20px;
        margin: 0 10px;
        width: 160px;
        color: ${(props) => props.theme.mainColor};
        background-color: ${(props) => props.theme.backgroundColor};
        cursor: pointer;
        border: 1px solid;
        transition: linear 0.25s;
    }

    button:hover {
        color: ${(props) => props.theme.backgroundColor};
        background-color: ${(props) => props.theme.mainColor};
    }

    h1 {
        font-size: 2rem;
    }

    h2 {
        font-size: 1.6rem;
    }

    h3 {
        font-size: 1.2rem;
    }

    h1, h2, h3, h4, h5 {
        letter-spacing: 1px;
        margin: 20px 0;
    }

    p {
        text-align: justify;
    }

    input, textarea {
        margin-bottom: 10px;
        width: 100%;
    }

    form {
        width: 600px;
        display: flex;
        flex-direction: column;
        padding: 40px 0;
        @media screen and (max-width: 700px) {
          width: 350px;
        }
    }

    img {
        border: 1px solid ${(props) => props.theme.mainColor};
        border-radius: 5px;
        padding: 5px;
    }
    
    .scroll-progress {
        position: fixed;
        z-index: 9999;
        top: 0;
        left: 0;
        width: 0;
        height: 5px;
        background-color:  #378d76;
        transition: width 0.1s ease-out;
    }
`;

export default GlobalStyle;