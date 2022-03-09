import './SignUp.css';
import { Link } from 'react-router-dom';

const SignUp = () => {
    return ( 
        <div className="SignUp">
            <div id='introTop'>
                <h1>Business Vendor Credit Management System</h1>
            </div><br />

            <form action="" id='SignUpForm'>
            <h4 style={{color: "Grey"}}>Create Your Own Account</h4>
                <br />
                <div className="firstName input-group flex-nowrap">
                    <span class="input-group-text" id="addon-wrapping">👤</span>
                    <input type="text" class="form-control" placeholder="Firstname" aria-label="Username" aria-describedby="addon-wrapping"/>
                </div>
                <div className="LastName input-group flex-nowrap">
                    <span class="input-group-text" id="addon-wrapping">👤</span>
                    <input type="text" class="form-control" placeholder="Lastname" aria-label="Username" aria-describedby="addon-wrapping"/>
                </div><br /><br />
                <div className="email input-group flex-nowrap">
                    <span class="input-group-text" id="addon-wrapping">✉️</span>
                    <input type="email" class="form-control" placeholder="Email Address" aria-label="emailHelp" aria-describedby="addon-wrapping"/>
                </div>
                <div className="number input-group flex-nowrap">
                    <span class="input-group-text" id="addon-wrapping">📲</span>
                    <input type="tel" class="form-control" placeholder="Mobile Number" aria-describedby="addon-wrapping"/>
                </div><br /><br />
                <div className="password input-group flex-nowrap">
                    <span class="input-group-text" id="addon-wrapping">🔑</span>
                    <input type="password" class="form-control" placeholder="Password" aria-describedby="addon-wrapping"/>
                </div>
                <div className="Confirm-password input-group flex-nowrap">
                    <span class="input-group-text" id="addon-wrapping">🔑</span>
                    <input type="password" class="form-control" placeholder="Confirm Password" aria-describedby="addon-wrapping"/>
                </div>
                <ul>
                    <li>
                        <Link to='/Shopdetails'>
                            <button type="button" className="nextBtn btn btn-outline-primary">Next Page</button>
                        </Link>
                    </li>
                </ul>
            </form>
        </div>
     );
}
 
export default SignUp;