import React, {useState, useEffect} from "react"
import RequestsBin from "./RequestsBin"
import ActiveCollabs from "./ActiveCollabs"

function BuddyBoard({currentUser}){
    const [collabs, setCollabs] = useState([])
    const [collabRequests, setCollabRequests]=useState([])
    const[pendingRequests, setPendingRequests]=useState([])
    const[recievedRequests,setRecievedRequests]=useState([])

// fetch collab requests
    useEffect(()=>{
        fetch(`/users/${currentUser.id}/recieved_requests`)
        .then(res => {
            if(!res.ok) throw new Error(res.status);
            else return res.json();
        })
        .then(requests => {
            setCollabRequests(requests)})
        .catch((error) =>{
            console.log('error: '+error)
        })
      },[currentUser])

      useEffect(()=>{
        fetch(`/users/${currentUser.id}/pending_requests`)
        .then(res => {
            if(!res.ok) throw new Error(res.status);
            else return res.json();
        })
        .then(pendingReq => {
            setPendingRequests(pendingReq)})
        .catch((error) =>{
            console.log('error: '+error)
        })
      },[currentUser])

//fetch collabs
      useEffect(()=>{
        fetch(`/users/${currentUser.id}/collabs`)
        .then(res => {
            if(!res.ok) throw new Error(res.status);
            else return res.json();
        })
        .then(collabs => {
            setCollabRequests(collabs)})
        .catch((error) =>{
            console.log('error: '+error)
        })
      },[currentUser])

    return(
        <div>
        <RequestsBin collabRequests={collabRequests} setCollabRequests={setCollabRequests} setCollabs={setCollabs} pendingCollabRequests={pendingRequests}/>
        <ActiveCollabs currentUser={currentUser} collabs={collabs} setCollabs={setCollabs}/>
        </div>
    )
}

export default BuddyBoard