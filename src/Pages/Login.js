import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import './Login.css';
import Page from './Page.js'
import SignUp from './SignUp';
import logindes from '../Images/Online_Shoping_13.jpg';
import Navbar from '../Components/Navbar';

const Login = () => {
    let history = useHistory();
    const [user, setUser] = useState("")
    const [userErr, setUserErr] = useState(false)
    const [password, setPassword] = useState("")
    const [passwordErr, setPasswordErr] = useState(false)

    const userHandler = (e) => {
        let item = e.target.value;
        if(item.length < 6){
            setUserErr(true)
        }else{
            setUserErr(false)
        }
        setUser(item)
    }

    const passwordHandler = (e) => {
        let item = e.target.value;
        if(item.length < 6){
            setPasswordErr(true)
        }else{
            setPasswordErr(false)
        }
        setPassword(item)
    }

    const loginHandler = (e) => {
        if(user.length < 6 || password.length < 6){
            alert("Invalid Data")
        }
        else{
            history.push('/Path');  
        }
        e.preventDefault()
    }

    return(
        <div className="login1"  style={{height:'100vh'}}>
            <Navbar/>
            <div className="container-xxl" style={{height:'90%'}}>
            <div className='row' style={{height:'100%'}}>    
            <div className='col-12 col-md-8 d-flex align-items-center justify-content-center'>
                <img src={logindes} alt="Login Page design" className="imgLogin"/>
            </div>
            <div className='col-12 col-md-4 d-flex align-items-center justify-content-center justify-content-md-start'>
                <form onSubmit={loginHandler} id='loginForm'>
                <h4 style={{color: "Grey"}}>Login Page</h4>
                    <br />
                    
                    <div className="username input-group flex-nowrap">
                        <span class="input-group-text" id="addon-wrapping">👤</span>
                        <input type="text" class="form-control" onChange={userHandler} placeholder="Username" aria-label="Username" aria-describedby="addon-wrapping"/>
                    </div>
                    {userErr ? <span>Invalid Data</span> : null}
                    <br />
                    <div className="pass input-group flex-nowrap">
                        <span class="input-group-text" id="addon-wrapping">🔑</span>
                        <input type="password" class="form-control" onChange={passwordHandler} placeholder="Password" aria-describedby="addon-wrapping"/>
                    </div>
                    {passwordErr ? <span>Invalid Data</span> : null}
                    <br />
                    <ul>
                        <li>
                            <button type="button" className="btn btn-outline-primary" onClick={()=>{history.push('/Page')}} >Submit</button> 
                        </li>
                    </ul>
                    <h5>Don't Have An Account ?</h5>
                    <Link to='/SignUp'>
                        <p className='create'>Create Your Own Account</p>
                    </Link>
                </form>
            </div>
            </div>
            </div>
        </div>
    );
}

export default Login;