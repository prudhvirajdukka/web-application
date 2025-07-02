import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Signup({ setUserData }) {
  const navigate = useNavigate();
  const [photoPreview, setPhotoPreview] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const user = Object.fromEntries(formData.entries());
    user.photo = photoPreview;

    setUserData(user);
    navigate('/profile');
  };

  return (
    <form onSubmit={handleSubmit} aria-label="Signup Form">
      <h2>Signup</h2>
      <label>First Name:
        <input type="text" name="firstName" required />
      </label>
      <label>Last Name:
        <input type="text" name="lastName" required />
      </label>
      <label>Email:
        <input type="email" name="email" required />
      </label>
      <label>Password:
        <input type="password" name="password" pattern=".{6,}" title="6 characters minimum" required />
      </label>
      <label>Contact Number:
        <input type="tel" name="contact" pattern="[0-9]{10}" title="Enter a 10-digit number" required />
      </label>
      <label>Address:
        <textarea name="address" required></textarea>
      </label>
      <label>Gender:
        <label><input type="radio" name="gender" value="Male" required /> Male</label>
        <label><input type="radio" name="gender" value="Female" /> Female</label>
      </label>
      <label>Country:
        <select name="country" required>
          <option value="">Select</option>
          <option value="India">India</option>
          <option value="USA">USA</option>
        </select>
      </label>
      <label>Upload Photo:
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setPhotoPreview(URL.createObjectURL(e.target.files[0]))}
          required
        />
      </label>
      {photoPreview && <img src={photoPreview} alt="Preview" style={{ width: '100px', marginTop: '1rem' }} />}
      <button type="submit">Create Account</button>
    </form>
  );
}

export default Signup;