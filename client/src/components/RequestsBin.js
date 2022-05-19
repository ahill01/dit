import React, {useState, useEffect} from "react"
function ActiveCollabs({currentUser}){
const [collabRequests, setCollabRequests]=useState([])

    useEffect(()=>{
        fetch(`/users/${currentUser.id}/collab_requests`)
        .then(res => {
            if(!res.ok) throw new Error(res.status);
            else return res.json();
        })
        .then(requests => setCollabRequests(requests))
        .catch((error) =>{
            console.log('error: '+error)
        })
      },[])

    return(
        <div>
        <h1>Landing Page</h1>
        {collabRequests.map(request => {
            return <h2>{request.id}</h2>
        })}
        </div>
    )
}

export default ActiveCollabs

  