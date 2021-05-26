import React from "react"
import Header from "./Header"
import Footer from "./Footer"
import Note from "./Note"
// import notes from "../notes"
import CreateArea from "./CreateArea"



function App()
{
    const [notes, setNotes] = React.useState([]);

    function addNewNote(newNote)
    {
        setNotes(prevalue => {
            return [...prevalue, newNote];
        });  
    }

    function createNotes(noteItem, idx)
    {
        return <Note key={idx} id={idx}  title={noteItem.title} content={noteItem.content} onDelete={deleteNote}/>;
    }

    function deleteNote(id)
    {
        console.log("delete was triggered");
        setNotes(prevalue => {
            return prevalue.filter((noteItem, idx) =>{
                return idx !==id;
            });
        });
    }
    return(
        <div>
            <Header />
           
            <CreateArea 
                onAdd={addNewNote}
            />
                  
            {notes.map(createNotes)}
            
            <Footer />             
        </div>
    );
}
     
export default App;