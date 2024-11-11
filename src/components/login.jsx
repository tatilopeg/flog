import { useState } from 'react';
import {Link} from "react-router-dom"
import '../estilos/Login.css';

export const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Email:', email);
        console.log('Password:', password);
    };

    return (
        <div className="login-container">
            <h1>Iniciar sesión</h1>
            <form onSubmit={handleSubmit}>
                <div className="input-field">
                    <input type="email" id="email"  value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Introduce tu correo electrónico" required />
                </div>
                <div className="input-field">
                    <input type="password" id="password"  value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Introduce tu contraseña" required />
                </div>
                <button type="submit" className="login-btn">Iniciar sesión</button>
                <Link to="/Registro">
                <button type="submit" className="registro-btn">Registrarse</button>
                </Link>
            </form>
        </div>
    );
};
