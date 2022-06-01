import logo from './logo.svg';
import './App.css';
import React, {useState,useEffect} from "react"
import Login from "./components/Login"
import Inbox from "./components/Inbox"
import LandingPage from "./components/LandingPage"
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import CommunityBoard from './components/CommunityBoard';
import BuddyBoard from './components/BuddyBoard';
import ProfileCard from './components/ProfileCard';
import Chatbox from './components/Chatbox';
import Header from './components/Header';
import Navbar from './components/Navbar';
import SetupWizard from "./components/SetupWizard"
import EditAccountInfo from './components/EditAccountInfo';


function App() {
const [currentUser, setCurrentUser]=useState({})
const [allUsers,setAllUsers] = useState([])
const [currentConvo,setCurrentConvo]=useState({})
const[loggedIn,setLoggedIn]=useState(false)
useEffect(()=>{
  fetch('/users')
  .then(res => res.json())
  .then(users => {
    if(currentUser){
      let filterCurrent = users.filter(user => user.id !== currentUser.id)
      return setAllUsers(filterCurrent)
    } else setAllUsers(users) }
    )
},[currentUser])

function handleLogout() {
  fetch("/logout", {
      method: "DELETE",
      }).then(() => {
        setCurrentUser({})
        setLoggedIn(false)})
  }

  function createCollab(requesterId,recieverId){
    console.log("making collab")
        fetch(`/users/${currentUser.id}/collabs`,{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
            collaborator_a_id:requesterId,
            collaborator_b_id:recieverId})
        })
        .then(res => res.json())
        .then(collab => alert(`collab request sent to {collab.collaborator_b.name}`));
}

  return (
    <div className="App">
      <Router>
        <Navbar currentUser={currentUser} handleLogout={handleLogout} loggedIn={loggedIn}/>
        <Header/>
        
        <Routes>
      <Route path="/" element={<LandingPage currentUser={currentUser}/>}/>
      <Route path="/login" element={<Login setCurrentUser={setCurrentUser} setLoggedIn={setLoggedIn}/>}/>
      <Route path="/manage-account" element={<EditAccountInfo currentUser={currentUser} setCurrentUser={setCurrentUser}/>}/>
      <Route path="/signup" element={<SetupWizard currentUser={currentUser} setCurrentUser={setCurrentUser}/>}/>
      <Route path="/inbox" element={<Inbox currentUser={currentUser} setCurrentConvo={setCurrentConvo}/>}/>
      <Route path="inbox/:currentConvoId" element={<Chatbox currentUser={currentUser} currentConvo={currentConvo}/>}/>
      <Route path="/community" element={<CommunityBoard allUsers={allUsers} currentUser={currentUser} createCollab={createCollab}/>}/>
      <Route path="community/:userId" element={<ProfileCard  createCollab={createCollab}/>}/>
      <Route path="/buddy" element={<BuddyBoard currentUser={currentUser}/>}/>

      </Routes>
      </Router>
    </div>
  );
}

export default App;
