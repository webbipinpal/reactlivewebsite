import React, { useContext } from "react";
import ContC from "./ContC";
import { FirstName } from "../../App";


const ContB = () => {
    const fname = useContext(FirstName);
    return(
        <>
        <h1>{fname}</h1>
        <ContC />
        </>
    )
}
export default ContB;