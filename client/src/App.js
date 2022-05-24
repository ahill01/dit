import logo from './logo.svg';
import './App.css';
import React, {useState,useEffect} from "react"
import Login from "./components/Login"
import Inbox from "./components/Inbox"
import LandingPage from "./components/LandingPage"
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import CommunityBoard from './components/CommunityBoard';
import BuddyBoard from './components/BuddyBoard';
import SignupForm from "./components/SignupForm"
import ProfileCard from './components/ProfileCard';
import Chatbox from './components/Chatbox';
import Header from './components/Header';
import Navbar from './components/Navbar';

function App() {
const [currentUser, setCurrentUser]=useState({})
const [allUsers,setAllUsers] = useState([])
const [currentConvo,setCurrentConvo]=useState({})

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
        <Navbar currentUser={currentUser} handleLogout={handleLogout}/>
        <Header/>
        
        <Routes>
      <Route path="/" element={<LandingPage currentUser={currentUser}/>}/>
      <Route path="/login" element={<Login setCurrentUser={setCurrentUser}/>}/>
      <Route path="/signup" element={<SignupForm/>}/>
      <Route path="/inbox" element={<Inbox currentUser={currentUser} setCurrentConvo={setCurrentConvo}/>}/>
      <Route path="inbox/:currentConvoId" element={<Chatbox currentUser={currentUser} currentConvo={currentConvo}/>}/>
      <Route path="/community" element={<CommunityBoard allUsers={allUsers}/>}/>
      <Route path="community/:userId" element={<ProfileCard currentUser={currentUser}/>}/>
      <Route path="/buddy" element={<BuddyBoard currentUser={currentUser}/>}/>
  
      </Routes>
      </Router>
    </div>
  );
}

export default App;
