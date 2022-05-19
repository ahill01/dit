import logo from './logo.svg';
import './App.css';
import React, {useState,useEffect} from "react"
import Login from "./components/Login"
import Inbox from "./components/Inbox"
import LandingPage from "./components/LandingPage"
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import CommunityBoard from './components/CommunityBoard';
import BuddyBoard from './components/BuddyBoard';

function App() {
const [currentUser, setCurrentUser]=useState({})
const [allUsers,setAllUsers] = useState([])

useEffect(()=>{
  fetch('/users')
  .then(res => res.json())
  .then(users => setAllUsers(users))
},[])

function handleLogout() {
  fetch("/logout", {
      method: "DELETE",
      }).then(setCurrentUser({}))
  }

  return (
    <div className="App">
      <Router>
        <Link to="/">Homepage</Link>
        <br></br>
        <Link to="/login" onClick={handleLogout}>{currentUser.id !== undefined ? "Logout": "Login"}</Link>
        <br></br>
        <Link to="/inbox">Inbox</Link>
        <br></br>
        <Link to="/community">Community Board</Link>
        <br></br>
        <Link to="/buddy">Buddy Board</Link>
        <br></br>
        <Routes>
      <Route path="/" element={<LandingPage allUsers={allUsers}/>}/>
      <Route path="/login" element={<Login setCurrentUser={setCurrentUser}/>}/>
      <Route path="/inbox" element={<Inbox currentUser={currentUser}/>}/>
      <Route path="/community" element={<CommunityBoard/>}/>
      <Route path="/community" element={<BuddyBoard/>}/>
      </Routes>
      </Router>
    </div>
  );
}

export default App;
