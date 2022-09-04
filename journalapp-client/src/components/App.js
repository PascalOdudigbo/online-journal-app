import {Routes, Route} from "react-router-dom"
import CreateAccount from "./CreateAccount";
import Login from "./Login";

function App() {
  let url = ""
  return (
    <div className="App">
      <Routes>
      <Route path="/" element={ <Login/>}/>
      <Route path="create-account" element={<CreateAccount/>}/>
      </Routes>
    </div>
  );
}

export default App;
