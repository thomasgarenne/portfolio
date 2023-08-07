import React from 'react'

function Form() {
  const handleSubmit = event => {
    event.preventDefault();  

    const REQUEST_PARAMETERS = {
      method: `POST`,
      headers: { 'Content-Type': `application/x-www-form-urlencoded` },
      };

    fetch(`/`, REQUEST_PARAMETERS)
      .then(() => {
        console.log(`OK`);
      })
      .catch(error => alert(error));
  };
  return (
    <>
        <h1>Formulaire de contact</h1>

            <form  
              name='contact v1' 
              method='post' 
              data-netlify="true"
            >
              <input type="hidden" name="form-name" value="contact v1" />

              <label htmlFor='nom'>Nom</label>
              <input type='nom' id='nom' name='nom'/>
              
              <label htmlFor='email'>Email</label>
              <input type='email' id='email' name='email'/>

              <label htmlFor='text'>Message</label>
              <textarea id='text' name='text'/>

              <button type='submit' onClick={handleSubmit}>Envoyer</button>
            </form>

    </>
  )
}

export default Form