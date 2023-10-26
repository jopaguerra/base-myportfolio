import {
  DiHtml5,
  DiCss3,
  DiJsBadge,
  DiNodejs,
  DiMysql,
  DiDocker,
  DiReact,
  DiSass
} from 'react-icons/di'
import { SiJest } from 'react-icons/si';

import '../styles/components/technologies.sass';

const technologies = [
  {id:'html', name: 'HTML5', icon: <DiHtml5 />},
  {id:'css', name: 'CSS3', icon: <DiCss3 />},
  {id:'js', name: 'JavaScript', icon: <DiJsBadge />},
  {id:'node', name: 'Node.JS', icon: <DiNodejs />},
  {id:'mysql', name: 'MySQL', icon: <DiMysql />},
  {id:'docker', name: 'Docker', icon: <DiDocker />},
  {id:'react', name: 'React', icon: <DiReact />},
  {id:'sass', name: 'Sass', icon: <DiSass />},
  {id:'jest', name: 'Jest', icon: <SiJest />},
];

const TechnologiesContainer = () => {

  return (
    <section className="tech-cards-technologies">
      <h2>
      Tecnologias
      </h2>
      <div className="tech-grid">
        {technologies.map((tech) => (
          <div className="tech-card" id={tech.id} key={tech.id}>
            {tech.icon}
            <div className="tech-info">
              <h3>{tech.name}</h3>
              {/* <p>
                O Lorem Ipsum é um texto modelo da indústria tipográfica e de impressão.
              </p> */}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechnologiesContainer