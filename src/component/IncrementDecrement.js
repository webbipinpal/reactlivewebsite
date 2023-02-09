import React, { useState } from 'react';


const IncrementDecrement = () => {
    const [count, setCount] = useState(0);

    const IncrementHand = () => {
        setCount(count + 1)
    }
    const DecrementHand = () => {
        
        if(count <= 0){
            alert('you reached on min count')
        }else{
            setCount(count - 1)
        }
    }

    return(
        <div className='container'>
            <h1>Increment and Decrement</h1>
            <br />
            <div className="idcontainer">

                <h2 className='mb-3 pb-3 text-center'>{count}</h2>
                <div className='group-btn d-flex justify-content-between'>
                <button onClick={IncrementHand} type="button" className="btn btn-outline-success">Increment</button>
                <button onClick={DecrementHand} type="button" className="btn btn-outline-primary right">Decrement</button>
                </div>
            </div>
        </div>
    )
}

export default IncrementDecrement;