import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';

// Function to wrap each letter of a string in a span, including spaces
const wrapLetters = (text) => {
  return text.split("").map((char, index) => (
    <span key={index} className="letter">{char === " " ? "\u00A0" : char}</span>
  ));
};

const Contact = () => {
  const form = useRef(); // useRef to reference the form

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ff0upku', 'template_8j7xwzo', form.current, '93fC-lhbajizzX8sS')
      .then((result) => {
          console.log('SUCCESS!', result.text);
          alert("Message Sent Successfully!");
          form.current.reset(); // Reset the form after success
      }, (error) => {
          console.log('FAILED...', error.text);
          alert("Message Sending Failed. Please try again.");
      });
  };

  return (
    <>
      <div className='contact-container'>
        <div className='left-container'>
          <h1>{wrapLetters('Contact Me!')}</h1>
          <h2>Thank you for your interest in getting in touch!</h2>
          <p>
            I’m always open to communication and would love to hear from you! Whether you
            have questions, feedback, or potential collaboration ideas, feel free to reach out.
            Simply fill out the contact form, and don’t hesitate to let me know if you spot any
            errors — I appreciate your input!
          </p>
          <div className="social-icons">
            <a href="https://www.linkedin.com/in/said-masih-sajady/" aria-label="LinkedIn" target='_blank'>
              <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="linkedin" className="icon" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" color="#4d4d4e">
                <path fill="currentColor" d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path>
              </svg>
            </a>
            <a href="mailto:s.saidmasih@gmail.com" aria-label="Email">
              <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="envelope" className="icon" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" color="#4d4d4e">
                <path fill="currentColor" d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"></path>
              </svg>
            </a>
            <a href="https://github.com/saidmsajady" aria-label="GitHub" target='_blank'>
              <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="github" className="icon" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" color="#4d4d4e">
                <path fill="currentColor" d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8z"></path>
              </svg>
            </a>
          </div>
        </div>

        <div className='right-container'>
          <form ref={form} onSubmit={sendEmail} className='contact-form'>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="name"></label>
              <input type="text" id="name" name="from_name" placeholder='Name' required />
            </div>
          <div className="form-group">
              <label htmlFor="email"></label>
              <input type="email" id="email" name="from_email" placeholder='Email' required />
            </div>
          </div>
            <div className="form-group">
              <label htmlFor="message"></label>
              <textarea id="message" name="message" rows="6" placeholder='Message' required></textarea>
            </div>
            <button type="submit" className="send-button">Send Message</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
