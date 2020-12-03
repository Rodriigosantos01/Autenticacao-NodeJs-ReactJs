import { useState } from "react";
import axios from 'axios';
import { Redirect } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [token, setToken] = useState(sessionStorage.getItem('token') ?? false);

    const handleEmail = (e) => {
        setEmail(e.target.value)
    }

    const handlePassword = (e) => {
        setPassword(e.target.value)
    }

    const submitForm = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3001/auth/authenticate', {
                email,
                password
            });
            if (response.status === 200) {
                sessionStorage.setItem('token', response.data.token);
                setToken(response.data.token)
            }

        } catch (error) {
            console.error(error);
        }
    }

    return (
        <>
            {token ? <Redirect to={{ pathname: '/app' }} /> : ''}
            <div className="container">
                <div className="row">
                    <div className="col-md-6 offset-md-3">
                        <div className="col-md-12 mt-5">
                            <form onSubmit={submitForm}>
                                <div className="form-group">
                                    <label htmlFor="email">Email</label>
                                    <input type="email" className="form-control" id="email" pattern="[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}" value={email} onChange={handleEmail} required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="password">Senha</label>
                                    {/* pattern="[a-z]{3,}[0-9]{3,}[!@#$%*()_]{1}" */}
                                    <input type="password" className="form-control" id="password" value={password}
                                        title="A senha deve ter no minimo (3 letras, 3 numeros, 1 caracter especial)"
                                        onChange={handlePassword} required />
                                </div>
                                <button type="submit" className="btn btn-primary btn-lg btn-block">Enviar</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login;