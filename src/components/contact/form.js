import React from 'react'

function Form() {
  return (
    <>
        <h1>Formulaire de contact</h1>

        <form name="contact" method="POST" action='/contact'>
          <input type="hidden" name="form-name" value="contact"/>

          <div>
            <label htmlFor='name'>Votre Nom: </label>
            <input type="text" name="name" />
          </div>

          <div>
            <label htmlFor='email'>Votre Email: </label>
            <input type="email" name="email" />
          </div>
          
          <div>
            <label htmlFor='message'>Message: </label>
            <textarea name="message"></textarea>
          </div>

          <button type='submit'>Envoyer</button>
        </form>
    </>
  )
}

export default Form