import {useState ,useContext} from 'react';
import logo from "../account/logoblog.jpg";
import "../account/login.css";
import { API } from '../../service/api.js';
import { DataContext } from '../../context/DataProvider';

import { useNavigate } from 'react-router-dom';

const loginInitialValues = {
  username: '',
  password: ''
}

const signInitialValues = {
  name: '',
  username: '',
  password: ''
}

const Login = () => {


  const [account, toggleaccount] = useState('login');
  const [signup, setsignup] = useState(signInitialValues);
  const [login, setlogin] = useState(loginInitialValues);
  const [error, seterror] = useState('');

  const { setaccount } = useContext(DataContext);
  const navigate = useNavigate();

  const toggleSignup = () =>{
    account === 'signup' ? toggleaccount('login') : toggleaccount('signup');
  }

  const onInputchange = (e) => {
    setsignup({ ...signup, [e.target.name]: e.target.value });
  }

  
  const signupUser = async () => {
    let response = await API.userSignup(signup);
    if (response.isSuccess) {
      seterror('');
      setsignup(signInitialValues);
      toggleaccount('login')
    } else {
      seterror('something went wrong! Please try again later');
    }
  }

  const onvaluechange = (e) => {
    setlogin({ ...login, [e.target.name]: e.target.value });
  }

  const loginuser = async () => {
    let response = await API.userLogin(login);
    if (response.isSuccess) {
      seterror('');

      sessionStorage.setItem('accessToken', `Bearer ${response.data.accessToken}`);
      sessionStorage.setItem('refreshToken', `Bearer ${response.data.refreshToken}`);

      setaccount({ username: response.data.username, name: response.data.name });

      navigate('/');

    } else {
      seterror('something went wrong! Please try again later');
    }
  }
  
  return (
    <>
      {
        account === 'login' ?
          <div className=" wrapper d-flex align-items-center justify-content-center w-100">
            <div className="card form">
              <img src={logo} className="card-img-top" alt="..." />
              <div className="bg-black box">
                <input type="text" class="form-control formlog" id="exampleFormControlInput1" value={login.username} placeholder="Enter username" onChange={(e) => onvaluechange(e)} name='username'/>
                <input type="password" class="form-control mt-4 formlog" id="exampleFormControlInput1" value={login.password} placeholder="Enter password" onChange={(e) => onvaluechange(e)} name='password'/>
                <button type="button" class="btn btn-outline-info d-grid mx-auto col-8 mt-4 btnlog" onClick={()=> loginuser()} >Login</button>
                <p className="d-flex justify-content-center mt-3 or " >OR</p>
                <button type="button" class="btn btn-outline-secondary d-grid mx-auto col-8 btnlog" onClick={() => toggleSignup()}>Create an account</button>
                <p className="mt-3"></p>
              </div>
            </div>
          </div>
        :
      
          <div className=" wrapper d-flex align-items-center justify-content-center w-100">
            <div className="card form">
              <img src={logo} className="card-img-top" alt="..." />
              <div className="bg-black box">
                <input type="text" class="form-control formlog "    id="exampleFormControlInput1" placeholder="Name" onChange={(e)=> onInputchange(e)} name='name'/>
                <input type="text" class="form-control mt-4 formlog "  id="exampleFormControlInput1" placeholder="Username" onChange={(e)=> onInputchange(e)} name='username' />
                <input type="password" class="form-control mt-4 formlog " id="exampleFormControlInput1" placeholder="password" onChange={(e) => onInputchange(e)} name='password' />
                {error && <p className='error'>{ error}</p>}
                <button type="button" class="btn btn-outline-info d-grid mx-auto col-8 mt-4 btnlog" onClick={()=> signupUser()}>Singup</button>
                <p className="d-flex justify-content-center mt-3 or">OR</p>
                <button type="button" class="btn btn-outline-secondary d-grid mx-auto col-8 btnlog" onClick={() => toggleSignup()} >Already have an account</button>
                <p className="mt-3"></p>
              </div>
            </div>
          </div>
      }
    </>
  );
};

export default Login;
