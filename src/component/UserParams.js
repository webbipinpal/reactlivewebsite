import React from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";

const UserParams = () => {
    const {fname, lname} = useParams();
    const location = useLocation();
    let navigate = useNavigate();
    return(
        <>
            <div className="container">
                <h1>Welcome to our page {fname} {lname}</h1>
                <br />
                <p>My current location is {location.pathname}</p>
                { location.pathname === '/user/bipin/pal' ?
                    <button type="button" onClick={() => alert('Thanks, you are eligible')} className="btn btn-outline-primary">VIP location </button>
                : <h4>you are not eligible</h4>}
                <br />  <br /> 
                <button type="button" onClick={() => navigate(-1)} className="btn btn-outline-info">Back </button>
                
            </div>
        </>
        
    )
}

export default UserParams;