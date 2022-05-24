import React, {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom"

function ProfileCard({currentUser}){
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

function createCollab(){
    console.log("making collab")
        fetch(`/users/${currentUser.id}/collabs`,{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
            collaborator_a_id:currentUser.id,
            collaborator_b_id:userId})
        })
        .then(res => res.json())
        .then(collab => alert(`collab request sent to {collab.collaborator_b.name}`));
}

    return(
        <div className="profile-card">
        <h1>{user.name}</h1>
        <h3>{user.pronouns}</h3>
        <h2>Seeking:</h2>
        <h3>{user.collab_type}</h3>
        <h2>plays:</h2>
        <ul>
        {instruments.map(instrument=> {
            return <li>{`${instrument.kind} (${instrument.proficiency})`}</li>
        })}
        </ul>
        <button onClick={createCollab}>Invite to Collaborate</button>
        <button>Send a Message</button>
        </div>
    )
}

export default ProfileCard