import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes"

function addNotes(keeperNote) {
    return(
        <Note
            key={keeperNote.id}
            title={keeperNote.title}
            content={keeperNote.content.substring(0, 50)}
         />
    )
}

function App(){
    return(
        <div>
            <Header />
            {notes.map(addNotes)}
            <Footer />
        </div>
    )
}

export default App;