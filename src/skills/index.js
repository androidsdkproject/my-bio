import './index.scss';
import Constants from '../constants';

const SkillImage = ({ src, alt }) => {
  return (
    <div className="shadow-card skills-image">
      <img src={src} alt={alt} />
    </div>
  );
};

const Skills = ({ className }) => {
  return (
    <div className={`${className} skills`}>
      <span className="main-title">Skills</span>
      <div className="flex-row" style={{ flexWrap: 'wrap' }}>
        <SkillImage src={Constants.Images.CSSLogo} alt="CSSLogo" />
        <SkillImage src={Constants.Images.GithubLogo} alt="GithubLogo" />
        <SkillImage src={Constants.Images.HtmlLogo} alt="HtmlLogo" />
        <SkillImage src={Constants.Images.JsLogo} alt="JsLogo" />
        <SkillImage src={Constants.Images.NpmLogo} alt="NpmLogo" />
        <SkillImage src={Constants.Images.ReactLogo} alt="ReactLogo" />
        <SkillImage src={Constants.Images.ReduxLogo} alt="ReduxLogo" />
        <SkillImage src={Constants.Images.SassLogo} alt="ReduxLogo" />
        <SkillImage src={Constants.Images.TSLogo} alt="Logo" />
      </div>
    </div>
  );
};

export default Skills;
