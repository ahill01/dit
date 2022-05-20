import React, {useState, useEffect} from "react"
function RequestsBin({currentUser}){
    const [collabRequests, setCollabRequests]=useState([])

    useEffect(()=>{
        console.log("fetching")
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
            return (
            <div className="req">
            <h2>{`${request.reciever.username}`}</h2>
            <button>✅ accept</button> <button>❌ reject</button>
            </div>)
        })}
        </div>
    )
}

export default RequestsBin

  