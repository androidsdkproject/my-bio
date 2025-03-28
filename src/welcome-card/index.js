import './index.scss';
const WelcomeCard = ({ className }) => {
  return (
    <div className={`shadow-card welcome-card flex-col ${className}`}>
      <div className="flex-col">
        <span className="main-title">Welcome To My Website</span>
        <span className="welcome-name">Hi, I'm Kamal</span>
        <span className="welcome-designation">Front End Developer</span>
        <span className="welcome-desc">
          I'm an India based front end developer with 8 year of experience.
        </span>
      </div>
    </div>
  );
};
export default WelcomeCard;
