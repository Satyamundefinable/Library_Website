import './UserLogin.css';

export const StudentLogin = () => {
  return (
    <div className="login-page">
      <h2>Student Login</h2>
      <form className="login-form">
        <input type="text" placeholder="Student ID" required />
        <input type="password" placeholder="Password" required />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};