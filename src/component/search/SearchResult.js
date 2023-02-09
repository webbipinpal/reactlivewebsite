import React from "react";

const SearchResult = (props) => {
    const imgsrc = `https://source.unsplash.com/800x400/?${props.name}`;
    return(
        <>
            <h2>Search Results Here</h2>
            <img src={imgsrc} alt="test image" />
        </>
    )
}

export default SearchResult;