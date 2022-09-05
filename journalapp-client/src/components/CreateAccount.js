import React, {useState} from "react";
//import {useNavigate} from "react-router-dom";
import Alert from "./Alert";

function CreateAccount(){
    const url = "http://localhost:9292";
    //const history = useNavigate();

    const[username, setUsername] = useState("");
    const[email, setEmail] = useState("");
    const[recoveryQuestion, setRecoveryQuestion] = useState("");
    const[answer, setAnswer] = useState("");
    const[password, setPassword] = useState("");

    function handleOnChange(event){
        if(event.target.name === "username"){
            setUsername(event.target.value);
        }
        else if (event.target.name === "email"){
            setEmail(event.target.value);
        }
        else if (event.target.name === "recoveryQuestion"){
            setRecoveryQuestion(event.target.value);
        }
        else if (event.target.name === "recoveryQuestionAnswer"){
            setAnswer(event.target.value);
        }
        else{
            setPassword(event.target.value);
        }  
      }

    function handleCreateAccountAlert(responseData = {}){
        if(Object.values(responseData)[0] === "User already Exists"){
            <Alert type="error" message="User email already exists, please Login!"/>
            
        }
        else{
            <Alert type="success" message="Account Created successfully"/>
            
        }
    }

    function handleCreateAccount(e){
        e.preventDefault()
        const newUser = {
            username: username,
            email: email,
            recovery_question: recoveryQuestion.toLowerCase(),
            answer: answer.toLowerCase(), 
            password: password
        }
        fetch(`${url}/createaccount`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            }, 
            body: JSON.stringify(newUser)
        })
        .then(response => response.json())
        .then(responseData => handleCreateAccountAlert(responseData));
    }
    return (
        <div>
            <h1>CREATE ACCOUNT</h1>
            <form className="form" onSubmit={handleCreateAccount}>
                <input type={"text"} name="username" placeholder="Username" value={username} onChange={handleOnChange}/>
                <input type={"email"} name="email" placeholder="Email" value={email} onChange={handleOnChange}/>
                <input type={"text"} name="recoveryQuestion" placeholder="Recovery Question" value={recoveryQuestion} onChange={handleOnChange}/>
                <input type={"text"} name="recoveryQuestionAnswer" placeholder="Answer" value={answer} onChange={handleOnChange}/>
                <input type={"password"} name="password" placeholder="Password" value={password} onChange={handleOnChange}/>
                <button type="submit">Submit</button> 
            </form>
        </div>
    );
}

export default CreateAccount;