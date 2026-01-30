import React from 'react';
import { Link } from 'react-router-dom';
import useScrollAnimation from './useScrollAnimation';
import '../styles/Products.css'; 
import { Helmet } from 'react-helmet-async';
import { useLanguage } from '../context/LanguageContext';



export const productList1 = [
  {
    id: 1,
    name: 'PUBLIC ADDRESS SYSTEMS',
    image: process.env.PUBLIC_URL +'/new_product_images/public_address_systems.jpg',
    info: "<p>A public address system (or PA system) is an electronic system comprising microphones, amplifiers, loudspeakers, and related equipment. It increases the apparent volume (loudness) of a human voice, musical instrument, or other acoustic sound source or recorded sound or music. PA systems are used in any public venue that requires that an announcer, performer, etc. be sufficiently audible at a distance or over a large area. Typical applications include sports stadiums, public transportation vehicles and facilities, and live or recorded music venues and events. A PA system may include multiple microphones or other sound sources, a mixing console to combine and modify multiple sources, and multiple amplifiers and loudspeakers for louder volume or wider distribution.</p><p>Simple PA systems are often used in small venues such as school auditoriums, churches, and small bars. PA systems with many speakers are widely used to make announcements in public, institutional and commercial buildings and locations—such as schools, stadiums, and passenger vessels and aircraft. Intercom systems, installed in many buildings, have both speakers throughout a building, and microphones in many rooms so occupants can respond to announcements. PA and Intercom systems are commonly used as part of an emergency communication system.</p>"
  },
  {
    id: 2,
    name: 'PUBLIC ADDRESS OVER IP',
    image: process.env.PUBLIC_URL +'/new_product_images/public_address_over_ip.jpg',
    info: ''
  },
  {
    id: 3,
    name: 'DIGITAL CONFERENCE SYSTEMS WITH LCD & VOTE',
    image: process.env.PUBLIC_URL +'/new_product_images/DIGITAL_CONFERENCE_SYSTEMS_WITH_LCD_VOTE.jpg',
    info: "<p>These paging microphones are designed as a plug-and-play paging solution to work in combination with the AUDAC multi-zone audio matrixes.</p><br>-Push to talk button <br>-Audio transmission via Dante™/AES67 <br>-Fully flexible & configurable touchscreen (from AUDAC Touch™) <br>-Visual user feedback (LED's) <br>-48V phantom power & XLR input that allows the use of various microphones <br>-PoE powered"
  },
  {
    id: 4,
    name: 'WIRELESS CONFERENCE SYSTEM',
    image: process.env.PUBLIC_URL +'/new_product_images/WIRELESS_CONFERENCE_SYSTEM.jpg', 
    info: "<p>A mixing console or mixing desk is an electronic device for mixing audio signals, used in sound recording and reproduction and sound reinforcement systems. Inputs to the console include microphones, signals from electric or electronic instruments, or recorded sounds. Mixers may control analog or digital signals. The modified signals are summed to produce the combined output signals, which can then be broadcast, amplified through a sound reinforcement system or recorded.</p><p>Mixing consoles are used for applications including recording studios, public address systems, sound reinforcement systems, nightclubs, broadcasting, and post-production. A typical, simple application combines signals from microphones on stage into an amplifier that drives one set of loudspeakers for the audience. A DJ mixer may have only two channels, for mixing two record players. A coffeehouse's tiny stage might only have a six-channel mixer, enough for two singer-guitarists and a percussionist. A nightclub stage's mixer for rock music shows may have 24 channels for mixing the signals from a rhythm section, lead guitar and several vocalists. A mixing console in a professional recording studio may have as many as 96 channels.</p><p>In practice, mixers do more than simply mix signals. They can provide phantom power for condenser microphones; pan control, which changes a sound\\'s apparent position in the stereo soundfield; filtering and equalization, which enables sound engineers to boost or cut selected frequencies to improve the sound; dynamic range compression, which allows engineers to increase the overall gain of the system or channel without exceeding the dynamic limits of the system; routing facilities, to send the signal from the mixer to another device, such as a sound recording system or a control room; and monitoring facilities, whereby one of a number of sources can be routed to loudspeakers or headphones for listening, often without affecting the mixer\\'s main output.[2] Some mixers have onboard electronic effects, such as reverb. Some mixers intended for small venue live performance applications may include an integrated power amplifier.</p>"
  },
  {
    id: 5,
    name: 'MULTI ROOM SYSTEMS FOR VILLAS',
    image: process.env.PUBLIC_URL +'/new_product_images/multi_room_systems_for_villas.jpg', 
    info: ""
  },
  {
    id: 7,
    name: 'SPEAKERS 100V',
    image: process.env.PUBLIC_URL +'/new_product_images/speakers_100v.jpg', // Replace with the actual image path
  },
  {
    id: 8,
    name: 'VOLUME REGULATORS',
    image: process.env.PUBLIC_URL +'/new_product_images/volume_regulators.jpg', // Replace with the actual image path
  },
  {
    id: 9,
    name: 'CONSOLES',
    image: process.env.PUBLIC_URL +'/new_product_images/CONSOLES.jpg', // Replace with the actual image path
  },
  ]

