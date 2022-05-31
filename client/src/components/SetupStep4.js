import React, {useEffect,useState} from "react"

function SetupStep4({currentStep,handleChange}) {
      if (currentStep !== 4) {
        return null;
      } 
      else return(
        <form>
    {/* {add instrument} */}
    <h2>Add an Instrument!</h2>
          <button className="voice">Voice</button>
          <button className="voice">Guitar</button>
          <button className="voice">Piano</button>
          <button className="voice">Bass</button>
          <button className="voice">Other</button>
         </form>
      )
   }

export default SetupStep4