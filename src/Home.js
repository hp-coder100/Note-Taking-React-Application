import React,{ useState} from 'react'
import Header from './Header'
import CreateNote from './CreateNote'
import Note from './Note'

function Home() {

    const [notes, setNotes] = useState([]);
    
    


    function addNote(newNote){
        setNotes(oldNotes=>{
            return [...oldNotes, newNote];
        });
    }

    function deleteNote(id){
        setNotes(oldNotes=>{
           return oldNotes.filter((note, serial)=>{return serial!==id});
        });
    }

  return (
    <div>
       
        <Header></Header>
        <CreateNote add={addNote}></CreateNote>
        <div className='listNotes'>
        <h3>List of Notes</h3>
        {
            notes.map((note, serial)=>{
                return (
                    <Note id={serial} key={serial} title={note.title} discription={note.discription} onDelete={deleteNote}>Hello</Note>
                )
            })
        }
        </div>
    </div>
  )
}

export default Home