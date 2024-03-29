import './portfolio.css';
import Introduction from '../../components/portfolio/introduction/introduction';
import AboutMe from '../../components/portfolio/about/about';
import Projects from '../../components/portfolio/project/projects';
import Contact from '../../components/portfolio/contact/contact';
import Navbar from '../../components/portfolio/navbar/navbar';

import BackgroundAnimation from '../../components/portfolio/misc/background';

const PortfolioPage = () => {
  return (
    <>
      <BackgroundAnimation />
      <Introduction />
      <Navbar />
      <AboutMe />
      <Projects />
      <Contact />
    </>
  )
}

export default PortfolioPage;