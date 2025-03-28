import './index.scss';
const About = ({ className }) => {
  return (
    <div className={`about ${className}`}>
      <span>
        {`I am a highly talented front-end lead in Game Technologies with a natural inclination towards simplicity. I completed my schooling at Central Public Sr Sec School before earning my graduation degree from MNIT Jaipur. My exceptional academic performance and technical skills led to a placement at Precise Automation and Robotics, where I began to make my mark in the industry.`}
      </span>
      <br />
      <br />
      <span>{`Throughout my career, I have demonstrated an unwavering dedication to pushing beyond limits and constantly extending boundaries. My passion for front-end development and commitment to staying ahead of the curve have earned me a reputation as an innovative and forward-thinking professional.`}</span>
      <br />
      <br />
      <span>{`Despite my achievements, I remain grounded and humble, valuing simplicity and a down-to-earth approach in both personal and professional life. As a true team player, I am known for my collaborative spirit, always willing to go the extra mile to ensure the success of my projects. My exceptional talent, creativity, and unwavering commitment to excellence make me a true asset to the field of front-end development.`}</span>
    </div>
  );
};

export default About;
