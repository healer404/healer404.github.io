import { useRef } from "react";
import RefObserver from "./inc.observer";

const Introduction = () => {
  const refIntro = useRef(null);
  return (
    <section className="PRTFsection" ref={refIntro}>
      <main className={RefObserver(refIntro) ? "introContainer active" : "introContainer"}>
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
          <a href="" className="btn-primary" target="_blank" rel="noreferrer">
            Download CV
          </a>
          <a href="" className="btn-secondary" target="_blank" rel="noreferrer">
            Let's Talk
          </a>
        </div>
      </main>
    </section>
  )
}
export default Introduction;