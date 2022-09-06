import { Link, useNavigate } from "react-router-dom";
import React, {useState} from "react";
function Login(){
   
    const url = "http://localhost:9292";
    const[username, setUsername] = useState("");
    const[password, setPassword] = useState("");
    const history = useNavigate()

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
                alert("Invalid Username or Password!");
            }
            else{
                alert("Login successful!");

                localStorage.setItem("userData", JSON.stringify(userData));
                localStorage.setItem("loginStatus", JSON.stringify(true));
                history("/all-journals")

            }  
        });
    }
    return (
        <div>
            <h2>LOGIN</h2>
            <form className={"form"} onSubmit={handleOnSubmit}>
                <input type="text" name="username" placeholder="Username" value={username} required onChange={handleOnChange}/>
                <input type="password" name="password" placeholder="Password" value={password} required onChange={handleOnChange}/>
                <Link to={'forgot-password/1'}>forgot password?</Link>
                <button type="submit">Login</button>
                <div className="container">
                    <Link id="createAccount" to={'create-account'}>Create Account</Link>
                </div>
            </form>
        </div>
    );
}
export default Login