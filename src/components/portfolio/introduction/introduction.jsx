import { useRef } from "react";
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
          <a href="/assets/portfolio/RONIEL_L_DUKA_CV.pdf" className="btn-primary" target="_blank" rel="noreferrer">
            Download CV
          </a>
          <a href="#contact" className="btn-secondary">
            Let's Talk
          </a>
        </div>
      </main>
    </section>
  )
}
export default Introduction;