import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes"
import InptArea from "./InputArea"

function addNotes(noteItem) {
    return(
        <Note
            key={noteItem.id}
            title={noteItem.title}
            content={noteItem.content.substring(0, 50)}
         />
    )
}

function App(){
    return(
        <div>
            <Header />
            <InptArea />
            {notes.map(addNotes)}
            <Footer />
        </div>
    )
}

export default App;