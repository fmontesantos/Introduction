import React from "react"

export default function Info() {
    return(
        <div>
            <img src = "../images/profile.png" className = "profileImage"/>
            <h1 className = "profileName"> Filippos Montesantos</h1>
            <h2 className = "profileJob"> Computer Engineering Student</h2>
            <div className = "buttonFrame">
                <a href="mailto:fmontesantos@yahoo.com">
                    <button className="emailButton">
                        <img src="../images/Mail.png" />
                        <p>Email</p>
                    </button>
                </a>
                <a href="https://www.linkedin.com/in/filippos-montesantos/">
                    <button className="linkedinButton">
                        <img src="../images/linkedin.png" />
                        <p>LinkedIn</p>
                    </button>
                </a>
            </div>
        </div>
        
    )
}