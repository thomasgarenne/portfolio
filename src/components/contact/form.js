import React from 'react'

function Form() {
  return (
    <>
        <h1>Formulaire de contact</h1>

        <form name="contact" method="POST" action='/contact'>
          <input type="hidden" name="form-name" value="contact"/>
          <label>Votre Nom: <input type="text" name="name" /></label>
          <label>Votre Email: <input type="email" name="email" /></label>
          <label>Message: <textarea name="message"></textarea></label>
          <button type='submit'>Envoyer</button>
        </form>
    </>
  )
}

export default Form