import React from 'react'

import styled from 'styled-components'

function Form() {
  return (
    <>
        <h1>Formulaire de contact</h1>
        <Forms>
            <label htmlFor='nom'>Nom</label>
            <input type='nom' id='nom' name='nom'/>
            
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' name='email'/>

            <label htmlFor='text'>Message</label>
            <textarea id='text' name='text'/>

            <button>Envoyer</button>
        </Forms>
    </>
  )
}

const Forms = styled.form`
    width: 500px;
    display: flex;
    flex-direction: column;
    padding: 30px;
    border: 1px solid;
    border-radius: 5px;
`;

export default Form