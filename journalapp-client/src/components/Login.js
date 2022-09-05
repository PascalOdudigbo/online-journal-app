import { Link } from "react-router-dom";
import React, {useEffect, useState} from "react";
import Alert from "./Alert";
function Login(){
   
    const url = "http://localhost:9292";
    const[username, setUsername] = useState("");
    const[password, setPassword] = useState("");
    //const[userData, setUserData] = useState({});
    //const[loginStatus, setLoginStatus] = useState(false);

    function handleOnChange(event){
        if (event.target.name === "username")
            setUsername(event.target.value);
        else{
            setPassword(event.target.value);
        }
    }

    function handleOnSubmit(event){

        const loginData = {
            username: username,
            password: password
        }

        event.preventDefault()
        fetch(`${url}/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            }, 
            body: JSON.stringify(loginData)
        })
        .then(response => response.json())
        .then(userData => {
            console.log(userData)
            if(Object.values(userData)[0] === "Invalid Username or Password"){

                //<Alert type="error" message="Invalid Username or Password"/>
                alert("Invalid Username or Password!");
            }
            else{

                //<Alert type="success" message="Login successfully"/> 
                alert("Login successful!");

                localStorage.setItem("loginData", JSON.stringify(userData));
                //setLoginStatus(true);
                localStorage.setItem("loginStatus", JSON.stringify(true));

                //console.log(JSON.parse(localStorage.getItem("loginData")).username)
            }  
        });
    }
    return (
        <div>
            <h1>LOGIN</h1>
            <form className={"form"} onSubmit={handleOnSubmit}>
                <input type="text" name="username" placeholder="Username" value={username} onChange={handleOnChange}/>
                <input type="password" name="password" placeholder="Password" value={password} onChange={handleOnChange}/>
                <Link to={'forgot-password'}>forgot password?</Link>
                <button type="submit">Login</button>
                <div className="container">
                    <Link id="createAccount" to={'create-account'}>Create Account</Link>
                </div>
            </form>
        </div>
    );
}
export default Login