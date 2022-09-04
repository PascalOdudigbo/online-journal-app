import React, {useEffect, useState} from "react";
function Login(){
    return (
        <div>
            <form className={"form"}>
                <input type="text" name="username"/>
                <input type="password" name="password"/>
                <button type="submit">Login</button>
            </form>
        </div>
    );
}
export default Login