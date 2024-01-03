import React from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function Form() {
 
const handleSubmit = (event) => {
  event.preventDefault();

  const myForm = event.target;
  const formData = new FormData(myForm);
  
  if (validateField(formData)) {
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
  } else {
    console.error("Form validation failed");
  }
};

const validateField = (formData) => {
  const nameValue = formData.get("name");
  const emailValue = formData.get("email");
  const messageValue = formData.get("message");

  const isNameValid = nameValue ? isValidateMessage({ value: messageValue }, 2, 25) : false;
  const isEmailValid = emailValue ? isValidEmail({ value: emailValue }) : false;
  const isMessageValid = messageValue ? isValidateMessage({ value: messageValue }, 10, 200) : false;

  return isNameValid && isEmailValid && isMessageValid;
}

const isValidateMessage = (input, min, max) => { 
  const messageValue = input.value; 
  if (messageValue !== null && messageValue.trim() !== "") {
    if (messageValue.length >= min && messageValue.length <= max) {

      return true;
    } else {
      alert(`La taille du message doit être comprise entre ${min} et ${max} caractères`);

      return false;
    }
  } else {
    alert('Entrez un message valide');

    return false;
  }
}

function isValidEmail(input) {
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

  if (emailRegex.test(input.value)) {

    return true;
  } else {
    alert('Entrez une adresse email valide');
    return false;
  }
}

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