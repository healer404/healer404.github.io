import { useRef } from "react";
import {Link} from 'react-router-dom';
import Observer from "../../../hooks/observer";

import './introduction.css';

const Introduction = () => {
  const refIntro = useRef(null);
  return (
    <section className="PRTFsection" ref={refIntro} id="introduction">
      <main className={`introContainer ${Observer(refIntro) ? "active" : ""}`}>
        <div className="texts">
          <span className="greeting">
            Hello, my name is
          </span>
          <h1 className="name">
            Roniel Duka
          </h1>
          <span className="position">Junior developer</span>
        </div>
        <div className="buttons">
          <Link to={'/'} className="btn-primary" target="_blank" rel="noreferrer">
            Download CV
          </Link>
          <Link to={'/'} className="btn-secondary" target="_blank" rel="noreferrer">
            Let's Talk
          </Link>
        </div>
      </main>
    </section>
  )
}
export default Introduction;