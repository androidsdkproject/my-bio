import './index.scss';

import Constants from '../constants';

const Bio = Constants.Bio;

const SideCard = ({ className }) => {
  return (
    <div className={`${className} shadow-card`}>
      <div className="flex-col">
        <img src={Constants.Images.Profile} className="side-card-profile " />

        <span className="side-card-name">{Bio.name}</span>
        <span className="side-card-designation">{Bio.designation}</span>

        <div className="side-card-item-content">
          <div className="side-card-item">
            <span>Email : </span>
            <span>{Bio.email}</span>
          </div>

          <div className="side-card-item">
            <span>Phone : </span>
            <span>{Bio.phone}</span>
          </div>

          <div className="side-card-item">
            <span>Age : </span>
            <span>{new Date().getFullYear() - Bio.ageY} Years</span>
          </div>
        </div>

        <div className="side-card-divider" />
        <div className="side-card-top-skills-header">Top Skills</div>
        <div className="side-card-top-skills-wrapper ">
          {Bio.topSkills.map((item) => {
            return (
              <span className="side-card-top-skills-title" key={item}>
                {item}
              </span>
            );
          })}
        </div>
        <div className="side-card-divider" />
        <div className="side-card-top-skills-header">Social Media</div>
        <div className="side-card-top-skills-wrapper ">
          {Bio.socialMedia.map((item) => {
            return (
              <img
                onClick={() => {
                  window.open(item.link, '_blank');
                }}
                key={item.name}
                src={item.logo}
                className="side-card-top-skills-img"
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default SideCard;
