import React, {useEffect, useState} from "react"
import SetupStep1 from "./SetupStep1"
import SetupStep2 from "./SetupStep2"
import SetupStep3 from "./SetupStep3"
import AddInstruments from "./AddInstruments"

function SetupWizard({currentUser,setCurrentUser}){
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

function newUserLogin(){
    console.log("logging in new user")
    fetch('/login', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({credentials:{username:newUser.username,password:newUser.password}}) 
   })
   .then(res=> {
    if(!res.ok) throw new Error(res.status);
    else return res.json();
   })
   .then((user) => setCurrentUser(user))
   .catch((error) =>{
        console.log('error: '+error)
    })
}

function handleSubmit(e){
    e.preventDefault()
   if(currentStep===1){
       //post request
    fetch(`/users`, {
        method:'POST',
        headers: {
            'Content-Type': 'application/json'},
        body:JSON.stringify(newUser)
    })
    .then(res => res.json())
    .then(newUserRes => newUserLogin())
} else {
    fetch(`/users/${currentUser.id}`, {
        method:'PATCH',
        headers: {
            'Content-Type': 'application/json'},
        body:JSON.stringify(newUser)
    })
    .then(res => res.json())
    .then(newUserRes => {
        setCurrentUser(newUserRes)})
   }


}

function next(e) {
    handleSubmit(e)
      if (currentStep >= 3) {
        setCurrentStep(4);
      } else {
        setCurrentStep(currentStep => (currentStep + 1));
      }
    }
     
function prev() {
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
           <SetupStep3 currentStep={currentStep} handleChange={handleChange} handleSubmit={handleSubmit}/>
           <AddInstruments currentStep={currentStep} handleChange={handleChange}currentUser={currentUser}/>
           <button onClick={prev}>Prev</button>
           <button onClick={(e)=>next(e)}>Next</button>
        </div>
      );
    }
    export default SetupWizard