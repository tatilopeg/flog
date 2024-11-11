import { useState } from 'react';
import '../estilos/Registro.css';
import {Link} from "react-router-dom"

export const Registro = () => {
  const [email, setCorreo] = useState('');
  const [nombre, setNombre] = useState('');
  const [edad, setEdad] = useState('');
  const [estatura, setEstatura] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Las contraseñas no coinciden');
    } else {
      alert('Registro exitoso');
    }
  };

  return (
    <div className="form-container">
    <h1 className="form-title">Registro</h1>
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <input type="email" id="email" value={email} onChange={(e) => setCorreo(e.target.value)} className="form-input" placeholder="Introduce tu correo electrónico" required/>
      </div>

      <div className="form-group">
        <input type="text" id="nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} className="form-input" placeholder="Introduce tu nombre completo" required/>
      </div>

      <div className="form-group">
        <input type="number" id="edad" value={edad} onChange={(e) => setEdad(e.target.value)} className="form-input" placeholder="Introduce tu edad" required/>
      </div>

      <div className="form-group">
        <input type="number" id="estatura" value={estatura} onChange={(e) => setEstatura(e.target.value)} className="form-input" placeholder="Introduce tu estatura en metros" required/>
      </div>

      <div className="form-group">
        <input type="password" id="contraseña" value={password} onChange={(e) => setPassword(e.target.value)} className="form-input" placeholder="Crea una contraseña segura" required/>
      </div>

      <div className="form-group">
        <input type="password" id="contraseñaConfirmada" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} className="form-input" placeholder="Confirma tu contraseña" required/>
      </div>

      <button type="submit" className="form-button">Registrarse</button>

      <Link to="/login">
      <button type="submit" className="form-button">Iniciar sesión</button>
      </Link>
    </form>
  </div>
);
};