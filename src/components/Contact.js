import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import useScrollAnimation from './useScrollAnimation';
import '../styles/Contact.css';
import { Helmet } from 'react-helmet-async';
import { useLanguage } from '../context/LanguageContext';

function Contact() {
  const form = useRef();
  const scrollRef = useScrollAnimation();
  const { t } = useLanguage();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_18yusfn', 'template_jranh97', form.current, 'bgBojYnJcq26l1FGQ')
      .then((result) => {
          alert(t('contact_success'));
      }, (error) => {
          alert(t('contact_error'));
      });
  };

  return (
    <div className="contact" ref={scrollRef}>
      <Helmet>
          <title>Contact - Ace Audio and Conference</title>  
          <meta name="description" content="Reach out to investigate ways to advance your systems!"/>
          <link rel="canonical" href="/contact"/>
        </Helmet>
      <section className="contact-container container animate-on-scroll">
        <h1>{t('contact_title')}</h1>
        <p>{t('contact_desc')}</p>
        
        <form className="contact-form" ref={form} onSubmit={sendEmail}>
          <label htmlFor="name">{t('contact_name')}</label>
          <input type="text" id="name" name="name" required />
          
          <label htmlFor="email">{t('contact_email')}</label>
          <input type="email" id="email" name="email" required />
          
          <label htmlFor="message">{t('contact_message')}</label>
          <textarea id="message" name="message" rows="5" required></textarea>
          
          <button type="submit">{t('contact_send')}</button>
        </form>
      </section>
    </div>
  );
}

export default Contact;
