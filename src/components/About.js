import React from "react";
import useScrollAnimation from './useScrollAnimation';
import "../styles/About.css";
import { Helmet } from "react-helmet-async";
import { useLanguage } from '../context/LanguageContext';

function About() {
  const scrollRef = useScrollAnimation();
  const { t } = useLanguage();

  return (
    <div className="about" ref={scrollRef}>
      <Helmet>
          <title>About - Ace Audio and Conference</title>  
          <meta name="description" content="This is who we are."/>
          <link rel="canonical" href="/about"/>
        </Helmet>
      <section className='products-main container animate-on-scroll'>
        <h1>{t('about_title')}</h1>
      </section>
      <section className="about-container container animate-on-scroll">
        <p>{t('about_p1')}</p>
        <p>{t('about_p2')}</p>
        <p>{t('about_p3')}</p>
        <p>{t('about_p4')}</p>
        <p>{t('about_p5')}</p>
      </section>
    </div>
  );
}

export default About;