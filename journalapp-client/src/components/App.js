import {Routes, Route} from "react-router-dom"
import CreateAccount from "./CreateAccount";
import Login from "./Login";
import ForgotPassword from "./ForgotPassword";

function App() {
  let url = ""
  return (
    <div className="App">
      <div className={'sitetitle'}>
        <h1>JOURNAL EXPRESS</h1>
      </div> 
      <Routes>
      <Route path="/" element={ <Login/>}/>
      <Route path="create-account" element={<CreateAccount/>}/>
      <Route path='forgot-password/*' element ={<ForgotPassword/>}/>

      </Routes>
    </div>
  );
}

export default App;
