import React, {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom"

function ProfileCard({createCollab}){
const [user,setUser] = useState({})
const [instruments, setInstruments]=useState([])

let {userId} = useParams()

useEffect(() => {
    fetch(`/users/${userId}`)
    .then(res => res.json())
    .then(showUser => {
        setUser(showUser)
        setInstruments(showUser.instruments)})
    },[])

    return(
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
        <div className="links">
        <h2>Links</h2>
        {user.links.map(link => {return <button className="links" href={link.url}>{link.kind}</button>})}
        </div>
        <br></br>
        <button className="InviteCollab" onClick={createCollab}>Invite to Collaborate</button>
        <button clasName="sendMessage">Send a Message</button>
        </div>
    )
}

export default ProfileCard