import React, {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom"

function ProfileCard({createCollab}){
const [user,setUser] = useState({})
const [instruments, setInstruments]=useState([])
let navigate = useNavigate();
let {userId} = useParams()

useEffect(() => {
    fetch(`/users/${userId}`)
    .then(res => res.json())
    .then(showUser => {
        setUser(showUser)
        setInstruments(showUser.instruments)})
    },[])

function renderLinks(){
    if(user.links !== undefined && user.links[0] !== undefined){
        return (
        <div className="links"> 
        <h2>Links</h2>
         {user.links.map(link => {return <button className="links"><a href={link.url}>{link.kind}</a></button>})}
        </div>)
    } else return null
}
    return(
        <div>
        <div className="profile-card">
        <h1>{user.name}</h1>
        <p>{`@${user.username}`}</p>
        <h4>{user.pronouns}</h4>
        <h2>Seeking:</h2>
        <h3>{user.collab_type}</h3>
        <h2>plays:</h2>
        <ul>
        {instruments.map(instrument=> {
            return <li>{`${instrument.kind} (${instrument.proficiency})`}</li>
        })}
        </ul>
        {renderLinks()}
        <br></br>
        <button className="InviteCollab" onClick={createCollab}>Invite to Collaborate</button>
        <button clasName="sendMessage">Send a Message</button>
        </div>
        <button onClick={() => navigate(-1)}>Back</button>
        </div>
    )
}

export default ProfileCard