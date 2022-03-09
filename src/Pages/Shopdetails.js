import './Shopdetails.css';
import Login from './Login';
import { Link } from 'react-router-dom';

const Shopdetails = () => {
    return ( 
        <div className="Shopdetails">
            <div id='introTop'>
                <h1>Business Vendor Credit Management System</h1>
            </div><br />
            <form action="" id='ShopdetailsForm'>
                <h4 style={{color: "Grey"}}>Shop Details</h4><br />
                    <div className="ShopName input-group flex-nowrap">
                        <span class="input-group-text" id="addon-wrapping">🏬</span>
                        <input type="text" class="form-control" placeholder="Shop Name" aria-label="Shopname" aria-describedby="addon-wrapping"/>
                    </div>
                    <div className="Locality input-group flex-nowrap">
                        <span class="input-group-text" id="addon-wrapping">🗺️</span>
                        <input type="text" class="form-control" placeholder="Locality" aria-label="Locality" aria-describedby="addon-wrapping"/>
                    </div>
                    <br /><br />
                    <div class=" address input-group">
                        <span class="input-group-text">With textarea</span>
                        <textarea class="form-control" aria-label="With textarea"></textarea>
                    </div><br />
                    
                    <div className="City input-group flex-nowrap">
                        <span class="input-group-text" id="addon-wrapping">🗺️</span>
                        <input type="text" class="form-control" placeholder="City/district" aria-label="City" aria-describedby="addon-wrapping"/>
                    </div>
                    <div className="btn-group dropend">
                        <button type="button" className="dropState btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                            State
                        </button>
                        <ul className="dropdown-menu">
                             {/* Dropdown menu links  */}
                            <li><a className="dropdown-item" href="#">Action</a></li>
                            <li><a className="dropdown-item" href="#">Another action</a></li>
                            <li><a className="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                    </div>
                    
                    <br /><br />
                    <div className="Pincode input-group flex-nowrap">
                        <span class="input-group-text" id="addon-wrapping">🗺️</span>
                        <input type="text" class="form-control" placeholder="Pincode" aria-label="pincode" aria-describedby="addon-wrapping"/>
                    </div>
                    <div className="GST input-group flex-nowrap">
                        <span class="input-group-text" id="addon-wrapping">🗺️</span>
                        <input type="text" class="form-control" placeholder="GST No" aria-label="GST" aria-describedby="addon-wrapping"/>
                    </div>
                    <ul>
                    <li>
                        <Link to='/Login'>
                            <button type="button" className="nextBtn btn btn-outline-primary">Register</button>
                        </Link>
                    </li>
                </ul>
            </form>
        </div>
     );
}
 
export default Shopdetails;