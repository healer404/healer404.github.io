import { useRef } from 'react';
import './contact.css';
import Observer from '../../../hooks/observer';

const Contact = () => {
  const refContact = useRef(null);
  const refEmail = useRef(null);
  const refSocial = useRef(null);
  const refNavigation = useRef(null);
  const refCV = useRef(null);
  const contactDetails = [
    {
      link: 'viber://chat?number=639677153243',
      icon: 'fab fa-viber',
      label: 'Viber'
    },
    {
      link: 'viber://chat?number=639677153243',
      icon: 'fab fa-telegram',
      label: 'Telegram'
    },
    {
      link: 'https://m.me/duka.roniel',
      icon: 'fab fa-facebook-messenger',
      label: 'Messenger'
    },
    {
      link: 'https://www.linkedin.com/in/roniel-duka-89aa30166/',
      icon: 'fab fa-linkedin',
      label: 'LinkedIn'
    }
  ];
  return (
    <section className="PRTFsection" id='contact'>
      <main className="contact-container">
        <header className={`contact-texts ${Observer(refContact) ? "active" : ""}`} ref={refContact}>
          <h2>Get in touch</h2>
          <span>Let's create something new!</span>
        </header>

        <div className="contact-links">
          <div className={`links ${Observer(refEmail) ? "active" : ""}`} ref={refEmail}>
            <h4>Email</h4>
            <a href="mailto:ronielduka@gmail.com">
              ronielduka@gmail.com
            </a>
          </div>
          
          <div className={`links ${Observer(refSocial) ? "active" : ""}`} ref={refSocial}>
            <h4>Social</h4>
            {contactDetails.map((contactLink, index) => (
              <a href={contactLink.link} key={index} target="_blank" rel="noreferrer">
                <i className={contactLink.icon}></i>
                {contactLink.label}
              </a>
            ))};
          </div>
            
          <div className={`links ${Observer(refNavigation) ? "active" : ""}`} ref={refNavigation}>
            <h4>Navigation</h4>
            <a href="#introduction">Home</a>
            <a href='#about'>About Me</a>
            <a href="#projects">Projects</a>
          </div>

          <div className={`links ${Observer(refCV) ? "active" : ""}`} ref={refCV}>
            <h4>Resume</h4>
            <a href='#introduction' className='btn-secondary cv-button' target="_blank" rel='noreferrer'>Download CV</a>
          </div>
        </div>

        <footer className="footer">
          <span>&copy; 2022 Roniel Duka</span>
        </footer>
      </main>
    </section>
  )
}
export default Contact;