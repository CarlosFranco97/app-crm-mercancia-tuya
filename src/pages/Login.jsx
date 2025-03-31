import { useState } from 'react';
import './Login.css'
import { data, useNavigate } from 'react-router-dom';

const Login = () => {

    const dataUsers = [
        {
            "id": 123,
            "user": "jj14",
            "email": "jose@gmail.com",
            "password": "12345678"
        },
        {
            "id": 124,
            "user": "carmen",
            "email": "carmen@gmail.com",
            "password": "12345678"
        },
        {
            "id": 125,
            "user": "rodrigo",
            "email": "rodrigo-mendez@gmail.com",
            "password": "12345678"
        },

    ]


    const redireccion = useNavigate();

    const [formState, setFormState] = useState(
        {
            email: '',
            password: ''
        }
    );

    const handleChange = ({ target }) => {
        const { name, value } = target;
        setFormState({
            ...formState, [name]: value
        });
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        const {email, password} = formState;
        if(dataUsers.some(users => users.email === email.trim() && users.password === password.trim())) {
            redireccion('/home') 
        } else {
            alert('Error en credenciales');
        } 
    }




    return (
        <form onSubmit={(e) => handleSubmit(e)} className="login wrap">
            <div className="h1">Login</div>

            <input
                onChange={handleChange}
                placeholder="Email" id="email" name="email" type="text" />

            <input
                onChange={handleChange}
                placeholder="Password" id="password" name="password" type="password" />

            <input
                value="Login" className="btn" type="submit" />
        </form>
    )

}

export default Login;