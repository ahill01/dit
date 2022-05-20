import React, {useState, useEffect} from "react"

function ActiveCollabs({currentUser}){
const [collabs, setCollabs] = useState([])
    useEffect(()=>{
        console.log("fetching")
        fetch(`/users/${currentUser.id}/collabs`)
        .then(res => {
            if(!res.ok) throw new Error(res.status);
            else return res.json();
        })
        .then(collaborations => setCollabs(collaborations))
        .catch((error) =>{
            console.log('error: '+error)
        })
      },[])
    return(
        <div>
        <h1>Collabs</h1>
        {collabs.map(collab=> {
            return <h2>{collab.name}</h2>
        })}
        </div>
    )
}

export default ActiveCollabs