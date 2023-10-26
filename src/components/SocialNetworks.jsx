import { FaLinkedinIn, FaGithub } from 'react-icons/fa'
import '../styles/components/socialnetworks.sass';

const socialNetworks = [
  { name: 'linkedin', icon: <FaLinkedinIn />, url: 'https://www.linkedin.com/in/jopaguerra/' },
  { name: 'github', icon: <FaGithub />, url: 'https://github.com/jopaguerra' },
  // { name: 'instagram', icon: <FaInstagram /> },
];

const SocialNetworks = () => {
  return (
    <section id='social-networks'>
      {socialNetworks.map((network) => (
        <a href={network.url} target='_blank' className='social-btn' id={network.name} key={network.name}>
          {network.icon}
        </a>
      ))}
    </section>
  );
};

export default SocialNetworks;