import React, {useState, useEffect} from "react"
function SentRequest({request}){
 
    return(
        <div className="req">
        <h2>{request.reciever.name}</h2>
        </div>
    )
}

export default SentRequest