import React from "react";
import Journal from "./Journal"
import Search from "./Search";

function JournalList({allJournals, handleFilteredData}){
        return(
                <div className="jContainer">
                    <Search allJournals={allJournals} handleSearchData={handleFilteredData} />
                    <h4>All Journal Entries</h4>

                    {/* {
                        allJournals?.map((journal)=> <Journal
                            key={journal.id} 
                            title={journal.title}
                            body={journal.body}
                            createdAt={journal.created_at.slice(0, 10)}
                            updatedAt={journal.updated_at.slice(0, 10)}
                            ></Journal>
                        )
                    } */}
                </div>
        )
}

export default JournalList