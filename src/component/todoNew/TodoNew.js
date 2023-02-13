import React, {useState} from 'react';
import todoImage from '../../assets/images/card-checklist.svg'
import TodoNewList from './TodoNewList';

const TodoNew = () => {
    const [text, setText] = useState('');
    const [item, setItem] = useState([]);
    const inputHand = (e) =>{
        setText(e.target.value);
    }
    const addItem = () => {
        if(!text){

        }else{
            setItem((olddata) => {
                const allTextData = {
                    id: new Date().getTime().toString(),
                    name:text
                }
                console.log(allTextData)
                return(
                    [...olddata, allTextData]
                )
                
            })
        }
        setText('')
    }
    const deleteItem = (ind) => {
        setItem((olddata) => {
            return olddata.filter((item) => ind !== item.id)
        })
    }
    const deleteAll = () => {
        console.log('delete all')
        setItem([])
    }
    return(
        <div className='container'>
            <div className='mainDiv'>
                <div className='childDiv'>
                    <div className='imageItem'>
                        <figure>
                            <img src={todoImage} alt='Todo list image' width={100} height={100} />
                            <figcaption>Add Todo List </figcaption>
                        </figure>
                        <div className='addItems'>
                            <input 
                            type="text" 
                            placeholder='Add Item ...'
                            onChange={inputHand}
                            value={text}

                            />
                            <span onClick={addItem} className='plutIcon'><i className="bi bi-plus"></i></span>
                        </div>
                        <div className='showItem'>
                            {item.map((item) => {
                               return <TodoNewList item={item.name} key={item.id} id={item.id} deleteItem={deleteItem} />
                            })}
                            
                        </div>
                        <div className='removeBtn pt-3'>
                            <button type='button' onClick={deleteAll} className="btn btn-outline-danger">Remove All</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TodoNew;