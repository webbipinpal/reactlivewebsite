import React, {useState} from "react";
import SearchResult from "./SearchResult";

const Search = () =>{
    const [text, setText] = useState('')
    const inputHand = (e) => {
        const inputVal = e.target.value;
        setText(inputVal)
    }
    return(
        <div className="container pt-3 pb-3">
            <h1>Search Here</h1>
            <div className="input-group mb-3">
                <input 
                    type="text" 
                    className="form-control" 
                    placeholder="Search here"
                    value={text}
                    onChange={inputHand} 
                />
                <div className="input-group-append">
                    <button className="btn btn-outline-secondary" type="button">Search</button>
                </div>
            </div>
            {text === '' ? null : <SearchResult name={text} /> }
            
        </div>
    )
}

export default Search