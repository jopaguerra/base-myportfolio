import SocialNetworks from './SocialNetworks';
import MyProfileImage from '../images/MyProfileImage';
import "../styles/components/sidebar.sass";
import InfoProfile from './InfoProfile';

const Sidebar = () => {
  return (
    <aside id='sidebar'>
      <MyProfileImage/>
      <p className='title'> Desenvolvedor Full Stack</p>
      <SocialNetworks />
      <InfoProfile />
      <a href='./src/components/download/Profile.pdf' download='Curriculo-JPGUERRA.pdf' className='btn'>
        Download currículo
      </a>
      <a href="https://github.com/jopaguerra" target="_blank" className='btn'>
          Ver projetos
      </a>
    </aside>
  );
};

export default Sidebar;