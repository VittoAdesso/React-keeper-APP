import React, {useState} from 'react';
import Note from '../Note/Note';
import CreateArea from '../CreateArea/CreateArea';



export default function NoteContainer() {
    
    const [notes, setNotes] = useState([]); 

    const addNote = (newNote) => {

            setNotes((prevNotes) => {
                return [ ...prevNotes, newNote]

            })
    }

  return (<div>

        <CreateArea addNote={addNote}/>
        {/* 
        mapeo mi nota, para que cada vez que haga una me cree listado */}
        {notes.map((note, index)=> {
            return(
             
                <Note 
                    key={index}
                    id={index}
                    title={note.title}
                    content={note.title}
                />
            ); 
       })}

  </div>);
}
