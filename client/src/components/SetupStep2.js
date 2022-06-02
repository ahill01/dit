import React, {useEffect,useState} from "react"


function SetupStep2({currentStep,handleChange}) {
const[pronouns,setPronouns]=useState("")

      if (currentStep !== 2) {
        return null;
      } 
      else return(
        <form>
        <p className="center">Now let's get to know a little more about you! Providing basic demographic information like your <b>name</b>, <b>pronouns</b>, <b>gender</b>, and a  <b>brief bio</b> will help us hook you up with that dream collab partner more easily. </p>
        <label htmlFor="name">Name:</label> <br></br>
        <input type="text" name="name" onChange={handleChange}></input>
        <br></br>
        <label htmlFor="pronouns">Pronouns:</label>
        <br></br>
        <select name="pronouns" onChange={(e)=>{
          handleChange(e) 
          setPronouns(e.target.value)}}>
            <option value="she/her">She/Her</option>
            <option value="he/him">He/Him</option>
            <option value="they/them">They/Them</option>
            <option value="they/she">They/She</option>
            <option value="they/he">They/He</option>
            <option value="neopronouns">{`Neopronouns (specify below)`}</option>
         </select>
         <br></br>
         {pronouns==="neopronouns" ? (<input type="text" name="neopronouns" onChange={handleChange}></input>) : null}
         <br></br>
         <label htmlFor="gender">Gender:</label>
         <br></br>
         <select name="gender" onChange={handleChange}>
            <option value="female">Female</option>
            <option value="male">Male</option>
            <option value="nonbinary">Nonbinary</option>
         </select>
         <br></br>
         <label htmlFor="bio">Bio <br/>
         how I'd describe me, in my own words:</label>
         <br></br>
         <input type="bio" name="bio" onChange={handleChange}></input>
         <br></br>
         </form>
      )
   }

export default SetupStep2