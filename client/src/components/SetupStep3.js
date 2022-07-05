import React, {useEffect,useState} from "react"

function SetupStep3({currentStep,handleChange,handleSubmit}) {
      if (currentStep !== 3) {
        return null;
      } 
      else return(
        <form onSubmit={handleSubmit}>
          <p>Now for the fun part! What kind of <b>collaborative relationship</b> are you looking for? If you had to describe the main <b>genre</b> of music you play, what would it be? Where's your <b>home city</b> these days? Are you open to <b>collaborating remotely</b>? Share all those lil fun facts about yourself below to finish out your profile!</p>
         <label htmlFor="collab_type">I'm looking for a:</label>
         <br></br>
         <select name="collab_type" onChange={handleChange}>
            <option value="casual jam buddy">casual jam buddy</option>
            <option value="tour/gig buddy">tour/gig buddy</option>
            <option value="band member (co-writer)">band member(co-writer)</option>
            <option value="band member (non co-writer)">band member(non co-writer)</option>
            <option value="whatever!">whatever!</option>
         </select>
         <br></br>
         <label htmlFor="genre">Genre:</label>
         <br></br>
         <input type="text" name="genre" onChange={handleChange}></input>
         <br></br>
         <label htmlFor="homebase">Homebase (current city):</label>
         <br></br>
         <input type="text" name="homebase" onChange={handleChange}></input>
         <br></br>
         <label htmlFor="remot0e">Open to remote collab:</label>
         <br></br>
         <select name="remote" onChange={handleChange}>
            <option value="false">no</option>
            <option value="true">yes</option>
        </select>
        <br></br>
         </form>
      )
   }

export default SetupStep3