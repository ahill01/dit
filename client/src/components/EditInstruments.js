import React, {useEffect,useState} from "react"
import {useNavigate,useParams} from 'react-router-dom';
import EditInstrumentForm from "./EditInstrumentForm";

function EditInstruments({instruments,setInstruments,currentUser,setCurrentUser}) {
  let navigate = useNavigate();

  function renderForm(e){
    console.log("clicked "+e.target.name)
    navigate(`/edit-instruments/`)
  }

  function navBack(){
    navigate(-1)
  }

      return(
        <div>
        {instruments.map(instrument => <EditInstrumentForm instrument={instrument} instruments={instruments} setInstruments={setInstruments} currentUser={currentUser} setCurrentUser={setCurrentUser}/>)}
        <button type="button" onClick={navBack}>Back</button>
        </div>
      )
   }

export default EditInstruments