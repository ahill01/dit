import React, {useState, useEffect} from "react"
function RecievedRequest({request, setCollabRequests,setCollabs}){
      function handleClick(e){
          if(e.target.name === "reject") {
            reject()
          }
          else {
            accept()
            createCollab()
          }
      }

      function filterOut(request){
        setCollabRequests((collabRequests)=> collabRequests.filter(req => request.id !== req.id))
      }

      function reject(){ 
          console.log("rejecting")
        fetch(`/collab_requests/${request.id}`, {
        method: 'DELETE',
        headers: {'Content-Type': 'application/json'}})
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
        console.log("accepting")
        fetch(`/collab_requests/${request.id}`, {
        method: 'PATCH',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({accepted:true})})
        .then(res=> {
            if(!res.ok) throw new Error(res.status);
            else return res.json();
        })
        .then((accepted_req) => {
            filterOut(accepted_req)
            createCollab(accepted_req)})
        .catch((error) =>{
            console.log('error: '+error)
        })
    }

    function createCollab(acceptedReq){
        fetch(`/users/${request.reciever.id}/collabs`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                collaborator_a_id:acceptedReq.requester.id,
                collaborator_b_id:acceptedReq.reciever.id
            })})
            .then(res => res.json())
            .then(collab => {
                setCollabs()
                console.log(collab)})
            .catch((error) =>{
                console.log('error: '+error)
            })
    }
if(!request.accepted) {
    debugger;
    return(
        <div className="req">
        <h2>{`${request.id}`}</h2>
        <button name={`accept${request.id}`} onClick={handleClick} >✅ accept</button> <button name={`reject${request.id}`} onClick={handleClick} >❌ reject</button>
        </div>
    )} else return null
}

export default RecievedRequest