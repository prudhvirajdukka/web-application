import { Link } from 'react-router-dom';

function Profile({ userData }) {
  return (
    <div>
      <nav>
        <Link to="/dashboard">🏠 Dashboard</Link> | 
        <Link to="/profile">👤 Profile</Link> | 
        <Link to="/">🚪 Logout</Link>
      </nav>
      <h2>User Profile</h2>
      {userData ? (
        <div>
          <img src={userData.photo} alt="Profile" style={{ width: '120px', borderRadius: '50%' }} />
          <p><strong>Name:</strong> {userData.firstName} {userData.lastName}</p>
          <p><strong>Email:</strong> {userData.email}</p>
          <p><strong>Contact:</strong> {userData.contact}</p>
          <p><strong>Address:</strong> {userData.address}</p>
          <p><strong>Gender:</strong> {userData.gender}</p>
          <p><strong>Country:</strong> {userData.country}</p>
        </div>
      ) : <p>No user data found.</p>}
    </div>
  );
}

export default Profile;