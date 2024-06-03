import { useContext, useState } from 'react';
import './login.scss'
import { DarkModeContext } from '../../context/darkModeContext';
import { Brightness4, Brightness7 } from '@material-ui/icons';
import { AuthContext } from '../../context/authContext/AuthContext';
import { login } from '../../context/authContext/apiCalls';

const Login = () => {
  const { darkMode, toggle } = useContext(DarkModeContext);
  const [credentials, setCredentials] = useState({
    email: "",
    password: ""
  });
  const { isFetching, dispatch } = useContext(AuthContext);

  const handleInput = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  const handleLogin = (e) => {
    // console.log("login button pressed");
    e.preventDefault();
    if(credentials.username != "" && credentials.password != "") {
      // console.log(credentials);
      login(credentials, dispatch);
    } 
  }

  return (
    <div className='login'>
        <form>
          <div className="darkModeToggle" onClick={toggle}>
            {darkMode ? <Brightness4/> : <Brightness7 />}
          </div>
          <div className="form">
            <input type="text" placeholder='email' name="email" onChange={handleInput}/>
            <input type="password" placeholder='password' name="password" onChange={handleInput}/>
            <button onClick={handleLogin} disabled={isFetching}>Login</button>
          </div>
        </form>
    </div>
  )
}

export default Login