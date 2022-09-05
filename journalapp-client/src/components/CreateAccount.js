import React, {useState} from "react";

function CreateAccount(){
    const url = "http://localhost:9292"

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

    function handleCreateAccount(e){
        e.preventDefault()
        const newUser = {
            username: username,
            email: email,
            recovery_question: recoveryQuestion,
            answer: answer, 
            password: password
        }
        fetch(`${url}+/create-account/`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            }, 
            body: JSON.stringify(newUser)
        })
        .then(response => response.json())
        .then(responseData => console.log(responseData))
    }
    return (
        <div>
            <h1>CREATE ACCOUNT</h1>
            <form className="form" onSubmit={handleCreateAccount}>
                <input type={"text"} name="username" placeholder="Username" onChange={handleOnChange}/>
                <input type={"email"} name="email" placeholder="Email" onChange={handleOnChange}/>
                <input type={"text"} name="recoveryQuestion" placeholder="Recovery Question" onChange={handleOnChange}/>
                <input type={"text"} name="recoveryQuestionAnswer" placeholder="Answer" onChange={handleOnChange}/>
                <input type={"password"} name="password" placeholder="Password" onChange={handleOnChange}/>
                <button type="submit">Submit</button> 
            </form>
        </div>
    );
}

export default CreateAccount;