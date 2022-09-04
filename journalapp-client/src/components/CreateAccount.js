import React from "react";

function CreateAccount(){
    return (
        <div>
            <h1>CREATE ACCOUNT</h1>
            <form className="form">
                <input type={"text"} name="username" placeholder="Username"/>
                <input type={"email"} name="email" placeholder="Email"/>
                <input type={"text"} name="recoveryQuestion" placeholder="Recovery Question"/>
                <input type={"text"} name="recoveryQuestionAnswer" placeholder="Answer"/>
                <input type={"password"} name="password" placeholder="Password"/>
                <button type="submit">Submit</button> 
            </form>
        </div>
    );
}

export default CreateAccount;