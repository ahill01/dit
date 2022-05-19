function ProfileCard({user}){

    return(
        <div className="profile-card">
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
        <button>Invite to Collaborate</button>
        <button>Send a Message</button>
        </div>
    )
}

export default ProfileCard