import React, {useEffect,useState} from "react"
import {useNavigate} from 'react-router-dom';

function SetupStep4({currentStep,handleChange}) {
let navigate = useNavigate()

      if (currentStep !== 4) {
        return null;
      } 
      else return(
        <div>
          <h1>Congratulations!</h1>
          <p>You are finished setting up your account. You can continue adding details to your profile (including what <b>instruments</b> you play and <b>links</b> to your music or socials. Or you can start browsing our <b>community board</b> to find your next collab! </p>
          <button onClick={() => navigate(`/add-instrument`)}>Add an Instrument</button>
          <button onClick={() => navigate(`/add-links`)}>Add Links</button>
        </div>
      )
   }

export default SetupStep4