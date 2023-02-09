import React from "react";
import Navbar from './Navbar'
import Footer from './Footer'

const Layout = (props) => {
    return(
        <>
        <Navbar />
        <div className="mt-3 mb-3">
            {props.children}
        </div>
        <Footer />
        </>
       
    )
}

export default Layout;