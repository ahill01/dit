function SummaryCard({user}){
// debugger;
    return(
        <div className="profile-card">
        <h1>{user.name}</h1>
        <h3>{user.pronouns}</h3>
        <h2>Seeking:</h2>
        <h3>{user.collab_type}</h3>
        <h2>{`primary instrument:${user.primary_inst[0].kind}`}</h2>
        <button>Invite to Collaborate</button>
        <button>Send a Message</button>
        </div>
    )
}

export default SummaryCard