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
      <a href='https://drive.google.com/file/d/1kUCfx42Dei4CvrG1xgL4FagHSnhdKgty/view?usp=sharing' target='_blank' className='btn' rel="noreferrer">
        Download currículo
      </a>
      <a href="https://github.com/jopaguerra" target="_blank" className='btn' rel="noreferrer">
          Ver projetos
      </a>
    </aside>
  );
};

export default Sidebar;