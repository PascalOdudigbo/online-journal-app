import React from "react";
import Journal from "./Journal"
import Search from "./Search";
import {Link} from "react-router-dom";

function JournalList({allJournals, setCurrentItem, handleFilteredData, handleDelete}){
        return(
                <div className="jContainer">
                    <Search allJournals={allJournals} handleSearchData={handleFilteredData} />
                    <h4>All Journal Entries</h4>

                    {
                        allJournals?.map((journal)=> <Journal
                            key={journal.id} 
                            title={journal.title}
                            body={journal.body}
                            createdAt={journal.created_at.slice(0, 10)}
                            updatedAt={journal.updated_at.slice(0, 10)}
                            editlink= {<Link className={"editlink"} to={'/all-journals/edit-journal-entry'}  onClick={()=>setCurrentItem(journal)}>Edit</Link>}
                            deletelink={<button className={"deletebutton"} onClick={()=>{handleDelete(journal.id)}}>Delete</button>}
                            ></Journal>
                        )
                    }
                </div>
        )
}

export default JournalList