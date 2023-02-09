import React from "react";

const TodoListIist = (props) => {
    return(
        <li onClick={() => {return props.deleteItem(props.id)}} id={props.id}>{props.item} <span className="close">×</span></li>
    )
}

export default TodoListIist;