import { useRef } from "react";
import RefObserver from "./inc.observer";
import SectionHeader from "./inc.header";

const ContactMe = () => {
  const refContactMe = useRef(null);
  return(
    <section className="PRTFsection" ref={refContactMe}>
      {SectionHeader({
        title: "Contact Me",
        subtitle: "Let's create something",
        ref: RefObserver(refContactMe)
      })}
      <main className={refContactMe ? "contactContainer active" : "contactContainer"}>
        <form className="contactForm">
          <input type="text" placeholder="Name" name="senderName" id="senderName" required />
          <input type="email" placeholder="Email" name="senderEmail" id="senderEmail" required />
          <textarea type="text" placeholder="Message" name="senderMessage" id="senderMessage" required />
          <button type="submit" className="btn-primary">
            SEND
          </button>
        </form>

        <div className="contactOptions">
          <h2>Message me on</h2>
          <a href="mailto:ronielduka@gmail.com" target="_blank" rel="noreferrer">
            <i className="fas fa-envelope fa-lg"></i>
            <span>Email</span>
          </a>
          <a href="viber://chat?number=639677153243" target="_blank" rel="noreferrer">
            <i className="fab fa-viber fa-lg"></i>
            <span>Viber</span>
          </a>
          <a href="https://t.me/dukaroniel" target="_blank" rel="noreferrer">
            <i className="fab fa-telegram fa-lg"></i>
            <span>Telegram</span>
          </a>
          <a href="https://m.me/duka.roniel" target="_blank" rel="noreferrer">
            <i className="fab fa-facebook-messenger fa-lg"></i>
            <span>Messenger</span>
          </a>
          <a href="https://www.linkedin.com/in/roniel-duka-89aa30166/" target="_blank" rel="noreferrer">
            <i className="fab fa-linkedin fa-lg"></i>
            <span>LinkedIn</span>
          </a>
        </div>

      </main>
      <footer className="footer">
        <span>&copy; roniel duka</span>
      </footer>
    </section>
  )
}
export default ContactMe;