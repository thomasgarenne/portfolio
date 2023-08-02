import React from 'react'

import styled from 'styled-components'

function Form() {
  return (
    <>
        <h1>Formulaire de contact</h1>
        <Forms name='contact' method='post' netlify>
            <input type="hidden" name="form-name" value="contact" />

            <label htmlFor='nom'>Nom</label>
            <input type='nom' id='nom' name='nom'/>
            
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' name='email'/>

            <label htmlFor='text'>Message</label>
            <textarea id='text' name='text'/>

            <button type='submit'>Envoyer</button>
        </Forms>
    </>
  )
}

const Forms = styled.form`
    width: 600px;
    display: flex;
    flex-direction: column;
    padding: 40px 0;
    border-radius: 10px;
    @media screen and (max-width: 700px) {
      width: 350px;
    }
`;

export default Form