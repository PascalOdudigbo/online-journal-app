import React, {useEffect, useState} from "react";
import { useNavigate, Link, Routes, Route} from "react-router-dom";
import AddEntryForm from "./AddEntryForm";
import EditEntryForm from "./EditEntryForm";
import JournalList from "./JournalList";
import NavBar from "./NavBar";


let userData = JSON.parse(localStorage.getItem("userData"));
const loginStatus = localStorage.getItem("loginStatus");

function JournalContainer(){
    const url = "http://localhost:9292";
    const history = useNavigate();
    const[allJournals, setAllJournals] = useState([]);
    const [currentItem, setCurrentItem] = useState({});


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

    function handleEntryDelete(id){
        //console.log("called deletion");
        //const targetAddressId = event.target.parentNode.parentNode.id;
        fetch(`https://fathomless-garden-99838.herokuapp.com/addresses/${id}`, {
            method: "DELETE"
        })
        // const newAddressData = addressData.filter(address=> address.id !== id);
        // setAddressData(newAddressData);
    }
    function handleEditEntry(){
        fetch(`${url}/journal-list/${userData.id}`)
        .then(response => response.json())
        .then(journals => setAllJournals(journals))
        .catch((err) => {
            console.log(err);
        })
        history("/all-journals/all-journals")

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
                    <Route path="/all-journals" element={<JournalList allJournals={allJournals} setCurrentItem={setCurrentItem} handleFilteredData={handleFilteredData} handleDelete={handleEntryDelete}/>}/>
                    <Route path="/new-journal-entry" element={<AddEntryForm handleAddEntry={handleAddEntry}/>}/>
                    <Route path="/edit-journal-entry" element={<EditEntryForm targetJournalEntry={currentItem} handleDataEdit={handleEditEntry}/>}/>

                </Routes>
                
            </div>
        )
}

export default JournalContainer;