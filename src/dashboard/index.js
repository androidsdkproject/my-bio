import Main from '../main';
import SideCard from '../side_card';
import './index.scss';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <SideCard className="side-card" />
      <Main className="main" />
    </div>
  );
};

export default Dashboard;
