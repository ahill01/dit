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
            createCollab(accepted_req)
            createConvo(accepted_req)})
        .catch((error) =>{
            console.log('error: '+error)
        })
    }

    function createCollab(accepted_req){
        console.log("creating collab")
        fetch(`/users/${request.reciever.id}/collabs`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                collaborator_a_id:accepted_req.requester.id,
                collaborator_b_id:accepted_req.reciever.id
            })})
            .then(res => res.json())
            .then(collab => {
                setCollabs(prevState => [...prevState,collab])
                })
            .catch((error) =>{
                console.log('error: '+error)
            })
    }

    function createConvo(accepted_req){
        console.log("creating convo")
        fetch(`/conversations`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                sender_id:accepted_req.requester.id,
                recipient_id:accepted_req.reciever.id
            })})
            .then(res => res.json())
            .then(convo => {
                console.log(convo)
                initialMsg(convo)
                })
            .catch((error) =>{
                console.log('error: '+error)
            })
    }

    function initialMsg(convo){
        console.log(convo.sender.id)
        fetch(`/conversations/${convo.id}/messages`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                user_id:convo.reciever_id,
                conversation_id:convo.id,
                body:'I approved your collab request!'
            })})
            .then(res => res.json())
            .then(msg => {
                alert(msg.body)
                })
            .catch((error) =>{
                console.log('error: '+error)
            })
    }

if(!request.accepted) {
    return(
        <div className="req">
        <h2>{`${request.requester.name}`}</h2>
        <p>{`@${request.requester.username}`}</p>
        <button type="button" name={`accept${request.id}`} onClick={handleClick} >✅ accept</button> <button type="button" name={`reject${request.id}`} onClick={handleClick} >❌ reject</button>
        </div>
    )} else return null
}

export default RecievedRequest