export const productList2=[
  {
    id: 12,
    name: 'EN 54 VOICE EVACUATION SYSTEMS',
    image: process.env.PUBLIC_URL +'/new_product_images/EN_54_VOICE_EVACUATION_SYSTEMS.jpg', // Replace with the actual image path
  },
  {
    id: 13,
    name: 'EN 54 SPEAKERS',
    image: process.env.PUBLIC_URL +'/new_product_images/EN_54_SPEAKERS.jpg', // Replace with the actual image path
  },
  {
    id: 14,
    name: 'CONFERENCE SYSTEMS',
    image: process.env.PUBLIC_URL +'/new_product_images/CONFERENCE_SYSTEMS.jpg', // Replace with the actual image path
  },
  {
    id: 15,
    name: 'WIRELESS TRANSLATION',
    image: process.env.PUBLIC_URL +'/new_product_images/wireless_translation.jpg', // Replace with the actual image path
  },
  {
    id: 16,
    name: 'ON WALL REMOTE CONTROLS',
    image: process.env.PUBLIC_URL +'/new_product_images/on_wall_remote_controllers.jpg', // Replace with the actual image path
  },
  {
    id: 17,
    name: 'HI-FI SPEAKERS',
    image: process.env.PUBLIC_URL +'/new_product_images/hi-fi_speakers.jpg', // Replace with the actual image path
  },
  {
    id: 18,
    name: 'PA SPEAKERS',
    image: process.env.PUBLIC_URL +'/new_product_images/PA_SPEAKERS.jpg', // Replace with the actual image path
  },
];

const providersList=[
  {
    id:2,
    name: 'TUTONDO',
    image:process.env.PUBLIC_URL +"/providers_images/tutondo.jpg",
    link:"https://www.tutondo.com/"
  },
  {
    id:3,
    name: 'SONOS',
    image:process.env.PUBLIC_URL +"/providers_images/sonos.jpg",
    link:"https://www.sonos.com/en/home"
  },
  {
    id:4,
    name: 'BOSCH',
    image:process.env.PUBLIC_URL +"/providers_images/bosch.jpg",
    link:"https://www.boschsecurity.com/xc/en/"
  },
]

function Products() {
  const scrollRef = useScrollAnimation();
  const { t } = useLanguage();

  return (
    <div className='products' ref={scrollRef}>
      <Helmet>
          <title>Products - Ace Audio and Conference</title>  
          <meta name="description" content="Find the latest products and technologies to upgrade your audio visual systems."/>
          <link rel="canonical" href="/products"/>
        </Helmet>
      <section className='products-main container animate-on-scroll'>
        <h1>{t('products_title')}</h1>
      </section>
      <section className='providers-info container animate-on-scroll'>
        <p>{t('products_providers_desc')}</p>
      </section>
      <section className='providers-list container animate-on-scroll'>
        {providersList.map(provider => (
              <div key={provider.id} className="provider-item">
                <a href={provider.link}>
                <img src={provider.image} alt={provider.name} className="provider-image" />
                <h3 className="provider-name">{provider.name}</h3>
                </a>
              </div>
            ))}
      </section>
      <section className='products-info container animate-on-scroll'>
        <p>{t('products_info_p1')}</p>
        <p>{t('products_info_p2')}</p>
      </section> 
      <div className="full-width-bg-colored">
        <section className='providers-info container animate-on-scroll'>
          <div className='centered-header'>
          <h2>{t('products_section_title')}</h2>
          </div>
        </section>
        <div className="products-containers-container animate-on-scroll">
          <div className="products-container1">
            {productList1.map(product => (
              <div key={product.id} className="product-item">
                  <h3 className="product-name">{product.name}</h3>
              </div>
            ))}
          </div>
          <div className="products-container2 animate-on-scroll">
            {productList2.map(product => (
                <div key={product.id} className="product-item">
                    <h3 className="product-name">{product.name}</h3>
                </div>
              ))}
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default Products;
