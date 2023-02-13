import React from "react";

const TodoNewList = (props) => {
    const deleteList = () => {
        props.deleteItem(props.id)
    }
    return(
        <>
            <div className='eachItem' id={props.id}>
                <h3>{props.item}</h3>
                <i className="bi bi-pencil-square edit"></i>
                <i className="bi bi-trash" onClick={deleteList}></i>
            </div>
        </>
    )
}

export default TodoNewList;