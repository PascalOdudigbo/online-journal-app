import React, { useState } from "react";

let userData = JSON.parse(localStorage.getItem("userData"));
function EditEntryForm({targetJournalEntry, handleDataEdit}) {
    
    const url = "http://localhost:9292";
    const[title, setTitle] = useState(targetJournalEntry?.title);
    const[body, setBody] = useState(targetJournalEntry?.body);
    
    function handleOnChange(event){
        if(event.target.name === "title"){
            setTitle(event.target.value);
        }
        else{
        setBody(event.target.value);
        }  
       
    }

    function handleOnSubmit(event){
        event.preventDefault();
        const editedData = {
            title: title,
            body: body,
            user_id: userData.id
        } 
        fetch(`${url}/edit-entry/${targetJournalEntry.id}`, {
            method: "PUT",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify(editedData)
        })
        .then(response=>response.json())
        .then(()=> handleDataEdit());
    }
    return (
    <div className="ui segment">
        <h2>EDIT {title.toUpperCase()}'s DETAILS</h2>
        <form className={"form"} onSubmit={handleOnSubmit}>
            <input type="text" name="title" placeholder="Title" value={title} onChange={handleOnChange}/>
            <textarea rows = "25" cols = "60" name = "body" value={body} onChange={handleOnChange}/>
            <button className="ui button" type="submit">
                Edit Entry
            </button>
        </form>
    </div>
    );
}

export default EditEntryForm;
