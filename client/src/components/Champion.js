import React from 'react'
import placeholder from './assets/placeholder.png'

function Champion(props) {

    const picture = props.picture
    const name = props.name   


    return (
        <div className="champion">
            <img src={picture ? picture : placeholder} alt={`${name}.img`} id="championimage"/>
            <h2 id="championname" >{name ? name:"Champion Name"}</h2>
        </div>
    )
}

export default Champion
