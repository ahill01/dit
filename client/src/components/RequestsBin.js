import React, {useState, useEffect} from "react"
function RequestsBin({currentUser}){
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

      function handleClick(e){
          if(e.target.name="reject") {
            reject
          }
          else {

          }
      }

      function filterOut(request){
        setCollabRequests((collabRequests)=> collabRequests.filter(request => request.id !== rejected_req.id))
      }
      function reject(request_id){ 
        fetch(`/requests/${request_id}`, {
        method: 'PATCH',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({credentials}) 
            })
        .then(res=> {
            if(!res.ok) throw new Error(res.status);
            else return res.json();
        })
        .then((rejected_req) => filterOut(rejected_req))
            .catch((error) =>{
                console.log('error: '+error)
            })
      }

      function accept(){
          
    }

    return(
        <div>
        <h1>Collab Requests</h1>
        {collabRequests.map(request => {
            return (
            <div className="req" id={request.id}>
            <h2>{`${request.reciever.username}`}</h2>
            <button onClick={handleClick}>✅ accept</button> <button onClick={handleClick}>❌ reject</button>
            </div>)
        })}
        </div>
    )
}

export default RequestsBin

  