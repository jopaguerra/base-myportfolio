import React, { useState, useEffect } from "react";
import MainContent from './components/MainContent';
import Sidebar from './components/Sidebar';
import './styles/components/app.sass';
import './App.scss'

const App = () => {
  const phrases = ["Front-End", "Back-End", "Full-Stack"];
  const [phraseIndex, setPhraseIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length);
    }, 1500);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div id="portfolio">
      <h1>
        Olá, meu nome é João Paulo Guerra sou desenvolvedor{" "}
        <span className="animation">
          {phrases[phraseIndex]}
        </span>
      </h1>
      <div id="container">
      <Sidebar id='sidebar'/>
      <MainContent id='maincontent'/>
      </div>
    </div>
  );
};

export default App;
