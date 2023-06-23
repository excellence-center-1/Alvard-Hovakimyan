import React from 'react';

const LoginPage = () => {
  const containerStyle = {
    background: '#fff',
    maxWidth: '350px',
    width: '100%',
    padding: '25px 30px',
    borderRadius: '5px',
    boxShadow: '0 10px 10px rgba(0, 0, 0, 0.15)',
  };

  const titleStyle = {
    fontSize: '30px',
    fontWeight: '600',
    margin: '20px 0 10px 0',
    position: 'relative',
  };

  const inputBoxStyle = {
    width: '100%',
    height: '45px',
    marginTop: '25px',
    position: 'relative',
  };

  const labelStyle = {
    marginBottom: '5px',
  };

  const inputStyle = {
    width: '100%',
    height: '100%',
    outline: 'none',
    fontSize: '16px',
    border: 'none',
    borderBottom: '2px solid #ccc',
  };

  const underlineHoverStyle = {
    content: '',
    position: 'absolute',
    height: '2px',
    width: '100%',
    background: 'linear-gradient(to right, #99004d 0%, #ff0080 100%)',
    left: '0',
    bottom: '0',
    transform: 'scaleX(0)',
    transformOrigin: 'left',
    transition: 'all 0.3s ease',
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic
  };

  return (
    <div style={containerStyle}>
      <form onSubmit={handleSubmit}>
        <div style={titleStyle}>Login Page</div>
        <div style={inputBoxStyle}>
          <label htmlFor="email" style={labelStyle}>Email:</label>
          <input type="email" id="email" required style={inputStyle} />
          <div style={underlineHoverStyle}></div>
        </div>
        <div style={inputBoxStyle}>
          <label htmlFor="password" style={labelStyle}>Password:</label>
          <input type="password" id="password" required style={inputStyle} />
          <div style={underlineHoverStyle}></div>
        </div>
        <div className="button">
          <input type="submit" value="Login" />
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
