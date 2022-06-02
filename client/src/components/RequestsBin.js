import React, {useState, useEffect} from "react"
import RecievedRequest from "./RecievedRequest"
import SentRequest from "./SentRequest"

function RequestsBin({setCollabs,currentUser}){
const [collabRequests, setCollabRequests]=useState([])

// recieved requests 
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

   if(collabRequests.length >0) {
    return(
        <div className="requests">
        <h1>Collab Requests</h1>
        <h2>Incoming Requests</h2>
        {collabRequests.map(request => <RecievedRequest request={request} setCollabRequests={setCollabRequests} setCollabs={setCollabs}/>)}
        </div>
    )
   } else return <div className="requests">
               <h1>Collab Requests</h1>
               <p>no incoming requests</p>
                </div>
}

export default RequestsBin

  