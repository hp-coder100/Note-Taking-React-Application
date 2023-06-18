
import React, { useState } from 'react'

function CreateNote(prop) {
    const [note, setNote]= useState({
        title:'',
        discription:''
    });

    const handleChange=(e)=>{
        
        e.preventDefault();
        const {name, value} = e.target;
        setNote(note=>{
            return {...note, 
            [name]:value
            }
        });
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        if(note.title==='' || note.discription==='')
            alert('Both Fields are Mandatory for a Note.');
        else{    
           
            prop.add(note);
            setNote(note=>{
                return {
                title:'',
                discription:''
                }
            })
        }
    }

  return (
    <div>
        <form>
            <input type="text" 
                name="title"
                placeholder="Note Title"
                onChange={handleChange}
                value={note.title}
                ></input>
            <input type="textarea"
                name="discription"
                placeholder='Write Discription for Note'
                onChange={handleChange}
                value={note.discription}
                ></input>

            <button type="submit" onClick={handleSubmit}>Add</button>    
        </form>
    </div>
  )
}

export default CreateNote