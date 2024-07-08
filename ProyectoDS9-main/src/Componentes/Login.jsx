import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');
  const history = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const response = await fetch('http://localhost:5000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      const data = await response.json();
      if (response.ok) {
        console.log('Success:', data);
        history.push('/dashboard'); 
      } else {
        // Manejar errores de autenticación
        setError(data.message);
      }
    } catch (error) {
      console.error('Error:', error);
      setError('Error en el inicio de sesión. Por favor, intenta nuevamente.');
    }
  };

  return (
    <div className="login-form">
      <h2>Iniciar Sesión</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Correo Electrónico:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Contraseña:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <Link to="/ForgotPassword" className="forgot-password-link">
          ¿Olvidaste tu contraseña?
        </Link>
        {error && <p className="error-message">{error}</p>}
        <button type="submit">Iniciar Sesión </button>
        <span className="register-message">¿No estás registrado? <Link to="/registro">Regístrate</Link></span>
      </form>
    </div>
  );
};

export default LoginForm;