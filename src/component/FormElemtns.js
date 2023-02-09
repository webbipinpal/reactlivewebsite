import React, { useState } from "react";

const FormElements = () => {
    const [val, setVal] = useState({
        fname: '',
        lname: '',
        femail: ''
    });
    const onchangeHandler = (e) => {
        // console.log(e.target.value)
        // console.log(e.target.name)
        // const value = e.target.value;
        // const name = e.target.name;

        const {name, value} = e.target;

        setVal((prev) => {
            return{
                ...prev,
                [name]: value
                
            }
            // if(name === 'fname'){
            //     return{
            //         fname: value,
            //         lname: prev.lname,
            //         femail: prev.lname
            //     }
            // }else if(name === 'lname'){
            //     return{
            //         fname:prev.fname ,
            //         lname: value,
            //         femail: prev.femail
            //     }
            // }else if(name === 'femail'){
            //     return{
            //         fname: prev.fname,
            //         lname: prev.lname,
            //         femail: value
            //     }
            // }
        })
        
    }
    console.log(val)

    const onSubmitHander = (e) => {
        e.preventDefault()
        console.log('submit');
    }

    return(
        <div className="container">
            <form onSubmit={onSubmitHander}>
                <div className="form-group">
                    <label>First Name</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        placeholder="First Name"
                        name="fname"
                        value={val.fname}
                        onChange={onchangeHandler} 
                        />
                </div>
                <div className="form-group">
                    <label>Last Name</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        placeholder="Last Name"
                        name="lname"
                        value={val.lname}
                        onChange={onchangeHandler} 
                    />
                </div>
                <div className="form-group">
                    <label>Email</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        placeholder="Email"
                        name="femail"
                        value={val.femail}
                        onChange={onchangeHandler} 
                    />
                </div>
                <button type="submit" className="btn btn-primary">Submit Form</button>
            </form>

        </div>
    )
}

export default FormElements;