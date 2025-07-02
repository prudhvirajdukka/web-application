import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    navigate('/dashboard');
  };

  return (
    <form onSubmit={handleLogin} aria-label="Login Form">
      <h2>Login</h2>
      <label>Email:
        <input type="email" required />
      </label>
      <label>Password:
        <input type="password" required />
      </label>
      <button type="submit">Login</button>
      <p>Don't have an account? <a href="/signup">Sign up</a></p>
    </form>
  );
}

export default Login;