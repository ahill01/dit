import React, {useState, useEffect} from "react"
import RecievedRequest from "./RecievedRequest"
import SentRequest from "./SentRequest"

function RequestsBin({setCollabRequests,collabRequests,setCollabs,pendingCollabRequests}){
console.log(collabRequests)

   if(collabRequests.length >0) {
    return(
        <div>
        <h1>Collab Requests</h1>
        <h2>Incoming Requests</h2>
        {collabRequests.map(request => <RecievedRequest request={request} setCollabRequests={setCollabRequests} setCollabs={setCollabs}/>)}
       <h2>Sent Requests</h2>
       {pendingCollabRequests.map(request => <SentRequest request={request}/> )}
        </div>
    )
   } else return <h4>no incoming requests</h4>
}

export default RequestsBin

  