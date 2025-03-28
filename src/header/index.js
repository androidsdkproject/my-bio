import './index.scss';

const Header = ({ onClick }) => {
  return (
    <div className="shadow-card header">
      <span className="header-span">{`Hii, I'm Kamal Verma`}</span>
      <div className="header-content">
        <span onClick={() => onClick('Home')}>Home</span>
        <span onClick={() => onClick('Skills')}>Skills</span>
        <span onClick={() => onClick('Experience')}>Experience</span>
        <span onClick={() => onClick('Contact')}>Contact</span>
      </div>
    </div>
  );
};

export default Header;
