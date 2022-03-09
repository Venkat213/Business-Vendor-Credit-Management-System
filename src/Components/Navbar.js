import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light sticky-top">
            <div className="container-fluid">
                <span className="navbar-brand" style={{color:'#FFF',fontWeight:'650'}}>
                    BVCMS
                </span>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex align-items-center justify-content-end" style={{width:'100%'}}>
                        <li className="nav-item">
                            <span className="nav-link active" aria-current="page" href="#">
                                Home
                            </span> 
                        </li>
                        <li className="nav-item">
                            <span className="nav-link" href="#">
                                Link
                            </span> 
                        </li>
                        <li className="nav-item dropdown">
                            <span
                                className="nav-link dropdown-toggle"
                                href="#"
                                id="navbarDropdown"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                Dropdown
                            </span> 
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li>
                                    <span className="dropdown-item" href="#">
                                        Action
                                    </span> 
                                </li>
                                <li>
                                    <span className="dropdown-item" href="#">
                                        Another action
                                    </span> 
                                </li>
                                <li>
                                    <hr className="dropdown-divider" />
                                </li>
                                <li>
                                    <span className="dropdown-item" href="#">
                                        Something else here
                                    </span> 
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <span className="nav-link disabled">Disabled</span> 
                        </li>
                    </ul>
                    <form className="d-flex">
                        
                    </form>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
