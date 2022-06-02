import React, {useEffect,useState} from "react"
import {useNavigate} from 'react-router-dom';

function AddInstruments({}) {
  let navigate = useNavigate();

  function renderForm(e){
    console.log("clicked "+e.target.name)
    navigate(`/add-instrument/${e.target.name}`)
  }

      // if (currentStep !== 4) {
      //   return null;
      // } 
      // else 
      return(
        <div>
    {/* {add instrument} */}
    <h2>Add an Instrument!</h2>
          <button type="button" name="voice" className="voice" onClick={renderForm}>Voice</button>
          <button type="button" name="guitar" className="guitar" onClick={renderForm}>Guitar</button>
          <button type="button" name="piano" className="piano"onClick={renderForm}>Piano</button>
          <button type="button" name="bass" className="bass" onClick={renderForm}>Bass</button>
          <button type="button" name="other" className="other" onClick={renderForm}>Other</button>
         </div>
      )
   }

export default AddInstruments