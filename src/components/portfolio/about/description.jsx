import { Link } from "react-router-dom";

const Description = (props) => {
  const isInView = props.isInView;
  return (
    <article className={`aboutDescription ${isInView ? " active" : ""}`}>
      <picture>
        <img src="https://avatars.githubusercontent.com/u/47404070?v=4" alt="Roniel Duka Photo" loading="lazy"/>
      </picture>
      <div className="description">
        <span>Who am I?</span>
        <p>I am a graduate of computer engineering that loves exploring and 
          learning new things, especially when it comes to programming. I 
          am passionate about creating websites and web applications with 
          dynamic user interfaces.</p>
        <ul>
          <li>
            <Link href="/"><i className="fab fa-facebook fa-lg"></i></Link>
          </li>
          <li>
            <Link href="/"><i className="fab fa-twitter fa-lg"></i></Link>
          </li>
          <li>
            <Link href="/"><i className="fab fa-linkedin fa-lg"></i></Link>
          </li>
        </ul>   
      </div>
    </article>
  )
}
export default Description;