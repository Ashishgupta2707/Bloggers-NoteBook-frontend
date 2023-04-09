import "../header/header.css";
import logo from "../account/logoblog.jpg";
import { Link } from "react-router-dom";
// import { categories } from "../../constants/data";

const Header = () => {

   

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark " >
                <div className="container-fluid">
                    <a className="navbar-brand mx-4" href="/"><img className="homelogo" src={logo} alt="" /></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    
                    <div className="collapse navbar-collapse " id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                        <a className="nav-link active mx-4 text1" aria-current="page" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link mx-4 text1" href="/">About</a>
                        </li>
                        <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle mx-4 text1" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Discover me
                        </a>
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="/"><Link to='/'>All Categories</Link></a></li>
                             {/* <li><a className="dropdown-item" href="/">Another action</a></li>  */}
                            <li><hr className="dropdown-divider"/></li>
                            <li className="dropdown-item"><Link to={`/?category=Tech`}>Tech</Link></li>
                            <li className="dropdown-item"><Link to={`/?category=Music`}>Music</Link></li>
                            <li className="dropdown-item"><Link to={`/?category=Movie`}>Movie</Link></li>
                            <li className="dropdown-item"><Link to={`/?category=Sport`}>Sport</Link></li>
                            <li className="dropdown-item"><Link to={`/?category=Fashion`}>Fashion</Link></li>
                            
                        </ul>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link mx-4 text1" href="/">About Us</a>
                        </li>
                        
                    </ul>
                    <form className="d-flex" role="search">
                        <input className="form-control mx-2 searchbox " type="search" placeholder="Search" aria-label="Search"/>
                        <button className="btn btn-outline-success homesearch mx-2" type="submit">Search</button>
                        
                    </form>
                        <div className="mx-2 my-2">
                        <Link to='/login'><button className="btn btn-outline-danger homelogout" type="submit">LOGOUT</button></Link>
                        </div>    
                    </div>
                </div>
                </nav>
        </>
    )
}
export default Header;