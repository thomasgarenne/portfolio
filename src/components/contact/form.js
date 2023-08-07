import React from 'react'

function Form() {
  return (
    <>
        <h1>Formulaire de contact</h1>

            <form  
              name='contact' 
              method='post' 
              data-netlify="true"
              onSubmit="submit"
            >
              <input type="hidden" name="form-name" value="contact" />

              <label htmlFor='nom'>Nom</label>
              <input type='nom' id='nom' name='nom'/>
              
              <label htmlFor='email'>Email</label>
              <input type='email' id='email' name='email'/>

              <label htmlFor='text'>Message</label>
              <textarea id='text' name='text'/>

              <button type='submit'>Envoyer</button>
            </form>

    </>
  )
}

export default Form