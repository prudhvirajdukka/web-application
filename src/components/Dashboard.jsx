import { Link } from 'react-router-dom';
import { FaChartLine, FaUsers, FaEnvelope } from 'react-icons/fa';

function Dashboard() {
  return (
    <div>
      <nav>
        <Link to="/dashboard">🏠 Dashboard</Link> | 
        <Link to="/profile">👤 Profile</Link> | 
        <Link to="/">🚪 Logout</Link>
      </nav>
      <h1>Welcome to Your Dashboard</h1>
      <div className="dashboard-cards">
        <div className="card">
          <FaChartLine size={32} />
          <h3>Analytics</h3>
          <p>Track your progress and activities</p>
        </div>
        <div className="card">
          <FaUsers size={32} />
          <h3>Users</h3>
          <p>Manage your network</p>
        </div>
        <div className="card">
          <FaEnvelope size={32} />
          <h3>Messages</h3>
          <p>Stay connected</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;