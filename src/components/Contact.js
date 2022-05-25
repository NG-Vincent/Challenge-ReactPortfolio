import React, { useState } from "react";
import { validateEmail } from "../utils/helpers";

function Contact(props) {
   // const [formState, setFormState] = useState({
   //    name: "",
   //    email: "",
   //    message: "",
   // });

   // const [errorMessage, setErrorMessage] = useState("");
   // const { name, email, message } = formState;

   // const handleSubmit = (e) => {
   //    e.preventDefault();
   //    if (!errorMessage) {
   //       console.log("Submit Form", formState);
   //    }
   // };

   // const handleChange = (e) => {
   //    if (e.target.name === "email") {
   //       const isValid = validateEmail(e.target.value);
   //       if (!isValid) {
   //          setErrorMessage("Your email is invalid.");
   //       } else {
   //          setErrorMessage("");
   //       }
   //    } else {
   //       if (!e.target.value.length) {
   //          setErrorMessage(`${e.target.name} is required.`);
   //       } else {
   //          setErrorMessage("");
   //       }
   //    }
   //    if (!errorMessage) {
   //       setFormState({ ...formState, [e.target.name]: e.target.value });
   //       console.log("Handle Form", formState);
   //    }
   // };

   return (
      <section className="contact">
         <h2 data-testid="h1tag">Contact me</h2>
         <div>
            <p>
               Want to get in touch? Connect with me using any of the methods
               listed below:
            </p>
            <ul>
               <li>
                  Email:{" "}
                  <a
                     href="mailto:vincent.ng39@gmail.com"
                     target="_blank"
                     rel="noreferrer"
                  >
                     vincent.ng39@gmail.com
                  </a>
               </li>
               <li>
                  GitHub:{" "}
                  <a
                     href="https://github.com/NG-Vincent"
                     target="_blank"
                     rel="noreferrer"
                  >
                     NG-Vincent
                  </a>
               </li>
               <li>
                  LinkedIn:{" "}
                  <a
                     href="https://www.linkedin.com/in/vincent-nguyen-4994bb221/"
                     target="_blank"
                     rel="noreferrer"
                  >
                     Vincent Nguyen
                  </a>
               </li>
            </ul>
         </div>
         {/* <form id="contact-form" onSubmit={handleSubmit}>
            <div className="contact-section">
               <label htmlFor="name">Name:</label>
               <input
                  type="text"
                  name="name"
                  defaultValue={name}
                  onBlur={handleChange}
               />
            </div>
            <div className="contact-section">
               <label htmlFor="email">Email address:</label>
               <input
                  type="email"
                  name="email"
                  defaultValue={email}
                  onBlur={handleChange}
               />
            </div>
            <div className="contact-section">
               <label htmlFor="message">Message:</label>
               <textarea
                  name="message"
                  rows="5"
                  defaultValue={message}
                  onBlur={handleChange}
               />
            </div>
            {errorMessage && (
               <div>
                  <p className="error-text">{errorMessage}</p>
               </div>
            )}
            <button data-testid="button" type="submit">
               Submit
            </button>
         </form> */}
      </section>
   );
}

export default Contact;
