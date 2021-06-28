import React from 'react'

function Playstyle(props) {

    const playstyles = ["Aggressive", "Passive", "Roaming", "Supportive", "Invading", "Objective - Focused", "Camp 1 Lane", "Only Fight When Ult is Up", "Splitpush", "Only Fight With Man Advantage"];

    props.getPlaystyles(playstyles)
    const playstyle = props.playstyle;

    return (
        <div className="playstyle">
            <h2 id="playstyle">{playstyle ? playstyle : "Playstyle"}</h2>
        </div>
    )
}

export default Playstyle
