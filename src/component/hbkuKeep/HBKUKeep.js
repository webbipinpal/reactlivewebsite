import React, { useState } from 'react';
import CreateNote from './CreateNote';
import './HBKUKeep.css'
import Note from './Note';

const HBKUKeep = () => {
    const [addItem, setAddItem] = useState([]);

    const addNoteList = (note) => {
        setAddItem((prevData) => {
            return [...prevData, note]
        })
    }
    const onDelete = (id) => {
        setAddItem((oldData) => 
        oldData.filter((currData, indx) => {
            return indx !== id;
        })
        )
    }
    return(
        <>
        <div className='container'>
            <div className='row'>
                <div className='col-md-24' style={{marginTop:'50px', marginBottom:'50px'}}>
                    <CreateNote proNote={addNoteList} />
                    <div className='d-flex align-content-around flex-wrap'>
                        {addItem.map((val, i) => {
                            return <Note 
                            id={i}
                            key={i}
                            title={val.title}
                            content={val.content}
                            deleteItem={onDelete}
                            />
                        })}
                    </div>
                    
                    
                </div>
            </div>
        </div>
        </>
    )
}

export default HBKUKeep;