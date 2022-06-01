import React, {useState, useEffect} from "react"
import Request from "./Request"
function RequestsBin({setCollabRequests,collabRequests}){

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

  