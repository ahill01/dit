import React, {useState, useEffect} from "react"

function SignupForm(){
const[instruments,setInstruments]=useState([])
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


    return(<form onSubmit={handleSubmit}>
        <label for="username">Username:</label><br></br>
        <input type="text" name="username" onChange={handleChange}></input>
        <br></br>
        <label for="password">Password:</label><br></br>
        <input type="password" name="password" onChange={handleChange}></input>
        <br></br>
        <label for="name">Name:</label> <br></br>
        <input type="text" name="name" onChange={handleChange}></input>
        <br></br>
        <label for="email">Email:</label><br></br>
         <input type="text" name="email" onChange={handleChange}></input>
         <br></br>
        <label for="pronouns">Pronouns:</label>
        <br></br>
        <select name="pronouns" onChange={handleChange}>
            <option value="she/her">She/Her</option>
            <option value="he/him">He/Him</option>
            <option value="they/them">They/Them</option>
            <option value="they/she">They/She</option>
            <option value="they/he">They/He</option>
            <option value="">{`Neopronouns (specify below)`}</option>
         </select>
         <br></br>
         <label for="neopronouns">Neopronouns:</label>
         <br></br>
         <input type="text" name="neopronouns" onChange={handleChange}></input>
         <br></br>
         <label for="gender">Gender:</label>
         <br></br>
         <select name="gender" onChange={handleChange}>
            <option value="female">Female</option>
            <option value="male">Male</option>
            <option value="nonbinary">Nonbinary</option>
         </select>
         <br></br>
         <label for="collab_type">I'm looking for a:</label>
         <br></br>
         <select name="collab_type" onChange={handleChange}>
            <option value="casual jam buddy">casual jam buddy</option>
            <option value="tour/gig buddy">tour/gig buddy</option>
            <option value="band member(co-writer)">band member(co-writer)</option>
            <option value="band member (non co-writer)">band member(non co-writer)</option>
            <option value="whatever!">whatever!</option>
         </select>
         <br></br>
         <label for="genre" onChange={handleChange}>Genre:</label>
         <br></br>
         <input type="text" name="genre"></input>
         <br></br>
         <label for="homebase">Homebase (current city):</label>
         <br></br>
         <input type="text" name="homebase"></input>
         <br></br>
         <label for="remote">Open to remote collab:</label>
         <br></br>
         <select name="remote" onChange={handleChange}>
            <option value="false">no</option>
            <option value="true">yes</option>
        </select>
        <br></br>
         <label for="bio">Bio:</label>
         <br></br>
         <input type="bio" name="bio" onChange={handleChange}></input>
         <br></br>

    </form>)
}

export default SignupForm