import { Link } from "react-router-dom";
import React, {useEffect, useState} from "react";
function Login(){
    return (
        <div>
            <h1>LOGIN</h1>
            <form className={"form"}>
                <input type="text" name="username" placeholder="Username"/>
                <input type="password" name="password" placeholder="Password"/>
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