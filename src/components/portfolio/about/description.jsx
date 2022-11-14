const Description = (props) => {
  const isInView = props.isInView;
  return (
    <article className={`aboutDescription ${isInView ? "active" : ""}`}>
      <picture>
        <img src="https://avatars.githubusercontent.com/u/47404070?v=4" alt="Roniel Duka" loading="lazy"/>
      </picture>
      <div className="description">
        <span>Who am I?</span>
        <p>I am a graduate of computer engineering that loves exploring and 
          learning new things, especially when it comes to programming. I 
          am passionate about creating websites and web applications with 
          dynamic user interfaces.</p>
        <ul>
          <li>
            <a href="https://www.facebook.com/duka.roniel">
              <i className="fab fa-facebook fa-lg"></i>
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/roniel-duka-89aa30166/">
              <i className="fab fa-linkedin fa-lg"></i>
            </a>
          </li>
        </ul>   
      </div>
    </article>
  )
}
export default Description;