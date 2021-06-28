import React from 'react'

function Role(props) {

    const roles = ["Mid", "Top", "Jungle", "Support", "Marksman"];

    props.getRoles(roles)
    let role = props.role
    const summoner = props.summoner

    if(summoner.name === "Smite"){
        role = "Jungle"
    }

    return (
        <div className="role">
            <h2 id="role">{role ? role : "Role" }</h2>
        </div>
    )
}

export default Role
