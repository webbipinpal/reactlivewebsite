import React, {useState} from 'react';
import '../assets/css/todolist.css'
import TodoListIist from './TodoListIist';

const TodoList = () => {
    const [inList, setInList] = useState('');
    const [items, setItems] = useState([]);
    
    const inHandler = (e) => {
        const inVal = e.target.value;
        setInList(inVal);
    }
    const addListHandler = () => {
        console.log('hi')
        setItems((olditems) => {
            return(
                [...olditems, inList]
            )
        })
        setInList('')
    }
    const deleteItem = (id) => {
        setItems((olditems) => {
            return(
                olditems.filter((arrElement, i) =>{
                    return i !== id;
                })
            )
        })
    }
    return(
        <div className='container'>
            <div className='row'>
                <div className='col-md-48 todolist'>
                <div id="myDIV" className="header">
                    <h2 style={{marginBottom:'20px'}}>My To Do List</h2>
                    <input type="text" value={inList} placeholder="Title..." onChange={inHandler} />
                    <span onClick={addListHandler} className="addBtn">Add</span>
                    </div>

                    <ul>
                        {items.map((item, i) => {
                            return(
                               <TodoListIist deleteItem={deleteItem} id={i} item={item} key={i} />
                            )
                        })}
                    </ul>
                </div>
            </div>
            
        </div>
    )
}

export default TodoList;