import React, { useState } from "react";


const CreateNote = (props) => {
    const [note, setNote] = useState({
        title:'',
        content:''
    })
    const [extent, setExtent] = useState(false);
    const inputEvent = (e) => {
        // const value = e.target.value;
        // const name = e.target.name;
        const {name, value} = e.target;
        setNote((prevData) => {
            return {
                ...prevData,
                // title: value.title,
                // content: value.content
                [name]:value
            }
        })
    }

    const addEvent = () => {
        props.proNote(note);
        setNote({
            title:'',
            content:''
        })
    }
    return(
        <>
            <div className="createnote">
                <form>
                    {extent ? 
                    <input 
                        type="text" 
                        placeholder="Title" 
                        autoComplete="off" 
                        value={note.title}
                        name='title'
                        onChange={inputEvent}
                        /> : null }
                    <textarea 
                        rows="4" 
                        placeholder="Write a note"
                        value={note.content}
                        name='content'
                        onChange={inputEvent}
                        onClick={() => setExtent(true)}
                        ></textarea>
                        {extent ? 
                        <button onClick={addEvent} type="button" className="btn addnote"> <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-plus-circle-fill" viewBox="0 0 16 16">
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z"/>
                      </svg></button>
                        : null }
                    
                </form>
            </div>
        </>
    )
}

export default CreateNote;