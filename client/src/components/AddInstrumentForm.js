import React, {useEffect,useState} from "react"
import {useNavigate, useParams} from "react-router-dom"

function AddInstrumentForm({currentUser,setCurrentUser,instruments,setInstruments}) {
let navigate = useNavigate();
let {inst_kind} = useParams();
  
  const[newInstrument,setNewInstrument]=useState({
    kind:inst_kind,
    proficiency:"beginner",
    primary:false,
    user_id:currentUser.id
  })

  function handleChange(e){
    if(e.target.value === "true") {
    setNewInstrument({...newInstrument,proficiency:true})
    } else {
      setNewInstrument({...newInstrument,[e.target.name]:e.target.value})
    }
  }

  function handleSubmit(e){
    e.preventDefault()
    fetch(`/instruments`, {
      method:'POST',
      headers: {
          'Content-Type': 'application/json'},
      body:JSON.stringify(newInstrument)
  })
  .then(res => res.json())
  .then(newInst=> {
    alert(`${newInst.kind} added`)
    setInstruments([...instruments,newInst])
    setCurrentUser({...currentUser,instruments:instruments})})
  .catch((error) =>{
    console.log('error: '+error)
})
  }

  function navBack(){
    navigate(-1)
  }

  return(
        <form>
    <h2>{inst_kind==="other" ? (<input type="text" name="kind" placeholder="type of instrument" onChange={handleChange}></input>) :inst_kind}</h2>
        <label htmlFor="proficiency">Proficiency:</label>
          <select name="proficiency" onChange={handleChange} value={newInstrument.proficiency}>
            <option value="beginner">Beginner</option>
            <option value="intermediate">Intermediate</option>
            <option value="advanced">Advanced/Professional</option>
         </select>
         <br></br>
         <label htmlFor="primary">Is this your primary instrument?</label>
         <select name="primary" onChange={handleChange} value={newInstrument.primary}>
            <option value="yes">yes</option>
            <option value="no">no</option>
         </select>
         <br></br>
          <button type="button" onClick={navBack}>Back</button>
          <button type="submit" onClick={handleSubmit}>Add Instrument</button>
         </form>
      )
   }

export default AddInstrumentForm