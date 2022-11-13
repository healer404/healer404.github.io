import './portfolio.css';
import Introduction from '../../components/portfolio/introduction/introduction';
import AboutMe from '../../components/portfolio/about/about';

import BackgroundAnimation from '../../components/portfolio/misc/background';

const PortfolioPage = () => {
  return (
    <>
      <BackgroundAnimation />
      <Introduction />
      <AboutMe />
    </>
  )
}

export default PortfolioPage;