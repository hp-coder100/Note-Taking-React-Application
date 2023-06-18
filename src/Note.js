import React from 'react'

function Note(props) {

    const deleteNote=(e)=>{
        e.preventDefault();
        props.onDelete(props.id);
    }


  return (
    <div className='box'>
        <h3>{props.title}</h3>
        <p>{props.discription}</p>
        <button onClick={deleteNote}>Remove</button>
    </div>
  )
}

export default Note