import './index.scss';

import Constants from '../constants';

const ExperienceCard = ({ item }) => {
  const descriptionList = item.description.split('\n');

  return (
    <div className="shadow-card experience-card">
      <div className="experience-card-header ">
        <div className="flex-row">
          <img
            src={item.logo}
            alt={'company logo'}
            className="experience-card-img experience-card-logo"
          />
          <span className="experience-card-span">{`${item.name} (${item.location})`}</span>
        </div>

        <div className="flex-row">
          <img
            src={Constants.Images.Calender}
            alt={'calender'}
            className="experience-card-img experience-card-logo"
          />
          <span className="experience-card-span">{`${item.startY} - ${item.endY}`}</span>
        </div>
      </div>
      <div className="experience-card-header ">
        <div className="flex-row">
          <span className="experience-card-span">{item.designation}</span>
        </div>
        <div className="flex-row">
          <span className="experience-card-job-type">{item.jobType}</span>
        </div>
      </div>
      <div className="experience-card-desc">
        {descriptionList.map((item) => {
          return <li key={item}>{item}</li>;
        })}
      </div>
    </div>
  );
};

const Experience = ({ className }) => {
  return (
    <div className={`${className} `}>
      <span className="main-title">Experience</span>
      <div className={'experience-wrapper '} style={{ flexWrap: 'wrap' }}>
        {Constants.ExperienceList.map((item) => {
          return <ExperienceCard key={item.id} item={item} />;
        })}
      </div>
    </div>
  );
};

export default Experience;
