import React from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function Form() {
 
const handleSubmit = (event) => {
  event.preventDefault();

  const myForm = event.target;
  const formData = new FormData(myForm);
  
  fetch("/", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams(formData).toString(),
  })
    .then(() => {
      console.log("Form successfully submitted");
      toast("Message envoyé avec succès !");
      document.querySelector("form").reset();
    })
    .catch((error) => {
      alert(error);
      toast("Une erreur est survenue !");
    });
};
  return (
    <>
        <ToastContainer />
        <h1>Formulaire de contact</h1>

        <form name="contact" method="POST" onSubmit={handleSubmit}>
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

        <form name="contact" netlify="true" netlify-honeypot="bot-field" hidden>
          <input type="text" name="name" hidden/>
          <input type="email" name="email" hidden/>
          <textarea name="message" hidden></textarea>
        </form>
    </>
  )
}

export default Form