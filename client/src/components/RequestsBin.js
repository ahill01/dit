import React, {useState, useEffect} from "react"
import Request from "./Request"
function RequestsBin({currentUser,setCollabs}){
    const [collabRequests, setCollabRequests]=useState([])

    useEffect(()=>{
        fetch(`/users/${currentUser.id}/collab_requests`)
        .then(res => {
            if(!res.ok) throw new Error(res.status);
            else return res.json();
        })
        .then(requests => {
            console.log(requests)
            setCollabRequests(requests)})
        .catch((error) =>{
            console.log('error: '+error)
        })
      },[currentUser])

    return(
        <div>
        <h1>Collab Requests</h1>
        {collabRequests.map(request => {
            if(!request.accepted){
            return <Request request={request} setCollabRequests={setCollabRequests}/>
            }})}
        </div>
    )
}

export default RequestsBin

  