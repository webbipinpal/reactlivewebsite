import React from "react";
import { FirstName, LastName } from "../../App";

const ContC = () => {
    return(
        <>
        <FirstName.Consumer>
            {(fname) => {
                return <LastName.Consumer>
                    {(lname) => {
                        return <h1>My Name: {fname} {lname}</h1>
                    }}
                </LastName.Consumer>
            }}
        </FirstName.Consumer>
            
        </>
    )
}
export default ContC;