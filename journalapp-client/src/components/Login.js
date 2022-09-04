import { Link } from "react-router-dom";
import React, {useEffect, useState} from "react";
function Login(){
    return (
        <div>
            <form className={"form"}>
                <input type="text" name="username"/>
                <input type="password" name="password"/>
                <Link to={'forgot-password'}>forgot password?</Link>
                <button type="submit">Login</button>
                <Link to={'signup'}>Create Account</Link>
            </form>
        </div>
    );
}
export default Login