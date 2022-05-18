import logo from './logo.svg';
import './App.css';
import React, {useState,useEffect} from "react"
import Login from "./components/Login"
import Inbox from "./components/Inbox"
import LandingPage from "./components/LandingPage"
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
function App() {
const [currentUser, setCurrentUser]=useState({})
const [allUsers,setAllUsers] = useState([])
useEffect(()=>{
  fetch('/users')
  .then(res => res.json())
  .then(users => setAllUsers(users))
},[])
  return (
    <div className="App">
      <Router>
        <Link to="/">Homepage</Link>
        <br></br>
        <Link to="/login">{currentUser.id !== undefined ? "Logout": "Login"}</Link>
        <br></br>
        <Link to="/inbox">Inbox</Link>
        <br></br>
        <Routes>
      <Route path="/" element={<LandingPage/>}/>
      <Route path="/login" element={<Login setCurrentUser={setCurrentUser}/>}/>
      <Route path="/inbox" element={<Inbox currentUser={currentUser}/>}/>
      </Routes>
      </Router>
    </div>
  );
}

export default App;
