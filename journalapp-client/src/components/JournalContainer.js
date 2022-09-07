import React, {useEffect, useState} from "react";
import { useNavigate, Link, Routes, Route} from "react-router-dom";
import AddEntryForm from "./AddEntryForm";
import JournalList from "./JournalList";
import NavBar from "./NavBar";


let userData = JSON.parse(localStorage.getItem("userData"));
const loginStatus = localStorage.getItem("loginStatus");

function JournalContainer(){
    const url = "http://localhost:9292";
    const history = useNavigate();
    const[allJournals, setAllJournals] = useState([]);


    function handleFilteredData(searchData){
        if(searchData === ""){
            fetch(`${url}/journal-list/${userData.id}`)
            .then(response => response.json())
            .then(journals => setAllJournals(journals))
            .catch((err) => {
                console.log(err);
            })
        }else{
            const filteredJournals = allJournals?.filter((journal)=> journal?.title.toLowerCase().includes(searchData?.toLowerCase()));
            setAllJournals(filteredJournals);
        }
        
    }

    function handleAddEntry(newEntryData){
        setAllJournals([...allJournals, newEntryData]);
        history("all-journals");
    }


    useEffect(()=>{
        if(loginStatus === "true"){
            userData = JSON.parse(localStorage.getItem("userData"));
            fetch(`${url}/journal-list/${userData.id}`)
            .then(response => response.json())
            .then(journals => setAllJournals(journals))
            .catch((err) => {
                console.log(err);
            })
        }
        else{
            history("/");
        }
    }, [])

        return(
            <div>
                <NavBar/>
                <h2 id="welcome">WELCOME {userData.username.toUpperCase()}</h2>
                <div id= "logoutContainer">
                    <Link id={"logout"} to={'/'} onClick={()=>{
                        localStorage.clear()
                        history("/")
                    }}>logout</Link>
                </div>
                <Routes>
                    <Route path="/all-journals" element={<JournalList allJournals={allJournals} handleFilteredData={handleFilteredData}/>}/>
                    <Route path="/new-journal-entry" element={<AddEntryForm handleAddEntry={handleAddEntry}/>}/>
                </Routes>
                
            </div>
        )
}

export default JournalContainer;