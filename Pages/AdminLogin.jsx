import './UserLogin.css';

export const AdminLogin = () => {
  return (
    <div className="login-page">
      <h2>Admin Login</h2>
      <form className="login-form">
        <input type="text" placeholder="Admin Username" required />
        <input type="password" placeholder="Password" required />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};