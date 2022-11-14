import { useRef } from 'react';
import './contact.css';
import SectionHeader from '../misc/header';
import Observer from '../../../hooks/observer';
import ContactItem from './contactItem';

const Contact = () => {
  const refContactMe = useRef(null);
  const headerDetails= {
    title: "Contact Me",
    subtitle: "Let's create something",
    ref: Observer(refContactMe),
    id: "contact"
  };
  const contactDetails = [
    {
      link: 'mailto:ronielduka@gmail.com',
      icon: 'fas fa-envelope',
      label: 'Email'
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
    <section className="PRTFsection" ref={refContactMe}>
      <SectionHeader header={headerDetails} />
      <main className={`contactContainer ${Observer(refContactMe) ? "active" : ""}`}>
        <div className="contactOptions">
          <h2>Message me on</h2>
          {contactDetails.map((contactItem) => (
            <ContactItem details={contactItem} />
          ))};
        </div>
      </main>
    </section>
  )
}
export default Contact;