import React from "react";
import "../styles/Home.css";
import useScrollAnimation from './useScrollAnimation';
import ImageScroller from './ImageScroller';
import { Helmet } from "react-helmet-async";
import { useLanguage } from '../context/LanguageContext';

function Home() {
    const scrollRef = useScrollAnimation();
    const { t } = useLanguage();

    return (
        <div ref={scrollRef} className="home">
          <Helmet>
          <title>Home - Ace Audio and Conference</title>  
          <meta name="description" content={t('home_welcome_desc')}/>
          <link rel="canonical" href="/"/>
        </Helmet>
          <ImageScroller />
          <section className="welcome container animate-on-scroll">
            <h1>{t('home_welcome_title')}</h1>
            <p>{t('home_welcome_desc')}</p>
          </section>
        <section className="services container animate-on-scroll">
          <div className="centered-header">
          <h2>{t('home_services_title')}</h2>
          </div>
          <p>{t('home_services_desc1')}</p>
          <p>{t('home_services_desc2')}</p>
          <ul className="dashed-list">
            <li>{t('home_services_buildings')}</li>
            <li>{t('home_services_stadiums')}</li>
            <li>{t('home_services_healthcare')}</li>
            <li>{t('home_services_conference')}</li>
            <li>{t('home_services_auditoriums')}</li>
            <li>{t('home_services_villas')}</li>
            <li>{t('home_services_airports')}</li>
            <li>{t('home_services_malls')}</li>
            {t('home_services_more')}
          </ul>
        </section>
        
        <section className="call-to-action container animate-on-scroll">
        <div className="centered-header">
        <h2>{t('home_cta_title')}</h2>
        </div>
          <p><a href="/contact">{t('home_cta_link')}</a> {t('home_cta_desc')}</p>
        </section>

      </div>
  );
}

export default Home;
