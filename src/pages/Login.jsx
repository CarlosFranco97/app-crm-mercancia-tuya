import { useState } from 'react';
import './Login.css'
import { useNavigate } from 'react-router-dom';
    
const Login = () => {
    const redireccion = useNavigate();
    const [formState, setFormState] = useState(
        {
            user: '',
            password: ''
        }
    ); 

    const handleChange = ({target}) => {
        const {name, value} = target;
        setFormState({
            ...formState, [name]:value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const {user, password} = formState;
        if(user === 'admin' && password === '123456'){
            redireccion('/home');
        } else {
            alert('Error de credenciales');
        }
    }

    


    return (
        <form onSubmit={(e) => handleSubmit(e)} className="login wrap">
          <div className="h1">Login</div>

          <input 
          onChange={handleChange}
            placeholder="Email" id="email" name="user" type="text"/>
          
          <input 
          onChange={handleChange}
          placeholder="Password" id="password" name="password" type="password"/>
          
          <input 
          value="Login" className="btn" type="submit"/>
        </form>
    )

}

export default Login;