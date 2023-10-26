import { AiOutlineMail, AiFillEnvironment } from 'react-icons/ai';
import '../styles/components/infoprofile.sass';

const InfoProfile = () => {
  return(
    <section id='information-profile'>
      <div className='info-card'>
        <AiOutlineMail id='mail-icon' />
        <div>
          <h3>E-mail</h3>
          <p>joaopauloferreiraguerra@gmail.com</p>
        </div>
      </div>

      <div className='info-card'>
        <AiFillEnvironment id='pin-icon' />
        <div>
          <h3>Local</h3>
          <p>Natal/RN - Brasil</p>
        </div>
      </div>

    </section>
  );
};

export default InfoProfile