import React from "react"
import ProfileCard from "./ProfileCard"
import SummaryCard from "./SummaryCard"

function LandingPage({currentUser}){

    return(
        <div className="landing">
        <h1>Landing Page</h1>
        <SummaryCard user={currentUser}></SummaryCard>
        </div>
    )
}

export default LandingPage