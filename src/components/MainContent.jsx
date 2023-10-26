import AboutMe from './AboutMe';
import TechnologiesContainer from './Technologies';
import MyProjects from './MyProjects';
import "../styles/components/maincontent.sass";

const MainContent = () => {
  return(
    <main id='main-content'>
      <AboutMe />
      <TechnologiesContainer />
    </main>
  )
};

export default MainContent;