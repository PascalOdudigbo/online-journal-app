import React from "react";
import Journal from "./Journal"
import Search from "./Search";

function JournalList({allJournals, handleFilteredData}){
    console.log(typeof allJournals[0]?.created_at)
        return(
                <div>
                    <Search allJournals={allJournals} handleSearchData={handleFilteredData} />
                    <h2>All Journal Entries</h2>

                    {
                        allJournals?.map((journal)=> <Journal
                            key={journal.id} 
                            title={journal.title}
                            body={journal.body}
                            createdAt={journal.created_at.slice(0, 10)}
                            updatedAt={journal.updated_at.slice(0, 10)}
                            ></Journal>
                        )
                    }
                </div>
        )
}

export default JournalList