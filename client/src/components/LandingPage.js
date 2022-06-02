import React from "react"
import landing_image_1 from "./landing_image_1.png"
function LandingPage({currentUser}){

    return(
        <div className="container landing">
        <h1 className="page-header">Do It Together!</h1>
        <h2 className="page-subheader">Because why DIY when you could DIT?</h2>
        <p className="lead">Sign up and find your next jam buddy today!</p>
        <img src={landing_image_1} className="img-fluid img-thumbnail" alt="Velveteen Echo performing at Wonky Power in Houston, TX"/>
        <p>Velveteen Echo performing at Wonky Power in Houston, TX</p>
        </div>
    )
}

export default LandingPage