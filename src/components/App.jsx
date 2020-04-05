import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import InptArea from "./InputArea"



function App(){
    const [notes, addKeepNotes] = useState([]);
    function addNote(keep){
        addKeepNotes(prevValue => {
            return [...prevValue, keep]
        }) 
    }
function deleteNotes(id){
    addKeepNotes(prevValue => {
        return prevValue.filter((item, index) => {
            return index !== id;
        })
    })
}
    return(
        <div>
            <Header />
            <InptArea
            onAdd={addNote} />
            {notes.map((note, index) => {
                return <Note
                title={note.title}
                key={index}
                id={index}
                content={note.content}
                onDelete={deleteNotes} />
            })}
            
            <Footer />
        </div>
    )
}

export default App;