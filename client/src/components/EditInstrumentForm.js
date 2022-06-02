import React, {useEffect,useState} from "react"
import {useNavigate, useParams} from "react-router-dom"

function EditInstrumentForm({instrument,instruments, setInstruments,currentUser,setCurrentUser}) {
let navigate = useNavigate();
  
  const[updatedInstrument,setUpdatedInstrument]=useState({
    kind:instrument.kind,
    proficiency:instrument.proficiency,
    primary:instrument.primary ? "yes":"no"})

  function handleChange(e){
    if(e.target.value === "true") {
    setUpdatedInstrument({...updatedInstrument,proficiency:true})
    } else {
      setUpdatedInstrument({...updatedInstrument,[e.target.name]:e.target.value})
    }
  }

  function handleSubmit(e){
    e.preventDefault()
    fetch(`/instruments/${instrument.id}`, {
      method:'PATCH',
      headers: {
          'Content-Type': 'application/json'},
      body:JSON.stringify(updatedInstrument)
  })
  .then(res => res.json())
  .then(updatedInst=> {
    alert(`${updatedInst.kind} updated`)
    let updated = updateRenderedInstruments(instruments,updatedInst)
    setInstruments(updated)
    setCurrentUser({...currentUser,instruments:updated})})
  .catch((error) =>{
    console.log('error: '+error)
})
  }

  function updateRenderedInstruments (instArray, updatedInst) {
    const copyInstArr = [...instArray]
  const index = copyInstArr.findIndex(inst => inst.id === updatedInst.id)
    copyInstArr.splice(index,1,updatedInst)
    return copyInstArr
}

function deleteInst(){
  fetch(`/instruments/${instrument.id}`, {
    method:'DELETE',
    headers: {
        'Content-Type': 'application/json'}
})
.then(res => res.json())
.then(deletedInst=> {
  setInstruments(instruments.filter(instrument => instrument.id !== deletedInst.id))
  setCurrentUser({...currentUser,instruments:instruments})})
.catch((error) =>{
  console.log('error: '+error)
})
}

  return(
        <form>
    <h2>{instrument.kind}</h2>
        <label htmlFor="proficiency">Proficiency:</label>
          <select name="proficiency" onChange={handleChange} value={updatedInstrument.proficiency}>
            <option value="beginner">Beginner</option>
            <option value="intermediate">Intermediate</option>
            <option value="advanced">Advanced/Professional</option>
         </select>
         <br></br>
         <label htmlFor="primary">Is this your primary instrument?</label>
         <select name="primary" onChange={handleChange} value={updatedInstrument.primary}>
            <option value="yes">yes</option>
            <option value="no">no</option>
         </select>
         <br></br>
          <button type="submit" onClick={handleSubmit}>{`Update ${instrument.kind}`}</button>
          <button type="button" onClick={deleteInst}>Delete</button>
         </form>
      )
   }

export default EditInstrumentForm