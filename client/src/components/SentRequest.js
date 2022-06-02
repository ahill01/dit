import React, {useState, useEffect} from "react"
function SentRequest({request}){

    return(
        <div className="req">
        <p>{request.reciever.name}</p>
        </div>
    )
}

export default SentRequest