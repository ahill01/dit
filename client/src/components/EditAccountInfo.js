import React, {useState, useEffect} from "react"

function EditAccountInfo({currentUser,setCurrentUser}){
const[instruments,setInstruments]=useState([])


function handleChange(e){
    //special cases: neopronouns, remote collab -> true/false
let value = e.target.value
let form_key = e.target.name

if(e.target.name ==="neopronouns") {
    setCurrentUser({...currentUser,pronouns:value})
} else if(e.target.name==="remote") {
    value = (e.target.value==="true")
    setCurrentUser({...currentUser, form_key:value})
} else {
    setCurrentUser({...currentUser, [form_key]:value})
}
}

function handleSubmit(e){
    e.preventDefault()
    //send post request

    //login 
}


    return(<form onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label><br></br>
        <input type="text" name="username" onChange={handleChange} value={currentUser.username}></input>
        <br></br>
        <label htmlFor="password">Password:</label><br></br>
        <input type="password" name="password" onChange={handleChange}></input>
        <br></br>
        <label htmlFor="name">Name:</label> <br></br>
        <input type="text" name="name" onChange={handleChange} value={currentUser.name}></input>
        <br></br>
        <label htmlFor="email">Email:</label><br></br>
         <input type="text" name="email" onChange={handleChange} value={currentUser.email}></input>
         <br></br>
        <label htmlFor="pronouns">Pronouns:</label>
        <br></br>
        <select name="pronouns" onChange={handleChange} value={currentUser.pronouns}>
            <option value="she/her">She/Her</option>
            <option value="he/him">He/Him</option>
            <option value="they/them">They/Them</option>
            <option value="they/she">They/She</option>
            <option value="they/he">They/He</option>
            <option value="">{`Neopronouns (specify below)`}</option>
         </select>
         <br></br>
         {currentUser.pronouns==="neopronouns" ? (<input type="text" name="neopronouns" onChange={handleChange}></input>) : null}
         <label htmlFor="gender">Gender:</label>
         <br></br>
         <select name="gender" onChange={handleChange}>
            <option value="female">Female</option>
            <option value="male">Male</option>
            <option value="nonbinary">Nonbinary</option>
         </select>
         <br></br>
         <label htmlFor="collab_type">I'm looking htmlFor a:</label>
         <br></br>
         <select name="collab_type" onChange={handleChange} value={currentUser.collab_type}>
            <option value="casual jam buddy">casual jam buddy</option>
            <option value="tour/gig buddy">tour/gig buddy</option>
            <option value="band member(co-writer)">band member(co-writer)</option>
            <option value="band member (non co-writer)">band member(non co-writer)</option>
            <option value="whatever!">whatever!</option>
         </select>
         <br></br>
         <label htmlFor="genre" onChange={handleChange}>Genre:</label>
         <br></br>
         <input type="text" name="genre" value={currentUser.genre}></input>
         <br></br>
         <label htmlFor="homebase" value={currentUser.homebase}>Homebase (current city):</label>
         <br></br>
         <input type="text" name="homebase"></input>
         <br></br>
         <label htmlFor="remote">Open to remote collab:</label>
         <br></br>
         <select name="remote" onChange={handleChange} value={currentUser.remote}>
            <option value="false">no</option>
            <option value="true">yes</option>
        </select>
        <br></br>
         <label htmlFor="bio" value={currentUser.bio}>Bio:</label>
         <br></br>
         <input type="bio" name="bio" onChange={handleChange}></input>
         <br></br>

    </form>)
}

export default EditAccountInfo