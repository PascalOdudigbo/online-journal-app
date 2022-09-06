import React, {useEffect, useState} from "react";
import { useNavigate, Link, Routes, Router} from "react-router-dom";

let userData = JSON.parse(localStorage.getItem("userData"));
const loginStatus = localStorage.getItem("loginStatus");
function JournalList(){
    const url = "http://localhost:9292";
    const history = useNavigate();
    const[allJournals, setAllJournals] = useState([])
    useEffect(()=>{
        if(loginStatus === "true"){
            userData = JSON.parse(localStorage.getItem("userData"));
            fetch(`${url}/journal-list/${userData.id}`)
            .then(response => response.json())
            .then(addresses => setAllJournals(addresses));
        }
        else{
            history("/")
        }
    }, [])
    
        return(
            <div>
                <h2>WELCOME {userData.username.toUpperCase()}</h2>
                <div id= "logoutContainer">
                    <Link id={"logout"} to={'/'} onClick={()=>{
                        localStorage.clear()
                        history("/")
                    }}>logout</Link>
                </div>

            </div>
        )
}

export default JournalList