import React, { createContext, useState, useContext } from 'react';

const LanguageContext = createContext();

export const translations = {
  gr: {
    // Navigation
    nav_home: 'Αρχική',
    nav_products: 'Προϊόντα',
    nav_projects: 'Έργα',
    nav_about: 'Σχετικά',
    nav_contact: 'Επικοινωνία',
    
    // Home page
    home_welcome_title: 'Καλώς ήρθατε στην ACE Audio & Conference Ltd.',
    home_welcome_desc: 'Η καλύτερη τεχνολογία ήχου είναι εδώ. Με 25 χρόνια εμπειρίας σε εγκαταστάσεις ήχου-συνεδρίων-προβολής, φέρνουμε ποιότητα και εξειδίκευση σε κάθε έργο.',
    home_services_title: 'Οι Υπηρεσίες μας',
    home_services_desc1: 'Εξειδικευμένοι σε εγκαταστάσεις PA, πολυχώρων και ενισχυμένα ηχητικά συστήματα, η ACE Audio & Conference βρίσκεται στην αιχμή της νέας τεχνολογίας ήχου. Παρέχουμε εξατομικευμένες λύσεις σχεδιασμού και μόνιμης εγκατάστασης καθώς και μελέτες για όλες τις ανάγκες ήχου σας.',
    home_services_desc2: 'Οι εξειδικευμένοι τεχνικοί μας είναι εξοπλισμένοι για να αντιμετωπίσουν κάθε πρόκληση σε διάφορα περιβάλλοντα:',
    home_services_buildings: 'Κτίρια, μεγάλα και μικρά',
    home_services_stadiums: 'Αθλητικά γήπεδα',
    home_services_healthcare: 'Υγειονομικές εγκαταστάσεις',
    home_services_conference: 'Αίθουσες συνεδριάσεων',
    home_services_auditoriums: 'Αμφιθέατρα',
    home_services_villas: 'Ιδιωτικές βίλες',
    home_services_airports: 'Αεροδρόμια',
    home_services_malls: 'Εμπορικά κέντρα',
    home_services_more: '...και πολλά άλλα.',
    home_cta_title: 'Επικοινωνήστε',
    home_cta_desc: 'για να συζητήσουμε πώς μπορούμε να αναβαθμίσουμε την ηχητική σας εμπειρία. Η ομάδα μας είναι έτοιμη να σχεδιάσει και να υλοποιήσει ένα σύστημα που ταιριάζει απόλυτα στο χώρο και τις ανάγκες σας.',
    home_cta_link: 'Επικοινωνήστε μαζί μας',
    
    // Products page
    products_title: 'Σχετικά με τα Προϊόντα μας',
    products_description: 'Περιγραφή από τον κατασκευαστή:',
    products_providers_desc: 'Η δέσμευσή μας να παρέχουμε προϊόντα ήχου κορυφαίας ποιότητας γίνεται δυνατή μέσω των αξιόλογων συνεργασιών μας με διάσημους προμηθευτές όπως η Fonestar, η Bosch, η Sonos και η Tutondo. Αυτοί οι ηγέτες της βιομηχανίας μοιράζονται το πάθος μας για εξαιρετικές ηχητικές εμπειρίες και καινοτομία. Η Fonestar, με την πολυετή εξειδίκευσή της, μας φέρνει πρωτοποριακές ηχητικές λύσεις, ενώ η φήμη της Bosch για μηχανική ακρίβειας εξασφαλίζει απαράμιλλη αξιοπιστία στους πελάτες μας. Η Sonos, γνωστό όνομα στον κόσμο των ασύρματων ηχείων και έξυπνου ήχου, μας δίνει τη δυνατότητα να προσφέρουμε τελευταίας τεχνολογίας ηχητικά συστήματα. Η Tutondo, γνωστή για την αριστεία της σε συστήματα δημόσιας αναγγελίας, μας βοηθά να ικανοποιήσουμε τις ποικίλες ανάγκες της πελατείας μας. Μαζί με αυτούς τους έμπιστους προμηθευτές, είμαστε αφοσιωμένοι στην αναβάθμιση της ηχητικής σας εμπειρίας σε νέα ύψη.',
    products_info_p1: 'Ανακαλύψτε έναν κόσμο απαράμιλλης ηχητικής αριστείας στην Ace Audio and Conference. Είτε είστε λάτρης του ήχου, επαγγελματίας μουσικός ή επιχείρηση που θέλει να αναβαθμίσει τον ηχητικό της εξοπλισμό, σας έχουμε καλύψει. Ο εκτεταμένος κατάλογός μας περιλαμβάνει ένα ευρύ φάσμα ηχητικών λύσεων, συμπεριλαμβανομένων subwoofers που θα ταρακουνήσουν τις αισθήσεις σας, ισχυρών συστημάτων PA για εντυπωσιακές παραστάσεις, προβολέων ήχου τελευταίας τεχνολογίας, υψηλής ποιότητας μικροφώνων για κρυσταλλική καταγραφή φωνής, ενισχυτών μίξης για ακριβή έλεγχο ήχου, συστημάτων συνεδρίων για απρόσκοπτη επικοινωνία, premium ηχείων που παρέχουν εκπληκτικό ήχο και καινοτόμων μεταφραστικών συστημάτων για γεφύρωση γλωσσικών εμποδίων. Με μια τόσο ποικίλη γκάμα, η εύρεση της τέλειας ηχητικής λύσης δεν ήταν ποτέ ευκολότερη.',
    products_info_p2: 'Στην Ace Audio and Conference, είμαστε υπερήφανοι που προσφέρουμε μόνο τα υψηλότερης ποιότητας προϊόντα ήχου. Κάθε αντικείμενο στη συλλογή μας υποβάλλεται σε αυστηρές δοκιμές για να διασφαλιστεί η απαράμιλλη απόδοση και ανθεκτικότητα. Είτε είστε μουσικός που αναζητά τον τέλειο τόνο, είτε επιχείρηση που στοχεύει σε άψογες παρουσιάσεις, είτε διοργανωτής εκδηλώσεων που επιδιώκει κορυφαία ποιότητα ήχου, μπορείτε να εμπιστευτείτε ότι τα προϊόντα μας θα ξεπεράσουν τις προσδοκίες σας. Η δέσμευσή μας στην ποιότητα επεκτείνεται σε κάθε πτυχή της επιχείρησής μας, από την εξειδικευμένη ομάδα υποστήριξης πελατών μας έτοιμη να σας βοηθήσει, έως την απρόσκοπτη εμπειρία online αγορών που κάνει την εύρεση και αγορά του κατάλληλου ηχητικού εξοπλισμού παιχνιδάκι.',
    products_section_title: 'Προϊόντα',
    
    // Projects page
    projects_title: 'Σχετικά με τα Έργα μας',
    projects_desc: 'Η δέσμευσή μας να παρέχουμε προϊόντα ήχου κορυφαίας ποιότητας γίνεται δυνατή μέσω των αξιόλογων συνεργασιών μας με διάσημους προμηθευτές όπως η Fonestar, η Bosch, η Sonos και η Tutondo. Αυτοί οι ηγέτες της βιομηχανίας μοιράζονται το πάθος μας για εξαιρετικές ηχητικές εμπειρίες και καινοτομία. Η Fonestar, με την πολυετή εξειδίκευσή της, μας φέρνει πρωτοποριακές ηχητικές λύσεις, ενώ η φήμη της Bosch για μηχανική ακρίβειας εξασφαλίζει απαράμιλλη αξιοπιστία στους πελάτες μας. Η Sonos, γνωστό όνομα στον κόσμο των ασύρματων ηχείων και έξυπνου ήχου, μας δίνει τη δυνατότητα να προσφέρουμε τελευταίας τεχνολογίας ηχητικά συστήματα. Η Tutondo, γνωστή για την αριστεία της σε συστήματα δημόσιας αναγγελίας, μας βοηθά να ικανοποιήσουμε τις ποικίλες ανάγκες της πελατείας μας. Μαζί με αυτούς τους έμπιστους προμηθευτές, είμαστε αφοσιωμένοι στην αναβάθμιση της ηχητικής σας εμπειρίας σε νέα ύψη.',
    projects_section_title: 'Μερικά από τα έργα μας',
    
    // About page
    about_title: 'Σχετικά με εμάς',
    about_p1: 'Η ACE Audio & Conference Ltd. ιδρύθηκε ως ένα οραματικό κέντρο επισκευής ήχου και γρήγορα έγινε ο προορισμός για πρωτοποριακές λύσεις ήχου. Η πορεία μας από αξιόπιστο κέντρο επισκευής σε ολοκληρωμένη υπηρεσία εγκατάστασης ηχητικών συστημάτων αντανακλά τη δέσμευσή μας στην καινοτομία και την ικανοποίηση του πελάτη.',
    about_p2: 'Αναγνωρίζοντας τη ζήτηση για προσιτά αλλά υψηλής ποιότητας προϊόντα, ξεκινήσαμε να εισάγουμε τον δικό μας εξοπλισμό ήχου - ένα αρμονικό μείγμα οικονομικής αποδοτικότητας και ανώτερης ποιότητας.',
    about_p3: 'Καθώς η εξειδίκευσή μας αυξανόταν, αυξάνονταν και οι υπηρεσίες μας, περιλαμβάνοντας λύσεις ήχου για συνέδρια με συστήματα μικροφώνων και διερμηνείας τελευταίας τεχνολογίας. Η ικανότητά μας στις σύγχρονες τεχνικές εγκατάστασης για συστήματα προβολής και πολυχώρων, καθώς και η συμμόρφωση με τα πρότυπα EN 54-16, μας ξεχωρίζουν στον κλάδο.',
    about_p4: 'Σήμερα, είμαστε υπερήφανοι που προσφέρουμε ολοκληρωμένες υπηρεσίες που εκτείνονται πέρα από την παροχή προϊόντων για να περιλαμβάνουν σχεδιασμό, καλωδίωση για νέες κατασκευές και αδιάκοπη τεχνική υποστήριξη. Η εκτεταμένη εμπειρία μας είναι το πλεονέκτημά σας, διασφαλίζοντας ότι κάθε ηχητική πρόκληση αντιμετωπίζεται με μια ικανή λύση.',
    about_p5: 'Στην ACE Audio & Conference, πιστεύουμε ότι η πείρα μας είναι το κλειδί για να ξεκλειδώσετε το πλήρες δυναμικό των οπτικοακουστικών σας εγχειρημάτων. Συνεργαστείτε μαζί μας για μια συμφωνία επαγγελματικής αριστείας και καινοτομίας.',
    
    // Contact page
    contact_title: 'Επικοινωνία με ACE Audio & Conference Ltd',
    contact_desc: 'Στείλτε μας email στο aceaudioconference@gmail.com ή συμπληρώστε την παρακάτω φόρμα:',
    contact_name: 'Όνομα:',
    contact_email: 'Email:',
    contact_message: 'Το μήνυμά σας:',
    contact_send: 'Αποστολή',
    contact_success: 'Το μήνυμα εστάλη επιτυχώς!',
    contact_error: 'Αποτυχία αποστολής μηνύματος, παρακαλώ δοκιμάστε ξανά.',
  },
  en: {
    // Navigation
    nav_home: 'Home',
    nav_products: 'Products',
    nav_projects: 'Projects',
    nav_about: 'About',
    nav_contact: 'Contact Us',
    
    // Home page
    home_welcome_title: 'Welcome to ACE Audio & Conference Ltd.',
    home_welcome_desc: 'The best of sound technology is here. With 25 years of experience in audio-conference-projecting installations, we bring quality and expertise to every project.',
    home_services_title: 'Our Services',
    home_services_desc1: 'Specializing in PA installations, multi-room installations, and enhanced sound systems, ACE Audio & Conference is at the forefront of new audio technology. We provide bespoke design and permanent installation solutions as well as studies to meet all your audio needs.',
    home_services_desc2: 'Our skilled technicians are equipped to handle any challenge in a variety of settings:',
    home_services_buildings: 'Buildings, both large and small',
    home_services_stadiums: 'Sports Stadiums',
    home_services_healthcare: 'Healthcare Facilities',
    home_services_conference: 'Conference Rooms',
    home_services_auditoriums: 'Auditoriums',
    home_services_villas: 'Private Villas',
    home_services_airports: 'Airports',
    home_services_malls: 'Shopping Malls',
    home_services_more: '...and more.',
    home_cta_title: 'Get in Touch',
    home_cta_desc: 'to discuss how we can elevate your audio experience. Our team is ready to design and implement a system that perfectly fits your space and needs.',
    home_cta_link: 'Contact us',
    
    // Products page
    products_title: 'About our products',
    products_description: 'Description from manufacturer:',
    products_providers_desc: 'Our commitment to delivering top-quality audio products is made possible through our esteemed partnerships with renowned providers like Fonestar, Bosch, Sonos, and Tutondo. These industry leaders share our passion for exceptional sound experiences and innovation. Fonestar, with its decades of expertise, brings us cutting-edge audio solutions, while Bosch\'s reputation for precision engineering ensures our customers enjoy unparalleled reliability. Sonos, a household name in the world of wireless speakers and smart audio, empowers us to offer state-of-the-art sound systems. Tutondo, known for its excellence in public address systems, helps us meet the diverse needs of our clientele. Together with these trusted providers, we\'re dedicated to elevating your audio experience to new heights.',
    products_info_p1: 'Discover a world of unparalleled audio excellence at Ace Audio and Conference. Whether you\'re a sound enthusiast, a professional musician, or a business looking to upgrade your audio equipment, we have you covered. Our extensive catalog features a wide array of audio solutions, including subwoofers that will shake your senses, powerful PA systems for crowd-thrilling performances, cutting-edge sound projectors, high-quality microphones for crystal-clear voice capture, mixer amplifiers for precise audio control, conference systems for seamless communication, premium speakers that deliver breathtaking sound, and innovative translators to bridge language barriers. With a range this diverse, finding the perfect audio solution has never been easier.',
    products_info_p2: 'At Ace Audio and Conference, we take pride in offering only the highest quality audio products. Each item in our collection undergoes rigorous testing to ensure unmatched performance and durability. Whether you\'re a musician seeking that perfect tone, a business aiming for flawless presentations, or an event organizer striving for top-notch sound quality, you can trust that our products will exceed your expectations. Our commitment to quality extends to every aspect of our business, from our knowledgeable customer support team ready to assist you, to our seamless online shopping experience that makes finding and purchasing the right audio equipment a breeze.',
    products_section_title: 'Products',
    
    // Projects page
    projects_title: 'About our projects',
    projects_desc: 'Our commitment to delivering top-quality audio products is made possible through our esteemed partnerships with renowned providers like Fonestar, Bosch, Sonos, and Tutondo. These industry leaders share our passion for exceptional sound experiences and innovation. Fonestar, with its decades of expertise, brings us cutting-edge audio solutions, while Bosch\'s reputation for precision engineering ensures our customers enjoy unparalleled reliability. Sonos, a household name in the world of wireless speakers and smart audio, empowers us to offer state-of-the-art sound systems. Tutondo, known for its excellence in public address systems, helps us meet the diverse needs of our clientele. Together with these trusted providers, we\'re dedicated to elevating your audio experience to new heights.',
    projects_section_title: 'Some of our projects',
    
    // About page
    about_title: 'About Us',
    about_p1: 'Founded as a visionary audio repair hub, ACE Audio & Conference Ltd. quickly became the go-to for cutting-edge audio solutions. Our journey from a trusted repair center to a full-scale audio system installation service reflects our commitment to innovation and customer satisfaction.',
    about_p2: 'Recognizing a demand for affordable yet high-quality products, we began importing our bespoke audio equipment - a harmonious blend of cost-effectiveness and superior quality.',
    about_p3: 'As our expertise grew, so did our services, encompassing conference audio solutions with state-of-the-art microphone and interpretation systems. Our proficiency in modern installation techniques for projection and multiroom systems, as well as compliance with EN 54-16 standards, sets us apart in the industry.',
    about_p4: 'Today, we pride ourselves on offering comprehensive services that extend beyond product provision to include design, cabling for new constructions, and relentless technical support. Our extensive experience is your asset, ensuring that every acoustic challenge is met with an adept solution.',
    about_p5: 'At ACE Audio & Conference, we believe that our seasoned experience is the key to unlocking the full potential of your audio-visual endeavors. Partner with us for a symphony of professional excellence and innovation.',
    
    // Contact page
    contact_title: 'Contact ACE Audio & Conference Ltd',
    contact_desc: 'Email us at aceaudioconference@gmail.com or fill out the form below:',
    contact_name: 'Name:',
    contact_email: 'Email:',
    contact_message: 'Your Message:',
    contact_send: 'Send Message',
    contact_success: 'Message sent successfully!',
    contact_error: 'Failed to send message, please try again.',
  }
};

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState('gr'); // Greek as default

  const t = (key) => {
    return translations[language][key] || key;
  };

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'gr' ? 'en' : 'gr');
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}

export default LanguageContext;
