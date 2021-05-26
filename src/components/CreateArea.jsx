import React from "react"


function CreateArea(props)
{

    const [note, setNote] = React.useState({
        title: "",
        content: ""
    });

    function handleChange(event)
    {
        const {name , value} = event.target;
        
        setNote(prevalue => {
            return{
                ...prevalue,
               [name]: value
            };
        });
    }

    function submitNote(event)
    {
        if(!(note.title === "" && note.content ===""))
        {
            props.onAdd(note);
            console.log("added");
        }

        setNote({
            title: "",
            content: ""
        });
        
        event.preventDefault();
    }

    return(
        <div className="createnote">
        <form>
            <input name="title" 
            onChange = {handleChange}
            value={note.title} 
            placeholder="Title"
            />

            <textarea 
            name="content" 
            onChange = {handleChange}
            value={note.content} 
            placeholder="Write a note..." 
            rows="2"
            />
            <button className="addButton" onClick={submitNote}>Add</button>
        </form>
    </div>
    );
}

export default CreateArea;