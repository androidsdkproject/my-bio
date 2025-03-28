import './index.scss';

import { useRef } from 'react';

import Header from '../header';
import About from '../about';
import Skills from '../skills';
import Experience from '../experience';

const Main = ({ className }) => {
  const homeRef = useRef(null);
  const skillsRef = useRef(null);
  const experienceRef = useRef(null);
  const contactRef = useRef(null);

  const onClick = (type) => {
    let targetRef;
    switch (type) {
      case 'Home':
        targetRef = homeRef;
        break;
      case 'About':
        targetRef = homeRef;
        break;
      case 'Skills':
        targetRef = skillsRef;
        break;
      case 'Experience':
        targetRef = experienceRef;
        break;
      case 'Contact':
        targetRef = contactRef;
        break;
    }

    if (targetRef?.current) {
      targetRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={`${className}`}>
      <Header onClick={onClick} />
      <div className="main-content">
        <div ref={homeRef}>
          <About className="main-item" />
        </div>
        <div ref={skillsRef}>
          <Skills className="main-item" />
        </div>
        <div ref={experienceRef}>
          <Experience className="main-item" />
        </div>
      </div>
    </div>
  );
};
export default Main;
