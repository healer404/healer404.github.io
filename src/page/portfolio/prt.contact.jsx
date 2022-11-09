import { useRef, useState, useEffect } from "react";
import RefObserver from "./inc.observer";
import SectionHeader from "./inc.header";

const ContactMe = () => {
  const refContactMe = useRef(null);

  const [status, setStatus] = useState('Send');
  const [dataStatus, setDataStatus] = useState("Default");
  const [btnTimer, setBtnTimer] = useState(60);

  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    const {senderName, senderEmail, senderMessage} = e.target.elements;

    let details = {
      name: senderName.value,
      email: senderEmail.value,
      message: senderMessage.value,
    };

    if(details.name.trim().length !== 0 && details.message.trim().length !== 0 && re.test(details.email)){
      let response = await fetch("http://localhost:3001/mailing", {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(details),
      });
      setStatus("Sent");
      setDataStatus("Default");
      await response.json();
    } else{
      setDataStatus("NoData");
      setStatus("Send");
    }
  }

  useEffect(() => {
    let countdown;

    if(status === "Sent"){

      if(btnTimer <= 0){
        setStatus('Send');
        setBtnTimer(60);
      } else{
        countdown = setInterval(() => {
          setBtnTimer((btnTimer) => btnTimer - 1);
        }, 1000);
        return () => clearTimeout(countdown);
      }
    }
  }, [status, btnTimer])

  return(
    <section className="PRTFsection" ref={refContactMe}>
      {SectionHeader({
        title: "Contact Me",
        subtitle: "Let's create something",
        ref: RefObserver(refContactMe)
      })}
      <main className={refContactMe ? "contactContainer active" : "contactContainer"}>
        <form className="contactForm" onSubmit={handleSubmit}>
          {dataStatus === "NoData" ? 
          <p className='contact-warning'>
            <i className="fas fa-exclamation"></i>
            <span className='ml-10'>
              Please provide valid information.
            </span>
          </p> : null}

          {status === "Sent" ?
          <p className='contact-warning'>
            <i className='fas fa-check'></i>
            <span className='ml-10'>
              Message Sent. 
            </span>
          </p> : null}
          <input type="text" placeholder="Name" name="senderName" id="senderName" required />
          <input type="email" placeholder="Email" name="senderEmail" id="senderEmail" required />
          <textarea type="text" placeholder="Message" name="senderMessage" id="senderMessage" required />
          {status === 'Sent' ?
            <button type="button" className="btn-primary" disabled>
              {btnTimer}
            </button>  
            :
            <button type="submit" className="btn-primary">
              {status}
            </button>
          }
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