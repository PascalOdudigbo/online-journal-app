import { Link } from "react-router-dom";
import React, {useEffect, useState} from "react";
function Login(){
    const[username, setUsername] = useState("");
    const[password, setPassword] = useState("");
    return (
        <div>
            <h1>LOGIN</h1>
            <form className={"form"}>
                <input type="text" name="username" placeholder="Username" onChange={handleOnChange}/>
                <input type="password" name="password" placeholder="Password" onChange={handleOnChange}/>
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