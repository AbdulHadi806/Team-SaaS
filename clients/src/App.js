import "./App.css";
import SignUpPage from "./page/SignUpPage";
import {Routes,Route} from 'react-router-dom'
import Login from "./components/login/Login";
import Protectedroute from "./components/protectedRoute/ProtectedRouter";
import DashboardPage from "./page/DashboardPage";
function App() {
  
  return (
    <div className="App">
       <Routes>
        <Route path='/' element={<Login/>}/>
          <Route element={ <Protectedroute />}>
          <Route path={`/dashboard`} element={ <DashboardPage/>}/>
          </Route>
        <Route path='/signUp' element={<SignUpPage/>}/>   
       </Routes>
    </div>
  );
}

export default App;

