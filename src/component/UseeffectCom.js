import React, { useEffect, useState } from "react";

const UseeffectCom = () =>{
    const [num, setNum] = useState(0);
    const [nums, setNums] = useState(0);

    useEffect(() => {
        console.log('clicked')
        document.title = 'You clicked me ' + num;
    }, [num])

    return(
        <div className="container">
            <button type="button" className="btn btn-primary"
            onClick={() => setNum(num+1)}
            >Click me {num}</button> <br /> <br />
            <button type="button" className="btn btn-primary"
            onClick={() => setNums(nums+1)}
            >Click me {nums}</button>
        </div>
    )
}

export default UseeffectCom;