function ProfileCard({user}){

    return(
        <div>
        <h1>{user.name}</h1>
        <h3>{user.pronouns}</h3>
        <h2>Seeking:</h2>
        <h3>{user.collab_type}</h3>
        <h2>plays:</h2>
        <ul>
        {user.instruments.map( instrument=> {
            return <li>{`${instrument.kind} (${instrument.proficiency})`}</li>
        })}
        </ul>
        </div>
    )
}

export default ProfileCard