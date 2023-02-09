import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return(
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <NavLink className="navbar-brand" to="#">Navbar</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <NavLink className="nav-link" aria-current="page" to="/">Form Elements</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/news">News</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/todolist">Todo List</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/incdec">Increment Decrement</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/accordion">Accordion</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/hbkukeep">HBKU Keep</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/useeffcom">useEffect Com</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/covid19">Covid19 Data</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/axiosapi">AxiosAPI</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/user/bipin/pal">usePramas/useLocation</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/search">Search</NavLink>
                    </li>
                    
                </ul>
                </div>
            </div>
            </nav>
        </>
    )
}

export default Navbar;