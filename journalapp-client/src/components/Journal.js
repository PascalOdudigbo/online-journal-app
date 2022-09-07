import React from "react";
import {Link} from "react-router-dom";

function Journal({title, body, createdAt, updatedAt}){
    return (
        <div className="entryWrapper">
            <div className="createdAtWrapper"><p>Created At: {createdAt}</p></div>
            <div className="titleWrapper"><h2>{title}</h2></div>
            <div className="updatedAtWrapper"><p>Last Update: {updatedAt}</p></div>
            <div className="bodyWrapper"><p>{body}</p></div>
            <div className="editWrapper"><Link className={"editlink"} to={"/"}>Edit</Link></div>
            <div className="editWrapper"><Link className={"deletelink"} to={"/"}>Delete</Link></div>
        </div>
    );

}
export default Journal;