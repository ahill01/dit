import React, {useEffect, useState} from "react"
import SetupStep1 from "./SetupStep1"
import SetupStep2 from "./SetupStep2"

function SetupWizard(){
const [currentStep, setCurrentStep]=useState(1)
const [newUser, setNewUser]=useState({
    name:"",
    username:"",
    password:"",
    pronouns:"she/her",
    gender:"female",
    collab_type:"casual jam buddy",
    genre:"",
    email:"",
    remote:false,
    homebase:"",
    bio:""
})

function handleChange(e){
    //special cases: neopronouns, remote collab -> true/false
let value = e.target.value
let form_key = e.target.name

if(e.target.name ==="neopronouns") {
    setNewUser({...newUser,pronouns:value})
} else if(e.target.name==="remote") {
    value = (e.target.value==="true")
    setNewUser({...newUser, form_key:value})
} else {
    setNewUser({...newUser, [form_key]:value})
}
}

function handleSubmit(e){
    e.preventDefault()
    //send post request

    //login 
}

function next(data) {
      if (currentStep >= 2) {
        setCurrentStep(3);
      } else {
        setCurrentStep(currentStep => (currentStep + 1));
      }
    }
     
function prev(data) {
      if (currentStep <= 1) {
       setCurrentStep(1);
      } else {
       setCurrentStep(currentStep => (currentStep - 1));
      }
    }
    
      return (
        <div>
           <SetupStep1 currentStep={currentStep} handleChange={handleChange} />
           <SetupStep2 currentStep={currentStep} handleChange={handleChange}/>
           {/* <Step3 currentStep={currentStep} /> */}
           <button onClick={next}>Next</button>
           <button onClick={prev}>Prev</button>
        </div>
      );
    }
    export default SetupWizard