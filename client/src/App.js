import "./App.css";
import SignUpPage from "./page/SignUpPage";
import {Routes,Route} from 'react-router-dom'
import Login from "./components/login/Login";
function App() {
  return (
    <div className="App">
       <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/signUp' element={<SignUpPage/>}/>   
       </Routes>
    </div>
  );
}

export default App;
